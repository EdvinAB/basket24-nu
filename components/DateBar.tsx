interface DateBarProps {
  selectedDate: string;
  onDateChange?: (date: string) => void;
}

export default function DateBar({ selectedDate, onDateChange }: DateBarProps) {
  const matchDate = new Date(selectedDate);
  
  const dayName = matchDate.toLocaleDateString('sv-SE', { weekday: 'long' });
  const dayNumber = matchDate.getDate();
  const monthName = matchDate.toLocaleDateString('sv-SE', { month: 'long' });

  const handleCalendarClick = () => {
    if (!onDateChange) return;
    
    const input = document.createElement('input');
    input.type = 'date';
    input.value = selectedDate;
    input.style.position = 'absolute';
    input.style.opacity = '0';
    document.body.appendChild(input);
    
    input.addEventListener('change', (e) => {
      const target = e.target as HTMLInputElement;
      if (target.value) {
        onDateChange(target.value);
      }
      document.body.removeChild(input);
    });
    
    input.showPicker();
  };

  return (
    <div className="bg-gray-100 border-t border-b border-gray-200 py-3 px-4">
      <div className="flex items-center justify-between max-w-[1092px] mx-auto">
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold capitalize">{dayName}</span>
          <span className="text-lg font-bold">{dayNumber}</span>
          <span className="text-lg capitalize">{monthName}</span>
        </div>
        
        {onDateChange && (
          <button
            onClick={handleCalendarClick}
            className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-300 rounded hover:bg-gray-50 transition"
            title="Välj datum"
          >
            📅
          </button>
        )}
      </div>
    </div>
  );
}
