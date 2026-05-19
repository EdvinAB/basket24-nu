'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface GameResult {
  id: number;
  date: string;
  time: string;
  home: string;
  away: string;
  homeLogo: string;
  awayLogo: string;
  homeScore: number | null;
  awayScore: number | null;
  status: string;
  statusShort: string;
}

const MONTHS = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];

function formatDateLabel(dateStr: string): string {
  const [y, m, d] = dateStr.split('-').map(Number);
  return `${d} ${MONTHS[m - 1]}`;
}

function getTodayStr(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}

function offsetDate(dateStr: string, days: number): string {
  const [y, m, da] = dateStr.split('-').map(Number);
  const d = new Date(y, m - 1, da);
  d.setDate(d.getDate() + days);
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}

export default function NBAResults() {
  const [selectedDate, setSelectedDate] = useState(getTodayStr);
  const [filter, setFilter] = useState<'all' | 'finished'>('all');
  const [games, setGames] = useState<GameResult[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/basketball?league=nba&date=${selectedDate}`)
      .then(r => r.json())
      .then(d => setGames(d.success ? d.matches : []))
      .catch(() => setGames([]))
      .finally(() => setLoading(false));
  }, [selectedDate]);

  const filtered = filter === 'finished'
    ? games.filter(g => g.statusShort === 'FT' || g.statusShort === 'AOT')
    : games;

  return (
    <div className="bg-white border border-gray-200">

      {/* Tabs + datumnavigering */}
      <div className="flex items-center border-b border-gray-200">
        <button
          onClick={() => setFilter('all')}
          className={`px-5 py-3 text-xs font-bold uppercase tracking-wide transition-colors ${filter === 'all' ? 'bg-primary text-white' : 'text-gray-500 hover:text-dark'}`}
        >
          All
        </button>
        <button
          onClick={() => setFilter('finished')}
          className={`px-5 py-3 text-xs font-bold uppercase tracking-wide transition-colors ${filter === 'finished' ? 'bg-primary text-white' : 'text-gray-500 hover:text-dark'}`}
        >
          Finished
        </button>
        <div className="ml-auto flex items-center gap-2 px-4">
          <button onClick={() => setSelectedDate(d => offsetDate(d, -1))} className="text-gray-400 hover:text-dark px-1 text-lg">‹</button>
          <span className="text-xs font-medium uppercase w-16 text-center">{formatDateLabel(selectedDate)}</span>
          <button onClick={() => setSelectedDate(d => offsetDate(d, 1))} className="text-gray-400 hover:text-dark px-1 text-lg">›</button>
        </div>
      </div>

      {/* Liga-rubrik */}
      <div className="flex items-center px-4 py-2 bg-gray-50 border-b border-gray-200">
        <span className="text-sm mr-2">🇺🇸</span>
        <span className="text-xs font-bold text-dark uppercase tracking-wide">USA : NBA</span>
      </div>

      {/* Matcher */}
      {loading ? (
        <div className="text-center py-8 text-gray-400 text-sm">Laddar...</div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-8 text-gray-400 text-sm">Inga matcher hittades</div>
      ) : (
        filtered.map(g => {
          const finished = g.statusShort === 'FT' || g.statusShort === 'AOT';
          const homeWin = finished && g.homeScore !== null && g.awayScore !== null && g.homeScore > g.awayScore;
          const awayWin = finished && g.homeScore !== null && g.awayScore !== null && g.awayScore! > g.homeScore!;
          const matchDate = new Date(g.date);
          const dateLabel = `${String(matchDate.getDate()).padStart(2,'0')}/${String(matchDate.getMonth()+1).padStart(2,'0')}`;

          return (
            <div key={g.id} className="flex items-center px-4 py-2.5 border-b border-gray-100 hover:bg-gray-50 transition-colors">

              {/* Status + datum */}
              <div className="w-20 flex-shrink-0">
                <div className={`text-[10px] font-bold ${finished ? 'text-gray-500' : 'text-green-600'}`}>
                  {finished ? 'FT' : g.statusShort || '–'}
                </div>
                <div className="text-[10px] text-gray-400">{dateLabel} {g.time}</div>
              </div>

              {/* Hemmalag */}
              <div className="flex items-center gap-2 flex-1 min-w-0 justify-end">
                <span className={`text-xs truncate ${homeWin ? 'font-bold text-dark' : 'text-gray-600'}`}>
                  {g.home}
                </span>
                {g.homeLogo && (
                  <Image src={g.homeLogo} alt={g.home} width={20} height={20} className="flex-shrink-0 object-contain" unoptimized />
                )}
              </div>

              {/* Poäng */}
              <div className="w-24 flex-shrink-0 flex items-center justify-center gap-1.5">
                {finished && g.homeScore !== null ? (
                  <>
                    <span className={`text-sm font-bold ${homeWin ? 'text-dark' : 'text-gray-400'}`}>{g.homeScore}</span>
                    <span className="text-gray-300 text-xs">–</span>
                    <span className={`text-sm font-bold ${awayWin ? 'text-dark' : 'text-gray-400'}`}>{g.awayScore}</span>
                  </>
                ) : (
                  <span className="text-xs text-gray-400 font-medium">{g.time}</span>
                )}
              </div>

              {/* Bortalag */}
              <div className="flex items-center gap-2 flex-1 min-w-0">
                {g.awayLogo && (
                  <Image src={g.awayLogo} alt={g.away} width={20} height={20} className="flex-shrink-0 object-contain" unoptimized />
                )}
                <span className={`text-xs truncate ${awayWin ? 'font-bold text-dark' : 'text-gray-600'}`}>
                  {g.away}
                </span>
              </div>

            </div>
          );
        })
      )}
    </div>
  );
}