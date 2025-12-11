"use client";

import { useState } from "react";
import { AvailabilityCalendar } from "@/components/availability-calendar";
import { BookingRequestForm } from "@/components/booking-request-form";
import { Calendar as CalendarIcon, Clock, Info } from "lucide-react";

export default function CalendarPage() {
  const [selectedDateTime, setSelectedDateTime] = useState({
    date: null,
    time: null,
  });

  const handleDateTimeSelect = ({ date, time }) => {
    setSelectedDateTime({ date, time });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-zinc-900 pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <CalendarIcon className="h-10 w-10 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            Book a Meeting
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Schedule a call to discuss your project, collaboration opportunities, or just to connect.
            Select a date and time that works for you.
          </p>
        </div>

        {/* Availability Info */}
        <div className="mb-8 p-4 rounded-lg bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800">
          <div className="flex items-start gap-3">
            <Info className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
            <div className="text-sm text-blue-900 dark:text-blue-100">
              <p className="font-medium mb-1">Availability Information:</p>
              <ul className="space-y-1 text-blue-800 dark:text-blue-200">
                <li className="flex items-center gap-2">
                  <Clock className="h-3 w-3" />
                  Available Monday - Friday, 9:00 AM - 5:00 PM PST
                </li>
                <li>• Meetings are typically 30-60 minutes</li>
                <li>• You'll receive a confirmation email within 24 hours</li>
                <li>• Weekends are marked in red and unavailable</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Calendar Section */}
          <div className="bg-white dark:bg-zinc-950 rounded-lg border border-zinc-200 dark:border-zinc-800 p-6">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
              Select Date & Time
            </h2>
            <AvailabilityCalendar onDateTimeSelect={handleDateTimeSelect} />
          </div>

          {/* Booking Form Section */}
          <div className="bg-white dark:bg-zinc-950 rounded-lg border border-zinc-200 dark:border-zinc-800 p-6">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
              Your Information
            </h2>
            <BookingRequestForm
              selectedDate={selectedDateTime.date}
              selectedTime={selectedDateTime.time}
            />
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center text-sm text-zinc-500 dark:text-zinc-400">
          <p>
            Having trouble scheduling? Feel free to{" "}
            <a
              href="/contact"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              contact me directly
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
