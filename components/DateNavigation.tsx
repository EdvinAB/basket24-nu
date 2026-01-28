'use client';

import { useState, useEffect } from 'react';

interface DateNavigationProps {
  onDateChange?: (date: string) => void;
}

export default function DateNavigation({ onDateChange }: DateNavigationProps) {
  const [activeDate, setActiveDate] = useState<string>('');

  // Generera 10 dagar framåt från idag
  const generateDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 0; i < 10; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      const dayNames = ['SÖN', 'MÅN', 'TIS', 'ONS', 'TOR', 'FRE', 'LÖR'];
      const dayName = dayNames[date.getDay()];
      const dayNumber = date.getDate();
      const dateString = date.toISOString().split('T')[0]; // "2026-01-21"
      
      dates.push({
        dayName,
        dayNumber,
        dateString,
        isToday: i === 0
      });
    }
    
    return dates;
  };

  const dates = generateDates();

  // Sätt dagens datum som aktivt vid mount OCH skicka till parent
  useEffect(() => {
    if (dates.length > 0 && activeDate === '') {
      const todayDate = dates[0].dateString;
      setActiveDate(todayDate);
      
      // VIKTIGT: Skicka till parent (page.tsx)
      if (onDateChange) {
        onDateChange(todayDate);
      }
    }
  }, []); // Kör en gång vid mount

  const handleClick = (dateString: string) => {
    setActiveDate(dateString);
    
    // VIKTIGT: Skicka till parent (page.tsx)
    if (onDateChange) {
      onDateChange(dateString);
    }
  };

  return (
    <div className="py-4 px-4">
      {/* Broadcast Charcoal background - FLAT DESIGN */}
      <div className="bg-dark text-white py-3 px-4 max-w-4xl mx-auto">
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
          {dates.map((date) => (
            <button
              key={date.dateString}
              onClick={() => handleClick(date.dateString)}
              className={`
                flex flex-col items-center justify-center
                min-w-[60px] px-4 py-2
                transition-all duration-200
                ${
                  activeDate === date.dateString
                    ? 'bg-primary text-white shadow-lg scale-105'
                    : 'bg-dark-light text-gray-300 hover:bg-dark-lighter'
                }
              `}
              style={{ borderRadius: 0 }}
            >
              <span className="text-xl font-bold">{date.dayNumber}</span>
              <span className="text-xs font-semibold mt-1">{date.dayName}</span>
              {date.isToday && (
                <span className="text-[10px] text-live mt-0.5">IDAG</span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
