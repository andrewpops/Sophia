import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    // Verify the webhook secret to ensure it's from Contentful
    const authHeader = request.headers.get('authorization')
    const expectedSecret = process.env.CONTENTFUL_WEBHOOK_SECRET
    
    if (!expectedSecret) {
      console.error('CONTENTFUL_WEBHOOK_SECRET not configured')
      return NextResponse.json({ error: 'Webhook secret not configured' }, { status: 500 })
    }
    
    if (authHeader !== `Bearer ${expectedSecret}`) {
      console.error('Invalid webhook secret')
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    
    // Log the webhook for debugging
    console.log('Contentful webhook received:', {
      contentType: body.sys?.contentType?.sys?.id,
      operation: body.sys?.revision ? 'update' : 'delete',
      id: body.sys?.id
    })

    // Determine what to revalidate based on content type
    const contentType = body.sys?.contentType?.sys?.id
    
    switch (contentType) {
      case 'blogPost':
        // Revalidate blog pages
        revalidatePath('/blog')
        revalidatePath('/blog/[slug]', 'page')
        console.log('Revalidated blog pages')
        break
        
      case 'category':
        // Revalidate blog page (categories affect filtering)
        revalidatePath('/blog')
        console.log('Revalidated blog page for category change')
        break
        
      default:
        // For any other content type, revalidate blog pages as fallback
        revalidatePath('/blog')
        console.log('Revalidated blog pages (fallback)')
    }

    return NextResponse.json({ 
      message: 'Revalidation triggered successfully',
      contentType,
      timestamp: new Date().toISOString()
    })
    
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json(
      { error: 'Failed to process webhook' }, 
      { status: 500 }
    )
  }
}