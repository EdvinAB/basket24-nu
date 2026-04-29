'use client';

// ─── Bracket CSS (från artikelns approach: CSS Grid + pseudoelement connectors) ───
const CSS = `
.nba-bg {
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(48, 14px);
  grid-template-columns: 164px 36px 164px 36px 164px 36px 164px 36px 136px;
  font-size: 0.75rem;
  line-height: 1;
}

/* Innehållskolumner */
.nba-bg .c1 { grid-column: 1; }
.nba-bg .c2 { grid-column: 3; }
.nba-bg .c3 { grid-column: 5; }
.nba-bg .c4 { grid-column: 7; }
.nba-bg .c5 { grid-column: 9; }

/* Linjekolumner */
.nba-bg .ln.c1 { grid-column: 2; }
.nba-bg .ln.c2 { grid-column: 4; }
.nba-bg .ln.c3 { grid-column: 6; }
.nba-bg .ln.c4 { grid-column: 8; }

/* Lag-celler – span 2 rader */
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

/* Linjer: pseudoelement base */
.nba-bg .ln::before,
.nba-bg .ln::after {
  width: calc(50% + 1px);
  height: calc(100% + 2px);
  box-sizing: border-box;
  display: inline-block;
  margin: -1px;
  border: 0 solid #d1d5db;
}

/* Z-down: övre bracket */
.nba-bg .ln.zd::before {
  content: "";
  border-width: 2px 2px 0 0;
  border-bottom: 2px solid transparent;
  border-radius: 0 2px 0 0;
}
.nba-bg .ln.zd::after {
  content: "";
  border-width: 0 0 2px 2px;
  border-top: 2px solid transparent;
  border-radius: 0 0 0 2px;
}

/* Z-up: nedre bracket */
.nba-bg .ln.zu::before {
  content: "";
  border-width: 0 2px 2px 0;
  border-top: 2px solid transparent;
  border-radius: 0 0 2px 0;
}
.nba-bg .ln.zu::after {
  content: "";
  border-width: 2px 0 0 2px;
  border-bottom: 2px solid transparent;
  border-radius: 2px 0 0 0;
}

/* Horisontell linje till champion */
.nba-bg .ln.hz::before {
  content: "";
  border-width: 0 0 2px 0;
  width: calc(100% + 2px);
}

/* Champion-box */
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

// ─── Data ───────────────────────────────────────────────────────────────
interface Series {
  team1: string;
  team2: string;
  wins1: number;
  wins2: number;
  winner: string | null;
}

const TBD: Series = { team1: 'TBD', team2: 'TBD', wins1: 0, wins2: 0, winner: null };

// Hårdkodad First Round – uppdatera vins och winner manuellt allteftersom
// Par: [0,1]→Semi0, [2,3]→Semi1, [4,5]→Semi2, [6,7]→Semi3
const FR: Series[] = [
  { team1: 'OKC Thunder',            team2: 'Phoenix Suns',           wins1: 4, wins2: 0, winner: 'OKC Thunder' },
  { team1: 'LA Lakers',              team2: 'Houston Rockets',        wins1: 3, wins2: 1, winner: null },
  { team1: 'Minnesota Timberwolves', team2: 'Denver Nuggets',         wins1: 3, wins2: 2, winner: null },
  { team1: 'San Antonio Spurs',      team2: 'Portland Trail Blazers', wins1: 4, wins2: 1, winner: 'San Antonio Spurs' },
  { team1: 'Detroit Pistons',        team2: 'Orlando Magic',          wins1: 1, wins2: 3, winner: null },
  { team1: 'Cleveland Cavaliers',    team2: 'Toronto Raptors',        wins1: 2, wins2: 2, winner: null },
  { team1: 'New York Knicks',        team2: 'Atlanta Hawks',          wins1: 3, wins2: 2, winner: null },
  { team1: 'Boston Celtics',         team2: 'Philadelphia 76ers',     wins1: 3, wins2: 2, winner: null },
];

const SEMI: Series[] = [team1: 'OKC Thunder', TBD, TBD, TBD]; // Conf. Semifinals
const CF: Series[]   = [TBD, TBD];            // Conf. Finals
const FIN: Series    = TBD;                    // NBA Finals

// ─── Helpers ────────────────────────────────────────────────────────────
function sp(col: string, span?: number) {
  return <div className={col} style={span ? { gridRow: `span ${span}` } : undefined} />;
}

function ln(col: string, span: number, cls?: string) {
  return <div className={`ln ${col}${cls ? ' ' + cls : ''}`} style={{ gridRow: `span ${span}` }} />;
}

function Match({ s, col, idx }: { s: Series; col: string; idx: number }) {
  const tbd = s.team1 === 'TBD';
  const w1  = s.winner === s.team1;
  const w2  = s.winner === s.team2;
  return (
    <>
      {sp(col)}
      <div className={`tm top ${col}${w1 ? ' win' : ''}`}>
        <span className="tn">{s.team1}</span>
        {!tbd && <span className="tw">{s.wins1}</span>}
      </div>
      <div className={`tm ${col}${w2 ? ' win' : ''}`}>
        <span className="tn">{s.team2}</span>
        {!tbd && <span className="tw">{s.wins2}</span>}
      </div>
      {sp(col)}
    </>
  );
}

// ─── Komponenten ─────────────────────────────────────────────────────────
export default function NBAPlayoffBracket() {
  const champion = [FIN, ...CF, ...SEMI].find(s => s.winner)?.winner ?? null;

  return (
    <div className="bg-gray-50 border border-gray-200 p-4 pt-10 overflow-x-auto">
      <style>{CSS}</style>

      {/* Rundetiketter ovanför */}
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

        {/* ── Rund 1: 8 matcher (48 rader totalt, 6 per match) ── */}
        {FR.map((s, i) => <Match key={i} s={s} col="c1" idx={i} />)}

        {/* ── Connector FR→Semi (4 par × 12 rader)
              Varje par:  empty(2) + zd(2) + empty(4) + zu(2) + empty(2) = 12
              Match-center inom paret: 3.5 och 9.5 → semi-center 6.5
              z-down vid raderna 3-4, z-up vid 9-10 ── */}
        {[0,1,2,3].flatMap(i => [
          ln('c1', 2),
          ln('c1', 2, 'zd'),
          ln('c1', 4),
          ln('c1', 2, 'zu'),
          ln('c1', 2),
        ])}

        {/* ── Conf. Semifinals: 4 matcher (varje inom 12 rader, center 6.5)
              spacer(4) + team1(2) + team2(2) + spacer(4) = 12 ── */}
        {SEMI.flatMap((s, i) => {
          const tbd = s.team1 === 'TBD';
          const w1 = s.winner === s.team1;
          const w2 = s.winner === s.team2;
          return [
            sp('c2', 4),
            <div key={`s${i}t1`} className={`tm top c2${w1 ? ' win' : ''}`}>
              <span className="tn">{s.team1}</span>
              {!tbd && <span className="tw">{s.wins1}</span>}
            </div>,
            <div key={`s${i}t2`} className={`tm c2${w2 ? ' win' : ''}`}>
              <span className="tn">{s.team2}</span>
              {!tbd && <span className="tw">{s.wins2}</span>}
            </div>,
            sp('c2', 4),
          ];
        })}

        {/* ── Connector Semi→CF (2 par × 24 rader)
              Varje par: empty(5) + zd(2) + empty(10) + zu(2) + empty(5) = 24
              Semi-center inom paret: 6.5 och 18.5 → CF-center 12.5 ── */}
        {[0,1].flatMap(i => [
          ln('c2', 5),
          ln('c2', 2, 'zd'),
          ln('c2', 10),
          ln('c2', 2, 'zu'),
          ln('c2', 5),
        ])}

        {/* ── Conf. Finals: 2 matcher (varje inom 24 rader, center 12.5)
              spacer(10) + team1(2) + team2(2) + spacer(10) = 24 ── */}
        {CF.flatMap((s, i) => {
          const tbd = s.team1 === 'TBD';
          const w1 = s.winner === s.team1;
          const w2 = s.winner === s.team2;
          return [
            sp('c3', 10),
            <div key={`cf${i}t1`} className={`tm top c3${w1 ? ' win' : ''}`}>
              <span className="tn">{s.team1}</span>
              {!tbd && <span className="tw">{s.wins1}</span>}
            </div>,
            <div key={`cf${i}t2`} className={`tm c3${w2 ? ' win' : ''}`}>
              <span className="tn">{s.team2}</span>
              {!tbd && <span className="tw">{s.wins2}</span>}
            </div>,
            sp('c3', 10),
          ];
        })}

        {/* ── Connector CF→Final (1 par × 48 rader)
              CF-center: 12.5 och 36.5 → Final-center 24.5
              empty(11) + zd(2) + empty(22) + zu(2) + empty(11) = 48 ── */}
        {[
          ln('c3', 11),
          ln('c3', 2, 'zd'),
          ln('c3', 22),
          ln('c3', 2, 'zu'),
          ln('c3', 11),
        ]}

        {/* ── NBA Final: 1 match (inom 48 rader, center 24.5)
              spacer(22) + team1(2) + team2(2) + spacer(22) = 48 ── */}
        {(() => {
          const tbd = FIN.team1 === 'TBD';
          const w1 = FIN.winner === FIN.team1;
          const w2 = FIN.winner === FIN.team2;
          return [
            sp('c4', 22),
            <div key="ft1" className={`tm top c4${w1 ? ' win' : ''}`}>
              <span className="tn">{FIN.team1}</span>
              {!tbd && <span className="tw">{FIN.wins1}</span>}
            </div>,
            <div key="ft2" className={`tm c4${w2 ? ' win' : ''}`}>
              <span className="tn">{FIN.team2}</span>
              {!tbd && <span className="tw">{FIN.wins2}</span>}
            </div>,
            sp('c4', 22),
          ];
        })()}

        {/* ── Connector Final→Champion
              Horisontell linje vid Final-center (rad 24.5)
              empty(23) + hz(2) + empty(23) = 48 ── */}
        {[
          ln('c4', 23),
          ln('c4', 2, 'hz'),
          ln('c4', 23),
        ]}

        {/* ── NBA Champion ── */}
        {sp('c5', 22)}
        <div className="nba-champ c5">
          <div style={{ fontSize: '1.4rem', marginBottom: 2 }}>🏆</div>
          <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#111827' }}>
            {champion ?? 'TBD'}
          </div>
        </div>
        {sp('c5', 22)}

      </div>
    </div>
  );
}
