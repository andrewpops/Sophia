"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ChevronLeft, ChevronRight } from "lucide-react"
import type { BookingData } from "@/components/booking-flow"

interface CalendarSelectionProps {
  bookingData: BookingData
  updateBookingData: (data: Partial<BookingData>) => void
  onNext: () => void
  onPrev: () => void
}

// Mock available time slots
const timeSlots = ["9:00 AM", "10:30 AM", "12:00 PM", "1:30 PM", "3:00 PM", "4:30 PM", "6:00 PM"]

export function CalendarSelection({ bookingData, updateBookingData, onNext, onPrev }: CalendarSelectionProps) {
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [currentMonth, setCurrentMonth] = useState(new Date())

  // Generate calendar days for the current month
  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear()
    const month = currentMonth.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days = []

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day)
      const isToday = date.toDateString() === new Date().toDateString()
      const isPast = date < new Date()
      const isWeekend = date.getDay() === 0 || date.getDay() === 6
      const dateString = date.toISOString().split("T")[0]

      days.push({
        day,
        date: dateString,
        isToday,
        isPast,
        isWeekend,
        isAvailable: !isPast && !isWeekend, // Simplified availability logic
      })
    }

    return days
  }

  const handleDateSelect = (dateString: string) => {
    setSelectedDate(dateString)
    setSelectedTime("") // Reset time when date changes
  }

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time)
  }

  const handleContinue = () => {
    updateBookingData({
      date: selectedDate,
      time: selectedTime,
    })
    onNext()
  }

  const navigateMonth = (direction: "prev" | "next") => {
    setCurrentMonth((prev) => {
      const newMonth = new Date(prev)
      if (direction === "prev") {
        newMonth.setMonth(prev.getMonth() - 1)
      } else {
        newMonth.setMonth(prev.getMonth() + 1)
      }
      return newMonth
    })
  }

  const calendarDays = generateCalendarDays()
  const monthName = currentMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" })

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-serif font-bold text-foreground">Select Date & Time</h2>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Choose your preferred appointment date and time for{" "}
          <span className="text-primary font-medium">
            {bookingData.service?.name} - {bookingData.service?.package}
          </span>
          .
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Calendar */}
        <Card className="border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
            <CardTitle className="text-xl font-serif flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              {monthName}
            </CardTitle>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={() => navigateMonth("prev")}>
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" onClick={() => navigateMonth("next")}>
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-7 gap-2 mb-4">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day} className="text-center text-sm font-medium text-muted-foreground p-2">
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-2">
              {calendarDays.map((day, index) => (
                <div key={index} className="aspect-square">
                  {day && (
                    <button
                      onClick={() => day.isAvailable && handleDateSelect(day.date)}
                      disabled={!day.isAvailable}
                      className={`w-full h-full rounded-lg text-sm font-medium transition-colors ${
                        selectedDate === day.date
                          ? "bg-primary text-primary-foreground"
                          : day.isAvailable
                            ? "hover:bg-muted text-foreground"
                            : "text-muted-foreground cursor-not-allowed"
                      } ${day.isToday ? "ring-2 ring-primary ring-opacity-50" : ""}`}
                    >
                      {day.day}
                    </button>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary rounded"></div>
                  <span>Selected</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 border-2 border-primary rounded"></div>
                  <span>Today</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Time Slots */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-xl font-serif flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              Available Times
            </CardTitle>
            {selectedDate && (
              <p className="text-sm text-muted-foreground">
                {new Date(selectedDate).toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            )}
          </CardHeader>
          <CardContent>
            {selectedDate ? (
              <div className="grid grid-cols-2 gap-3">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => handleTimeSelect(time)}
                    className={`p-3 rounded-lg text-sm font-medium transition-colors ${
                      selectedTime === time
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted hover:bg-muted/80 text-foreground"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <Clock className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>Please select a date first to see available times</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Selected Summary */}
      {selectedDate && selectedTime && (
        <Card className="border-primary/20 bg-primary/5">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Appointment Summary</h3>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>
                    <span className="font-medium">Service:</span> {bookingData.service?.name}
                  </p>
                  <p>
                    <span className="font-medium">Package:</span> {bookingData.service?.package}
                  </p>
                  <p>
                    <span className="font-medium">Date:</span>{" "}
                    {new Date(selectedDate).toLocaleDateString("en-US", {
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                  <p>
                    <span className="font-medium">Time:</span> {selectedTime}
                  </p>
                  <p>
                    <span className="font-medium">Duration:</span> {bookingData.service?.duration}
                  </p>
                </div>
              </div>
              <Badge className="bg-primary text-primary-foreground text-lg px-4 py-2">
                {bookingData.service?.price}
              </Badge>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Navigation */}
      <div className="flex justify-between">
        <Button variant="outline" onClick={onPrev} className="bg-transparent">
          Back to Services
        </Button>
        <Button
          onClick={handleContinue}
          disabled={!selectedDate || !selectedTime}
          className="bg-primary hover:bg-primary/90"
        >
          Continue to Details
        </Button>
      </div>
    </div>
  )
}
