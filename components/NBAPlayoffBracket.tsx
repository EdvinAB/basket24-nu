'use client';

import { useState, useEffect } from 'react';

const CSS = `
.nba-bg {
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(48, 14px);
  grid-template-columns: 164px 36px 164px 36px 164px 36px 164px 36px 136px;
  font-size: 0.75rem;
  line-height: 1;
}
.nba-bg .c1 { grid-column: 1; }
.nba-bg .c2 { grid-column: 3; }
.nba-bg .c3 { grid-column: 5; }
.nba-bg .c4 { grid-column: 7; }
.nba-bg .c5 { grid-column: 9; }
.nba-bg .ln.c1 { grid-column: 2; }
.nba-bg .ln.c2 { grid-column: 4; }
.nba-bg .ln.c3 { grid-column: 6; }
.nba-bg .ln.c4 { grid-column: 8; }
.nba-bg .tm {
  grid-row: span 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
  border: 1px solid #e5e7eb;
  border-top: none;
  background: white;
  box-sizing: border-box;
  min-width: 0;
  overflow: hidden;
}
.nba-bg .tm.top { border-top: 1px solid #e5e7eb; }
.nba-bg .tm.win { font-weight: 700; color: #1d428a; background: #eff6ff; }
.nba-bg .tm .tn { font-size: 0.71rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; flex: 1; min-width: 0; }
.nba-bg .tm .tw { font-size: 0.71rem; font-family: monospace; color: #9ca3af; margin-left: 4px; flex-shrink: 0; }
.nba-bg .tm.win .tw { color: #1d428a; }
.nba-bg .ln::before,
.nba-bg .ln::after {
  width: calc(50% + 1px);
  height: calc(100% + 2px);
  box-sizing: border-box;
  display: inline-block;
  margin: -1px;
  border: 0 solid #d1d5db;
}
.nba-bg .ln.zd::before { content: ""; border-width: 2px 2px 0 0; border-bottom: 2px solid transparent; border-radius: 0 2px 0 0; }
.nba-bg .ln.zd::after  { content: ""; border-width: 0 0 2px 2px; border-top: 2px solid transparent; border-radius: 0 0 0 2px; }
.nba-bg .ln.zu::before { content: ""; border-width: 0 2px 2px 0; border-top: 2px solid transparent; border-radius: 0 0 2px 0; }
.nba-bg .ln.zu::after  { content: ""; border-width: 2px 0 0 2px; border-bottom: 2px solid transparent; border-radius: 2px 0 0 0; }
.nba-bg .ln.hz::before { content: ""; border-width: 0 0 2px 0; width: calc(100% + 2px); }
.nba-champ {
  grid-row: span 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid #f59e0b;
  background: white;
  text-align: center;
  padding: 6px;
  box-sizing: border-box;
}
`;

interface Series {
  team1: string;
  team2: string;
  wins1: number;
  wins2: number;
  winner: string | null;
}

const TBD: Series = { team1: 'TBD', team2: 'TBD', wins1: 0, wins2: 0, winner: null };

function SeriesRow({ s, col, spa, spb }: {
  s: Series; col: string; spa: string; spb: string;
}) {
  const tbd = s.team1 === 'TBD';
  const w1 = s.winner === s.team1;
  const w2 = s.winner === s.team2;
  return (
    <>
      <div className={col} style={{ gridRow: `span ${spa}` }} />
      <div className={`tm top ${col}${w1 ? ' win' : ''}`}>
        <span className="tn">{s.team1}</span>
        {!tbd && <span className="tw">{s.wins1}</span>}
      </div>
      <div className={`tm ${col}${w2 ? ' win' : ''}`}>
        <span className="tn">{s.team2}</span>
        {!tbd && <span className="tw">{s.wins2}</span>}
      </div>
      <div className={col} style={{ gridRow: `span ${spb}` }} />
    </>
  );
}

export default function NBAPlayoffBracket() {
  const [data, setData] = useState<{
    firstRound: Series[];
    semis: Series[];
    confFinals: Series[];
    nbaFinal: Series;
  } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/nba-playoffs')
      .then(r => r.json())
      .then(d => {
        if (d.success) {
          setData({
            firstRound: d.firstRound || [],
            semis:      d.semis || [],
            confFinals: d.confFinals || [],
            nbaFinal:   d.nbaFinal || { ...TBD },
          });
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="text-center py-12 text-gray-400">
        Laddar playoff-bracket...
      </div>
    );
  }

  const fr  = data?.firstRound ?? Array(8).fill({ ...TBD });
  const sf  = data?.semis      ?? Array(4).fill({ ...TBD });
  const cf  = data?.confFinals ?? Array(2).fill({ ...TBD });
  const fin = data?.nbaFinal   ?? { ...TBD };
  const champion = fin.winner ?? null;

  return (
    <div className="bg-gray-50 border border-gray-200 p-4 pt-10 overflow-x-auto">
      <style>{CSS}</style>

      {/* Rundetiketter */}
      <div className="flex mb-2" style={{ gap: 0 }}>
        {[
          ['First Round', 164], [null, 36],
          ['Conf. Semifinals', 164], [null, 36],
          ['Conf. Finals', 164], [null, 36],
          ['NBA Finals', 164], [null, 36],
          ['NBA Champion', 136],
        ].map(([label, w], i) =>
          label ? (
            <div key={i} style={{ width: w as number }}
                 className="text-[9px] font-bold uppercase text-white bg-dark text-center py-1 tracking-wider flex-shrink-0">
              {label}
            </div>
          ) : (
            <div key={i} style={{ width: w as number, flexShrink: 0 }} />
          )
        )}
      </div>

      <div className="nba-bg">

        {/* ── First Round: 8 matcher ── */}
        {fr.map((s, i) => (
          <SeriesRow key={`fr-${i}`} s={s} col="c1" spa="1" spb="1" />
        ))}

        {/* ── Connector FR → Semis ── */}
        {[0,1,2,3].flatMap(i => [
          <div key={`frs-e1-${i}`} className="ln c1" style={{ gridRow: 'span 2' }} />,
          <div key={`frs-zd-${i}`} className="ln c1 zd" style={{ gridRow: 'span 2' }} />,
          <div key={`frs-m-${i}`}  className="ln c1"    style={{ gridRow: 'span 4' }} />,
          <div key={`frs-zu-${i}`} className="ln c1 zu" style={{ gridRow: 'span 2' }} />,
          <div key={`frs-e2-${i}`} className="ln c1"    style={{ gridRow: 'span 2' }} />,
        ])}

        {/* ── Conf. Semifinals: 4 matcher ── */}
        {sf.map((s, i) => (
          <SeriesRow key={`sf-${i}`} s={s} col="c2" spa="4" spb="4" />
        ))}

        {/* ── Connector Semis → CF ── */}
        {[0,1].flatMap(i => [
          <div key={`scf-e1-${i}`} className="ln c2" style={{ gridRow: 'span 5' }} />,
          <div key={`scf-zd-${i}`} className="ln c2 zd" style={{ gridRow: 'span 2' }} />,
          <div key={`scf-m-${i}`}  className="ln c2"    style={{ gridRow: 'span 10' }} />,
          <div key={`scf-zu-${i}`} className="ln c2 zu" style={{ gridRow: 'span 2' }} />,
          <div key={`scf-e2-${i}`} className="ln c2"    style={{ gridRow: 'span 5' }} />,
        ])}

        {/* ── Conf. Finals: 2 matcher ── */}
        {cf.map((s, i) => (
          <SeriesRow key={`cf-${i}`} s={s} col="c3" spa="10" spb="10" />
        ))}

        {/* ── Connector CF → Final ── */}
        <div key="cff-e1" className="ln c3" style={{ gridRow: 'span 11' }} />
        <div key="cff-zd" className="ln c3 zd" style={{ gridRow: 'span 2' }} />
        <div key="cff-m"  className="ln c3"    style={{ gridRow: 'span 22' }} />
        <div key="cff-zu" className="ln c3 zu" style={{ gridRow: 'span 2' }} />
        <div key="cff-e2" className="ln c3"    style={{ gridRow: 'span 11' }} />

        {/* ── NBA Final ── */}
        <SeriesRow s={fin} col="c4" spa="22" spb="22" />

        {/* ── Connector Final → Champion ── */}
        <div key="fc-e1" className="ln c4" style={{ gridRow: 'span 23' }} />
        <div key="fc-hz" className="ln c4 hz" style={{ gridRow: 'span 2' }} />
        <div key="fc-e2" className="ln c4"    style={{ gridRow: 'span 23' }} />

        {/* ── NBA Champion ── */}
        <div key="champ-spa" className="c5" style={{ gridRow: 'span 22' }} />
        <div key="champ-box" className="nba-champ c5">
          <div style={{ fontSize: '1.4rem', marginBottom: 2 }}>🏆</div>
          <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#111827' }}>
            {champion ?? 'TBD'}
          </div>
        </div>
        <div key="champ-spb" className="c5" style={{ gridRow: 'span 22' }} />

      </div>
    </div>
  );
}