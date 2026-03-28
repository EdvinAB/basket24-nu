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
    const selected = getSafeDate(selectedDate);
    
    // Börja från 2 dagar före selected date
    //const startDate = new Date(selected);
    //startDate.setDate(selected.getDate() - 2);
    
    for (let i = 0; i < 10; i++) {
      const baseDate = new Date(selected);
      const date = new Date(baseDate);
      date.setDate(baseDate.getDate() - 2 + i);
      
      const dayNames = ['SÖN', 'MÅN', 'TIS', 'ONS', 'TOR', 'FRE', 'LÖR'];
      const dayName = dayNames[date.getDay()];
      const dayNumber = date.getDate();
      const dateString = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
      console.log(date);
      
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

  console.log('selectedDate raw:', selectedDate);
console.log('dates:', dates.map(d => d.dateString));

  return (
    <div className="sticky top-0 z-10 bg-dark shadow-md">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between gap-2 py-2 px-2">
          
          {/* Datum-knappar - scrollbar */}
          <div className="flex-1 flex items-center gap-1 overflow-x-auto scrollbar-hide">
            {dates.map((date) => (
              <button
                key={date.dateString}
                onClick={() => handleClick(date.dateString)}
                className={`
                  flex flex-col items-center justify-center
                  min-w-[64px] px-3 py-2
                  transition-all duration-200
                  border-2
                  ${
                    selectedDate === date.dateString
                      ? 'bg-accent text-dark border-accent shadow-lg font-bold'
                      : 'bg-dark text-white border-gray-700 hover:border-secondary hover:bg-dark-light'
                  }
                `}
                style={{ borderRadius: 0 }}
              >
                <span className="text-2xl font-bold leading-none">{date.dayNumber}</span>
                <span className="text-[11px] font-semibold uppercase tracking-wide mt-1">
                  {date.dayName}
                </span>
              </button>
            ))}
          </div>

          {/* Kalenderikon + Sortering */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Sortering-knapp (optional) */}
            <button
              className="flex items-center gap-1 px-3 py-2 bg-dark-light border-2 border-gray-700 hover:border-secondary transition-colors text-white text-xs font-semibold uppercase"
              title="Sortering"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M2.25 3.75A.75.75 0 013 3h10a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75zM3 6a.75.75 0 000 1.5h6A.75.75 0 009 6H3zM11.963 13.943a.747.747 0 00.817-.163l3-3a.75.75 0 10-1.06-1.06L13 11.44V6.75a.75.75 0 00-1.5 0v4.69L9.78 9.72a.75.75 0 00-1.06 1.06l3 3a.748.748 0 00.243.163zM3 9a.75.75 0 000 1.5h3A.75.75 0 006 9H3zM2.25 12.75A.75.75 0 013 12h3a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75z"></path>
              </svg>
              <span className="hidden sm:inline">Sort</span>
            </button>
            
            {/* Kalenderikon */}
            <button
              onClick={handleCalendarClick}
              className="flex items-center justify-center w-10 h-10 bg-dark-light border-2 border-gray-700 hover:border-secondary transition-colors"
              title="Välj datum"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
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
