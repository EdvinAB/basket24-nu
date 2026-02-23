'use client';

import { useRef } from 'react';

interface DateNavigationProps {
  selectedDate: string;
  onDateChange?: (date: string) => void;
}

export default function DateNavigation({ selectedDate, onDateChange }: DateNavigationProps) {
  const dateInputRef = useRef<HTMLInputElement>(null);

  // SÄKERHETSCHECK: Om selectedDate är ogiltigt, använd dagens datum
  const getSafeDate = (dateString: string): Date => {
    if (!dateString) {
      return new Date();
    }
    
    const date = new Date(dateString);
    
    // Kolla om datumet är giltigt
    if (isNaN(date.getTime())) {
      return new Date();
    }
    
    return date;
  };

  // Generera 10 dagar RUNT selectedDate
  const generateDates = () => {
    const dates = [];
    const today = new Date();
    const selected = getSafeDate(selectedDate); // SAFE VERSION!
    
    // Börja från 2 dagar före selected date
    const startDate = new Date(selected);
    startDate.setDate(selected.getDate() - 2);
    
    for (let i = 0; i < 10; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      
      const dayNames = ['SÖN', 'MÅN', 'TIS', 'ONS', 'TOR', 'FRE', 'LÖR'];
      const dayName = dayNames[date.getDay()];
      const dayNumber = date.getDate();
      const dateString = date.toISOString().split('T')[0];
      
      // Kolla om det är idag
      const todayString = today.toISOString().split('T')[0];
      const isToday = dateString === todayString;
      
      dates.push({
        dayName,
        dayNumber,
        dateString,
        isToday
      });
    }
    
    return dates;
  };

  const dates = generateDates();

  const handleClick = (dateString: string) => {
    if (onDateChange) {
      onDateChange(dateString);
    }
  };

  const handleCalendarClick = () => {
    // Öppna native date picker
    if (dateInputRef.current) {
      dateInputRef.current.showPicker();
    }
  };

  const handleDateInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value && onDateChange) {
      onDateChange(e.target.value);
    }
  };

  return (
    <div className="py-4 px-4">
      <div className="bg-dark text-white py-3 px-4 max-w-4xl mx-auto relative">
        <div className="flex items-center gap-2">
          
          {/* Datum-knappar */}
          <div className="flex-1 flex items-center gap-2 overflow-x-auto scrollbar-hide">
            {dates.map((date) => (
              <button
                key={date.dateString}
                onClick={() => handleClick(date.dateString)}
                className={`
                  flex flex-col items-center justify-center
                  min-w-[60px] px-4 py-2
                  transition-all duration-200
                  ${
                    selectedDate === date.dateString
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

          {/* Kalenderikon */}
          <div className="relative flex-shrink-0">
            <button
              onClick={handleCalendarClick}
              className="flex items-center justify-center w-12 h-12 bg-dark-light hover:bg-dark-lighter transition-colors"
              title="Välj datum"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                className="text-white"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </button>
            
            {/* Hidden native date input */}
            <input
              ref={dateInputRef}
              type="date"
              value={selectedDate || new Date().toISOString().split('T')[0]}
              onChange={handleDateInputChange}
              className="absolute opacity-0 pointer-events-none"
              style={{ top: '100%', left: 0 }}
            />
          </div>

        </div>
      </div>
    </div>
  );
}
