interface ExpectationStep {
  step: string
  description: string
}

interface WhatToExpectData {
  title: string
  steps: ExpectationStep[]
}

interface WhatToExpectProps {
  data: WhatToExpectData
}

export function WhatToExpect({ data }: WhatToExpectProps) {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">{data.title}</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Your journey to wellness follows a carefully designed process for optimal results.
          </p>
        </div>

        <div className="space-y-8">
          {data.steps.map((step, index) => (
            <div key={index} className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg flex-shrink-0">
                {index + 1}
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-serif font-semibold text-foreground">{step.step}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
