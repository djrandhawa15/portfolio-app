"use client";

import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Clock } from "lucide-react";

const availableTimeSlots = [
  "09:00 AM", "10:00 AM", "11:00 AM",
  "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"
];

export function AvailabilityCalendar({ onDateTimeSelect }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTime(null); // Reset time when date changes
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    if (onDateTimeSelect && selectedDate) {
      onDateTimeSelect({ date: selectedDate, time });
    }
  };

  // Disable past dates
  const tileDisabled = ({ date }) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  // Disable weekends
  const isWeekend = (date) => {
    const day = date.getDay();
    return day === 0 || day === 6; // Sunday = 0, Saturday = 6
  };

  const tileClassName = ({ date }) => {
    if (isWeekend(date)) {
      return "weekend-day";
    }
    return null;
  };

  return (
    <div className="space-y-6">
      {/* Calendar */}
      <div className="calendar-container">
        <style jsx global>{`
          .react-calendar {
            width: 100%;
            border: 1px solid #e4e4e7;
            border-radius: 0.5rem;
            padding: 1rem;
            background: white;
            font-family: inherit;
          }
          .dark .react-calendar {
            background: #09090b;
            border-color: #27272a;
            color: #fafafa;
          }
          .react-calendar__tile {
            padding: 0.75rem;
            border-radius: 0.375rem;
          }
          .react-calendar__tile:enabled:hover,
          .react-calendar__tile:enabled:focus {
            background-color: #f4f4f5;
          }
          .dark .react-calendar__tile:enabled:hover,
          .dark .react-calendar__tile:enabled:focus {
            background-color: #18181b;
          }
          .react-calendar__tile--active {
            background: #2563eb !important;
            color: white !important;
          }
          .react-calendar__tile:disabled {
            background-color: #fafafa;
            color: #a1a1aa;
          }
          .dark .react-calendar__tile:disabled {
            background-color: #18181b;
            color: #52525b;
          }
          .react-calendar__tile.weekend-day:enabled {
            background-color: #fef2f2;
            color: #991b1b;
          }
          .dark .react-calendar__tile.weekend-day:enabled {
            background-color: #450a0a;
            color: #fca5a5;
          }
          .react-calendar__navigation button {
            font-size: 1rem;
            font-weight: 600;
          }
          .dark .react-calendar__navigation button {
            color: #fafafa;
          }
          .react-calendar__navigation button:enabled:hover,
          .react-calendar__navigation button:enabled:focus {
            background-color: #f4f4f5;
          }
          .dark .react-calendar__navigation button:enabled:hover,
          .dark .react-calendar__navigation button:enabled:focus {
            background-color: #18181b;
          }
        `}</style>
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          tileDisabled={tileDisabled}
          tileClassName={tileClassName}
          minDetail="month"
          next2Label={null}
          prev2Label={null}
        />
      </div>

      {/* Time Slots */}
      {selectedDate && (
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
            <Clock className="h-4 w-4" />
            <span>Select a time slot for {selectedDate.toLocaleDateString()}</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {availableTimeSlots.map((time) => (
              <button
                key={time}
                onClick={() => handleTimeSelect(time)}
                className={`px-4 py-2 rounded-md border text-sm font-medium transition-all ${
                  selectedTime === time
                    ? "bg-blue-600 text-white border-blue-600"
                    : "border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Selected DateTime Display */}
      {selectedDate && selectedTime && (
        <div className="p-4 rounded-md bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800">
          <p className="text-sm font-medium text-blue-900 dark:text-blue-100">
            Selected: {selectedDate.toLocaleDateString()} at {selectedTime}
          </p>
        </div>
      )}
    </div>
  );
}
