interface DayNavigationProps {
  onPrevDay: () => void;
  onNextDay: () => void;
}

export default function DayNavigation({ onPrevDay, onNextDay }: DayNavigationProps) {
  return (
    <div className="flex justify-center gap-4 py-6">
      
      {/* Föregående dag */}
      <button
        onClick={onPrevDay}
        className="flex items-center gap-2 px-5 py-2.5 bg-[#0ea5e9] text-white rounded hover:bg-[#0284c7] transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 512 512" className="rotate-180">
          <path fill="#fff" d="M129.2 509.4c-83-41-120-123-100-219 10-50 21-61 1141-1183l1132-1132-1132-1133c-1221-1222-1162-1158-1149-1255 12-88 79-156 168-168 97-13 25-79 1337 1230 839 838 1219 1223 1232 1251 24 52 24 99-2 155-29 66-2381 2419-2453 2455-63 32-109 32-174-1z"/>
        </svg>
        Föregående dag
      </button>

      {/* Nästa dag */}
      <button
        onClick={onNextDay}
        className="flex items-center gap-2 px-5 py-2.5 bg-[#0ea5e9] text-white rounded hover:bg-[#0284c7] transition-colors"
      >
        Nästa dag
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 512 512">
          <path fill="#fff" d="M129.2 509.4c-83-41-120-123-100-219 10-50 21-61 1141-1183l1132-1132-1132-1133c-1221-1222-1162-1158-1149-1255 12-88 79-156 168-168 97-13 25-79 1337 1230 839 838 1219 1223 1232 1251 24 52 24 99-2 155-29 66-2381 2419-2453 2455-63 32-109 32-174-1z"/>
        </svg>
      </button>

    </div>
  );
}
