'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Team {
  id: number;
  name: string;
  logo: string;
}

interface StandingEntry {
  position: number;
  team: Team;
  group: { name: string };
  games: {
    played: number;
    win: { total: number; percentage: string };
    lose: { total: number; percentage: string };
  };
  form: string;
}

interface LeagueStandingsProps {
  league: string;
}

function FormBadge({ result }: { result: string }) {
  return (
    <span
      style={{ backgroundColor: result === 'W' ? '#22c55e' : '#ef4444' }}
      className="text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full"
    >
      {result}
    </span>
  );
}

export default function LeagueStandings({ league }: LeagueStandingsProps) {
  const [standings, setStandings] = useState<StandingEntry[][]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchStandings() {
      try {
        setLoading(true);
        const res = await fetch(`/api/standings?league=${league}`);
        const data = await res.json();
        if (data.success && data.standings) {
          if (data.success && data.standings) {
          console.log('Form exempel:', data.standings.flat()[0]?.form);
          setStandings(data.standings);
        }
          setStandings(data.standings);
        } else {
          setError('Kunde inte hämta tabellen');
        }
      } catch {
        setError('Något gick fel');
      } finally {
        setLoading(false);
      }
    }
    fetchStandings();
  }, [league]);

  if (loading) {
    return (
      <div className="text-center py-8 bg-white">
        <div className="text-gray-500">Laddar tabell...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8 bg-white">
        <div className="text-gray-500">{error}</div>
      </div>
    );
  }

// Platta ut alla grupper till en enda lista
const allEntries: StandingEntry[] = standings.flat();

// Gruppera efter group.name
const groupMap = new Map<string, StandingEntry[]>();
allEntries.forEach((entry) => {
  const name = entry.group?.name || 'Okänd grupp';
  if (!groupMap.has(name)) groupMap.set(name, []);
  const group = groupMap.get(name)!;
  // Lägg bara till om laget inte redan finns i gruppen
  if (!group.find(e => e.team.id === entry.team.id)) {
    group.push(entry);
  }
});

// Filtrera vilka grupper vi vill visa
const allowedGroups: Record<string, string[]> = {
  nba: ['Eastern Conference', 'Western Conference'],
  'aba-liga': ['Group A', 'Group B'],
};

const filteredGroups = Array.from(groupMap.entries())
  .filter(([name]) => {
    if (allowedGroups[league]) {
      return allowedGroups[league].includes(name);
    }
    return true;
  })
  .map(([, entries]) => entries);

  return (
    <div className="bg-white space-y-6 pb-6">
      {filteredGroups.map((group, groupIndex) => {
        const groupName = group[0]?.group?.name || `Grupp ${groupIndex + 1}`;
        return (
          <div key={groupIndex}>
            <div className="bg-primary text-white px-4 py-2">
              <h3 className="text-sm font-bold uppercase">{groupName}</h3>
            </div>

            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-[11px] font-bold text-gray-500 uppercase">
                  <th className="w-8 py-2 px-2 text-center">#</th>
                  <th className="py-2 px-2 text-left">Lag</th>
                  <th className="w-10 py-2 px-2 text-center">S</th>
                  <th className="w-10 py-2 px-2 text-center">V</th>
                  <th className="w-10 py-2 px-2 text-center">F</th>
                  <th className="w-14 py-2 px-2 text-center">%</th>
                  <th className="w-24 py-2 px-2 text-center">Form</th>
                </tr>
              </thead>
              <tbody>
                {group.map((entry, index) => (
                  <tr
                    key={`${groupIndex}-${entry.team.id}`}
                    className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                  >
                    <td className="py-2 px-2 text-center text-gray-500 text-xs">
                      {entry.position}
                    </td>
                    <td className="py-2 px-2">
                      <div className="flex items-center gap-2">
                        {entry.team.logo && (
                          <Image
                            src={entry.team.logo}
                            alt={entry.team.name}
                            width={20}
                            height={20}
                            className="object-contain flex-shrink-0"
                          />
                        )}
                        <span className="font-medium text-dark text-xs sm:text-sm truncate">
                          {entry.team.name}
                        </span>
                      </div>
                    </td>
                    <td className="py-2 px-2 text-center text-gray-700 text-xs">
                      {entry.games.played}
                    </td>
                    <td className="py-2 px-2 text-center text-gray-700 text-xs">
                      {entry.games.win.total}
                    </td>
                    <td className="py-2 px-2 text-center text-gray-700 text-xs">
                      {entry.games.lose.total}
                    </td>
                    <td className="py-2 px-2 text-center text-gray-700 text-xs">
                      {(parseFloat(entry.games.win.percentage) * 100).toFixed(0)}%
                    </td>
                    <td className="py-2 px-2">
                      <div className="flex gap-0.5 justify-center">
                        {entry.form?.split('').slice(-5).map((result, i) => (
                          <FormBadge key={i} result={result} />
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
}