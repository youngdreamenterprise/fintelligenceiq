import FlashcardSystem from '../components/FlashcardSystem'
import { FLASHCARDS_TRADING } from '../data/flashcardsTRADING'
import { useState, useEffect, useCallback, createContext, useContext } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import { useUser } from '@clerk/nextjs'
import { ChevronLeft, Flame, Zap, Heart, Star, Trophy, Lock, CheckCircle, Play, ChevronRight, X, RotateCcw, BookOpen, Target, ArrowRight, Lightbulb, AlertTriangle, Info } from 'lucide-react'
import { TRADING_SUBJECTS as SUBJECTS, TRADING_LEVEL_THRESHOLDS as LEVEL_THRESHOLDS, TRADING_BADGES as BADGES } from '../data/tradingCurriculum'
import { TRADING_LEARN as LEARN_CONTENT } from '../data/tradingLearnContent'
import { TRADING_CHARTS, CHART_CAPTIONS } from '../data/tradingCharts'
import { TRADING_LEARN_2 as LEARN_CONTENT_2 } from '../data/tradingLearnContent2'
import { TRADING_LEARN_EXT_1 } from '../data/tradingLearnExt1'
import { TRADING_LEARN_EXT_2 } from '../data/tradingLearnExt2'
import { TRADING_LEARN_EXT_3 } from '../data/tradingLearnExt3'
import { TRADING_LEARN_TA_1 } from '../data/tradingLearnTA_1'
import { TRADING_LEARN_TA_2 } from '../data/tradingLearnTA_2'
import { TRADING_LEARN_TA_3 } from '../data/tradingLearnTA_3'
import { TRADING_LEARN_MO } from '../data/tradingLearnMO'
import { TRADING_LEARN_MR } from '../data/tradingLearnMR'
import { TRADING_LEARN_VOL } from '../data/tradingLearnVol'
import { TRADING_LEARN_SYS } from '../data/tradingLearnSys'

// ─── Themes ─────────────────────────────────────────────────────────────────
const MIDNIGHT = {
  bg:'#03080F', surface:'#06101F', card:'rgba(20,26,48,0.84)', border:'#0D2035',
  text:'#E8F4FF', sub:'#4A7AA0', dim:'#0A1A2E', accent:'#FF6B35',
  pos:'#00D09C', neg:'#FF4560', warn:'#FFB830', gold:'#F5C842', name:'midnight'
}
const DAYTIME = {
  bg:'#F0F4FA', surface:'rgba(255,255,255,0.94)', card:'rgba(255,255,255,0.88)', border:'#DDE4EF',
  text:'#0F1629', sub:'#5A6A85', dim:'#E8EEF8', accent:'#2563EB',
  pos:'#16A34A', neg:'#DC2626', warn:'#D97706', gold:'#D97706', name:'daytime'
}
const ThemeCtx = createContext(MIDNIGHT)
const useC = () => useContext(ThemeCtx)
const getS = (C) => ({
  btn: (col=C.accent, outline=false) => ({ background: outline ? 'transparent' : col, color: outline ? col : '#fff', border: `2px solid ${col}`, borderRadius:12, padding:'12px 24px', fontWeight:800, fontSize:14, cursor:'pointer', fontFamily:'inherit', display:'inline-flex', alignItems:'center', justifyContent:'center', gap:8, transition:'all 0.15s' }),
  card: { background: C.card, border:`1px solid ${C.border}`, borderRadius:16, padding:24, backdropFilter:'blur(8px)', WebkitBackdropFilter:'blur(8px)' },
})

// ─── Theme ─────────────────────────────────────────────────────────────────────

// ─── Utilities ─────────────────────────────────────────────────────────────────
const getLevel = xp => { for (let i = LEVEL_THRESHOLDS.length - 1; i >= 0; i--) { if (xp >= LEVEL_THRESHOLDS[i]) return i + 1 } return 1 }
const xpForNext = xp => { const lv = getLevel(xp); return lv < LEVEL_THRESHOLDS.length ? LEVEL_THRESHOLDS[lv] : LEVEL_THRESHOLDS[LEVEL_THRESHOLDS.length - 1] }
const xpProgress = xp => { const lv = getLevel(xp); const cur = LEVEL_THRESHOLDS[lv - 1] || 0; const nxt = xpForNext(xp); return Math.round((xp - cur) / (nxt - cur) * 100) }
const SAVE_KEY = 'fiq_trading_academy_v1'
const DEFAULT_STATE = { xp:0, hearts:5, maxHearts:5, streak:0, lastStudyDate:null, lastHeartTime:null, completed:[], badges:[], started:[] }
const loadState = () => { try { const s = localStorage.getItem(SAVE_KEY); return s ? { ...DEFAULT_STATE, ...JSON.parse(s) } : DEFAULT_STATE } catch { return DEFAULT_STATE } }
const saveState = s => { try { localStorage.setItem(SAVE_KEY, JSON.stringify(s)) } catch {} }

// ─── UI Atoms ──────────────────────────────────────────────────────────────────
const StatPill = ({ icon: Icon, value, label, color }) => {
  const C = useC()
  return (
  <div style={{ display:'flex', alignItems:'center', gap:6, background:C.surface, border:`1px solid ${C.border}`, borderRadius:20, padding:'7px 14px' }}>
    <Icon size={14} color={color} />
    <span style={{ fontWeight:800, fontSize:14, color }}>{value}</span>
    {label && <span style={{ fontSize:11, color:C.sub }}>{label}</span>}
  </div>
  )
}

const ProgressRing = ({ pct, size=52, stroke=4, color='#FF6B35', children }) => {
  const C = useC()
  const r = (size - stroke * 2) / 2
  const circ = 2 * Math.PI * r
  return (
    <div style={{ position:'relative', width:size, height:size, flexShrink:0 }}>
      <svg width={size} height={size} style={{ transform:'rotate(-90deg)' }}>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={C.dim} strokeWidth={stroke} />
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={stroke}
          strokeDasharray={circ} strokeDashoffset={circ * (1 - pct / 100)} strokeLinecap="round"
          style={{ transition:'stroke-dashoffset 0.5s ease' }} />
      </svg>
      <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center' }}>{children}</div>
    </div>
  )
}

const LevelBar = ({ xp }) => {
  const C = useC()
  const lv = getLevel(xp), pct = xpProgress(xp), nxt = xpForNext(xp), cur = LEVEL_THRESHOLDS[lv-1] || 0
  return (
    <div style={{ flex:1 }}>
      <div style={{ display:'flex', justifyContent:'space-between', fontSize:11, color:C.sub, marginBottom:5 }}>
        <span style={{ fontWeight:700, color:C.gold }}>Level {lv}</span>
        <span>{xp - cur} / {nxt - cur} XP</span>
      </div>
      <div style={{ height:8, background:C.dim, borderRadius:4, overflow:'hidden' }}>
        <div style={{ width:`${pct}%`, height:'100%', background:`linear-gradient(90deg, ${C.gold}, ${C.accent})`, borderRadius:4, transition:'width 0.6s ease' }} />
      </div>
    </div>
  )
}

// ─── HOME SCREEN ───────────────────────────────────────────────────────────────
function HomeScreen({ gs, setGs, setScreen, setCurrentSubject }) {
  const C = useC()
  const S = getS(C)
  const totalLessons = Object.values(SUBJECTS).reduce((s, sub) => s + sub.units.reduce((u, un) => u + (un.lessons?.length || un.num * 0), 0), 0)
  const totalCompleted = gs.completed.length
  const heartColor = gs.hearts === 0 ? C.neg : gs.hearts <= 2 ? C.warn : '#FF6B35'
  const hearts = Array.from({ length: gs.maxHearts }, (_, i) => i < gs.hearts)

  return (
    <div style={{ maxWidth:900, margin:'0 auto' }}>
      {/* Stats bar */}
      <div style={{ display:'flex', gap:10, alignItems:'center', marginBottom:32, flexWrap:'wrap' }}>
        <StatPill icon={Flame} value={gs.streak} label="day streak" color={C.accent} />
        <StatPill icon={Zap} value={gs.xp} label="total XP" color={C.gold} />
        <div style={{ display:'flex', gap:4, background:C.surface, border:`1px solid ${C.border}`, borderRadius:20, padding:'7px 14px', alignItems:'center' }}>
          {hearts.map((full, i) => <Heart key={i} size={14} fill={full ? C.neg : 'none'} color={full ? C.neg : C.sub} />)}
          <span style={{ fontSize:11, color:C.sub, marginLeft:4 }}>{gs.hearts}/{gs.maxHearts} hearts</span>
        </div>
        <div style={{ flex:1, minWidth:180 }}><LevelBar xp={gs.xp} /></div>
      </div>

      {/* Subject cards */}
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(400px, 1fr))', gap:16, marginBottom:32 }}>
        {Object.values(SUBJECTS).map(sub => {
          const subLessons = sub.units.flatMap(u => u.lessons || [])
          const subCompleted = gs.completed.filter(id => id.startsWith(sub.id)).length
          const subTotal = subLessons.length + (sub.totalUnits - sub.units.filter(u => u.lessons?.length > 0).length) * 10
          const pct = subTotal > 0 ? Math.round(subCompleted / subTotal * 100) : 0
          const started = gs.started.includes(sub.id)
          const unitsCompleted = sub.units.filter(u => (u.lessons || []).every(l => gs.completed.includes(l.id)) && (u.lessons?.length > 0)).length

          return (
            <button key={sub.id} onClick={() => { setCurrentSubject(sub.id); setScreen('subject') }}
              style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:18, padding:24, cursor:'pointer', textAlign:'left', fontFamily:'inherit', transition:'all 0.2s', position:'relative', overflow:'hidden' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = sub.color; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.transform = 'translateY(0)' }}>
              <div style={{ position:'absolute', top:0, left:0, right:0, height:3, background:sub.color, borderRadius:'18px 18px 0 0', opacity: pct > 0 ? 1 : 0.3 }} />
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:16 }}>
                <div>
                  <div style={{ fontSize:28, marginBottom:6 }}>{sub.emoji}</div>
                  <div style={{ fontFamily:"'Sora',sans-serif", fontSize:20, fontWeight:800, color:C.text }}>{sub.title}</div>
                  <div style={{ fontSize:12, color:C.sub, marginTop:4 }}>{sub.estimatedHours}+ hours · {sub.totalUnits} units</div>
                </div>
                <ProgressRing pct={pct} color={sub.color}>
                  <span style={{ fontSize:11, fontWeight:800, color:sub.color }}>{pct}%</span>
                </ProgressRing>
              </div>
              <div style={{ fontSize:13, color:C.sub, marginBottom:16, lineHeight:1.6 }}>{sub.description}</div>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                <div style={{ display:'flex', gap:12, fontSize:12, color:C.sub }}>
                  <span><span style={{ color:sub.color, fontWeight:700 }}>{subCompleted}</span> lessons done</span>
                  <span><span style={{ color:sub.color, fontWeight:700 }}>{unitsCompleted}</span>/{sub.totalUnits} units</span>
                </div>
                <div style={{ background:sub.color, color:'#fff', borderRadius:20, padding:'6px 16px', fontSize:12, fontWeight:800 }}>
                  {started ? 'Continue →' : 'Start →'}
                </div>
              </div>
            </button>
          )
        })}
      </div>

      {/* Badges earned */}
      {gs.badges.length > 0 && (
        <div style={S.card}>
          <div style={{ fontSize:14, fontWeight:700, marginBottom:14, display:'flex', alignItems:'center', gap:8 }}><Trophy size={16} color={C.gold} />Badges Earned</div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:10 }}>
            {BADGES.filter(b => gs.badges.includes(b.id)).map(b => (
              <div key={b.id} style={{ background:C.surface, border:`1px solid ${C.border}`, borderRadius:10, padding:'8px 14px', display:'flex', alignItems:'center', gap:8, fontSize:12 }}>
                <span style={{ fontSize:18 }}>{b.emoji}</span>
                <div><div style={{ fontWeight:700, color:C.text }}>{b.title}</div><div style={{ color:C.sub, fontSize:10 }}>{b.desc}</div></div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Flashcard Study Mode ── */}
      <div style={{ marginTop:32 }}>
        <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:14 }}>
          <span style={{ fontSize:20 }}>🃏</span>
          <span style={{ fontFamily:"'Sora',sans-serif", fontSize:16, fontWeight:800, color:C.text }}>Flashcard Academy</span>
          <span style={{ background:'#FF6B3525', color:'#FF6B35', fontSize:10, fontWeight:800, padding:'2px 10px', borderRadius:20 }}>SPACED REPETITION</span>
        </div>
        <button onClick={() => setScreen('flashcards')}
          style={{ width:'100%', background:`linear-gradient(135deg, #FF6B3515, #FF6B3507)`, border:`1px solid #FF6B3540`, borderRadius:16, padding:'20px 24px', cursor:'pointer', fontFamily:'inherit', display:'flex', alignItems:'center', gap:16, textAlign:'left', transition:'all 0.2s' }}
          onMouseEnter={e=>{e.currentTarget.style.borderColor=`#FF6B3590`; e.currentTarget.style.transform='translateY(-1px)'}}
          onMouseLeave={e=>{e.currentTarget.style.borderColor=`#FF6B3540`; e.currentTarget.style.transform='translateY(0)'}}>
          <div style={{ width:54, height:54, borderRadius:'50%', background:`linear-gradient(135deg, #FF6B35, #FF6B3588)`, display:'flex', alignItems:'center', justifyContent:'center', fontSize:26, flexShrink:0, boxShadow:`0 4px 16px #FF6B3540` }}>🃏</div>
          <div style={{ flex:1 }}>
            <div style={{ fontFamily:"'Sora',sans-serif", fontSize:16, fontWeight:800, color:C.text, marginBottom:5 }}>Study with Flashcards</div>
            <div style={{ fontSize:13, color:C.sub, lineHeight:1.6 }}>130+ cards on RSI, MACD, patterns, risk management, Wyckoff & more.</div>
          </div>
          <div style={{ fontSize:24, color:'#FF6B35', flexShrink:0 }}>→</div>
        </button>
      </div>
    </div>

  )
}

// ─── SUBJECT SCREEN ─────────────────────────────────────────────────────────────
function SubjectScreen({ subjectId, gs, setScreen, setCurrentLesson, setCurrentUnit, setCurrentLearnUnit }) {
  const C = useC()
  const sub = SUBJECTS[subjectId]
  const [expandedUnit, setExpandedUnit] = useState(null)
  const levelOrder = ['Beginner', 'Intermediate', 'Advanced', 'Expert']

  const isLessonDone = id => gs.completed.includes(id)
  const isUnitUnlocked = (unitIndex) => { return true; // All content unlocked return true; // All content unlocked
  }
  const isUnitComplete = (unit) => {
    const lessons = unit.lessons || []
    return lessons.length > 0 && lessons.every(l => gs.completed.includes(l.id))
  }

  const levelColors = { Beginner: C.pos, Intermediate: C.gold, Advanced: C.accent, Expert: '#C084FC' }

  return (
    <div style={{ maxWidth:680, margin:'0 auto' }}>
      <div style={{ display:'flex', alignItems:'center', gap:14, marginBottom:28 }}>
        <button onClick={() => setScreen('home')} style={{ background:C.surface, border:`1px solid ${C.border}`, borderRadius:10, padding:'10px 14px', cursor:'pointer', color:C.sub, display:'flex', alignItems:'center', gap:6, fontSize:13, fontFamily:'inherit' }}>
          <ChevronLeft size={16} /> Back
        </button>
        <div style={{ fontSize:28 }}>{sub.emoji}</div>
        <div>
          <div style={{ fontFamily:"'Sora',sans-serif", fontSize:22, fontWeight:800 }}>{sub.title}</div>
          <div style={{ fontSize:12, color:C.sub }}>{sub.estimatedHours}+ hours of content · {sub.totalUnits} units · All levels</div>
        </div>
      </div>

      <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
        {sub.units.map((unit, idx) => {
          const unlocked = isUnitUnlocked(idx)
          const complete = isUnitComplete(unit)
          const hasContent = (unit.lessons || []).length > 0
          const expanded = expandedUnit === unit.id
          const completedCount = (unit.lessons || []).filter(l => gs.completed.includes(l.id)).length
          const totalLessons = hasContent ? unit.lessons.length : '~10'
          const levelColor = levelColors[unit.level] || C.sub

          return (
            <div key={unit.id}>
              <div style={{ display:'flex', gap:8, alignItems:'stretch' }}>
              <button onClick={() => unlocked && setExpandedUnit(expanded ? null : unit.id)}
                style={{ flex:1, background:complete ? `${sub.color}12` : C.card, border:`1px solid ${complete ? sub.color + '40' : C.border}`, borderRadius:12, padding:'14px 18px', cursor:unlocked ? 'pointer' : 'default', fontFamily:'inherit', textAlign:'left', opacity:unlocked ? 1 : 0.5, transition:'all 0.15s' }}>
                <div style={{ display:'flex', alignItems:'center', gap:12 }}>
                  <div style={{ width:44, height:44, borderRadius:12, background:unlocked ? (complete ? sub.color : C.surface) : C.dim, display:'flex', alignItems:'center', justifyContent:'center', fontSize:20, flexShrink:0 }}>
                    {!unlocked ? <Lock size={16} color={C.sub} /> : complete ? '✅' : unit.icon}
                  </div>
                  <div style={{ flex:1, minWidth:0 }}>
                    <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:3 }}>
                      <span style={{ fontSize:14, fontWeight:700, color:C.text }}>{unit.num}. {unit.title}</span>
                      <span style={{ fontSize:10, background:`${levelColor}20`, color:levelColor, padding:'2px 8px', borderRadius:10, fontWeight:700 }}>{unit.level}</span>
                    </div>
                    <div style={{ fontSize:12, color:C.sub }}>{unit.description}</div>
                  </div>
                  <div style={{ textAlign:'right', flexShrink:0 }}>
                    {hasContent && <div style={{ fontSize:12, color:complete ? sub.color : C.sub, fontWeight:700 }}>{completedCount}/{totalLessons}</div>}
                    {!hasContent && <div style={{ fontSize:10, color:C.sub }}>~10 lessons</div>}
                    {unlocked && <ChevronRight size={14} color={C.sub} style={{ transform: expanded ? 'rotate(90deg)' : 'none', transition:'transform 0.2s', marginTop:4 }} />}
                  </div>
                </div>
              </button>
              <button onClick={() => setCurrentLearnUnit && setCurrentLearnUnit(unit.id)} title="View learning material"
                style={{ background:ALL_LEARN[unit.id] ? `${sub.color}15` : C.dim, border:`1px solid ${ALL_LEARN[unit.id] ? sub.color+'40' : C.border}`, borderRadius:12, padding:'0 16px', cursor:ALL_LEARN[unit.id] ? 'pointer' : 'default', fontFamily:'inherit', display:'flex', alignItems:'center', gap:6, color:ALL_LEARN[unit.id] ? sub.color : C.sub, fontSize:12, fontWeight:700, flexShrink:0, opacity:ALL_LEARN[unit.id] ? 1 : 0.4, minWidth:80, justifyContent:'center' }}>
                <BookOpen size={13}/><span>{ALL_LEARN[unit.id] ? 'Learn' : 'Soon'}</span>
              </button>
              </div>

              {expanded && unlocked && (
                <div style={{ background:C.surface, border:`1px solid ${C.border}`, borderTop:'none', borderRadius:'0 0 12px 12px', padding:16, display:'flex', flexDirection:'column', gap:8 }}>
                  {hasContent ? unit.lessons.map((lesson, li) => {
                    const done = isLessonDone(lesson.id)
                    const available = true // All lessons unlocked
                    return (
                      <button key={lesson.id} onClick={() => { if (available && gs.hearts > 0) { setCurrentLesson(lesson); setCurrentUnit(unit); setScreen('lesson') } }}
                        disabled={!available || gs.hearts === 0}
                        style={{ display:'flex', alignItems:'center', gap:12, background:done ? `${sub.color}15` : C.card, border:`1px solid ${done ? sub.color + '40' : C.border}`, borderRadius:10, padding:'12px 16px', cursor:(available && gs.hearts > 0) ? 'pointer' : 'default', fontFamily:'inherit', textAlign:'left', opacity:available ? 1 : 0.5 }}>
                        <div style={{ width:32, height:32, borderRadius:8, background:done ? sub.color : available ? C.dim : C.dim, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                          {done ? <CheckCircle size={16} color='#fff' /> : available ? <Play size={14} color={sub.color} /> : <Lock size={12} color={C.sub} />}
                        </div>
                        <div style={{ flex:1 }}>
                          <div style={{ fontSize:13, fontWeight:600, color:C.text }}>{lesson.title}</div>
                          <div style={{ fontSize:11, color:C.sub }}>{lesson.questions?.length || 5} questions · ~{lesson.minutes} min · {lesson.xp} XP</div>
                        </div>
                        {done && <Star size={14} color={C.gold} fill={C.gold} />}
                      </button>
                    )
                  }) : (
                    <div style={{ textAlign:'center', padding:'20px 0' }}>
                      <div style={{ fontSize:28, marginBottom:8 }}>📚</div>
                      <div style={{ fontSize:14, color:C.text, fontWeight:600, marginBottom:6 }}>~10 lessons available in this unit</div>
                      <div style={{ fontSize:12, color:C.sub, marginBottom:16 }}>Content coming soon — check back for updates</div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ─── LESSON PLAYER ──────────────────────────────────────────────────────────────
function LessonPlayer({ lesson, unit, subjectId, gs, setGs, setScreen }) {
  const C = useC()
  const S = getS(C)
  const sub = SUBJECTS[subjectId]
  const [qIdx, setQIdx]           = useState(0)
  const [selected, setSelected]   = useState(null)
  const [revealed, setRevealed]   = useState(false)
  const [combo, setCombo]         = useState(0)
  const [heartsLost, setHeartsLost] = useState(0)
  const [sessionXp, setSessionXp] = useState(0)
  const [mistakeOnThisQ, setMistakeOnThisQ] = useState(false)
  const [done, setDone]           = useState(false)
  const [perfectStreak, setPerfectStreak] = useState(true)
  const [matchTermSel, setMatchTermSel]   = useState(null)
  const [matchedPairs, setMatchedPairs]   = useState({})
  const [matchShuffled, setMatchShuffled] = useState([])
  const [matchWrong, setMatchWrong]       = useState(null)
  const [matchDone, setMatchDone]         = useState(false)

  const questions = lesson.questions || []
  const q     = questions[qIdx]
  const qOpts = !q ? [] : q.type === 'tf' ? ['True', 'False'] : (q.opts || [])
  const qAns  = !q ? 0  : q.type === 'tf' ? (q.ans === true ? 0 : 1) : q.ans
  const isLast = qIdx >= questions.length - 1
  const curHearts = Math.max(0, gs.hearts - heartsLost)
  const comboLabel = combo >= 5 ? '💎 UNSTOPPABLE' : combo >= 3 ? '⚡ ON FIRE' : combo >= 2 ? '🔥 COMBO' : null

  useEffect(() => {
    if (q?.type === 'match' && q.pairs) {
      const defs = q.pairs.map((p, i) => ({ text: p.def, termIdx: i }))
      for (let i = defs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [defs[i], defs[j]] = [defs[j], defs[i]]
      }
      setMatchShuffled(defs)
      setMatchTermSel(null); setMatchedPairs({}); setMatchWrong(null); setMatchDone(false)
    }
  }, [qIdx])

  const handleSelect = (idx) => {
    if (revealed) return
    setSelected(idx)
    if (idx === qAns) {
      setSessionXp(p => p + 3 + Math.min(combo, 4))
      setCombo(c => c + 1)
    } else {
      if (!mistakeOnThisQ) { setHeartsLost(h => h + 1); setPerfectStreak(false); setCombo(0) }
      setMistakeOnThisQ(true)
    }
    setRevealed(true)
  }

  const handleMatchTerm = (termIdx) => {
    if (matchedPairs[termIdx] !== undefined || matchDone) return
    setMatchTermSel(t => t === termIdx ? null : termIdx)
  }

  const handleMatchDef = (defItem) => {
    if (matchTermSel === null || matchDone || matchedPairs[matchTermSel] !== undefined) return
    if (defItem.termIdx === matchTermSel) {
      const newPairs = { ...matchedPairs, [matchTermSel]: defItem.termIdx }
      setMatchedPairs(newPairs)
      setMatchTermSel(null)
      if (Object.keys(newPairs).length === (q.pairs || []).length) {
        setSessionXp(p => p + (q.pairs.length * 3) + Math.min(combo, 4))
        setCombo(c => c + 1)
        setMatchDone(true); setRevealed(true)
      }
    } else {
      if (!mistakeOnThisQ) { setHeartsLost(h => h + 1); setPerfectStreak(false); setCombo(0) }
      setMistakeOnThisQ(true)
      setMatchWrong({ term: matchTermSel, def: defItem.termIdx })
      setMatchTermSel(null)
      setTimeout(() => setMatchWrong(null), 700)
    }
  }

  const advance = () => {
    if (isLast) {
      const newGs = { ...gs }
      if (!gs.completed.includes(lesson.id)) {
        newGs.completed = [...gs.completed, lesson.id]
        newGs.xp = gs.xp + lesson.xp + sessionXp
      }
      newGs.hearts = curHearts
      const today = new Date().toDateString()
      if (gs.lastStudyDate !== today) {
        const yest = new Date(Date.now() - 86400000).toDateString()
        newGs.streak = gs.lastStudyDate === yest ? gs.streak + 1 : 1
        newGs.lastStudyDate = today
      }
      const nb = [...(gs.badges || [])]
      const add = id => { if (!nb.includes(id)) nb.push(id) }
      if (newGs.completed.length >= 1) add('first_lesson')
      if (perfectStreak) add('perfect_lesson')
      if (newGs.xp >= 100) add('xp_100'); if (newGs.xp >= 500) add('xp_500')
      if (newGs.xp >= 1000) add('xp_1000'); if (newGs.xp >= 5000) add('xp_5000')
      if (newGs.streak >= 3) add('streak_3'); if (newGs.streak >= 7) add('streak_7')
      if (newGs.streak >= 30) add('streak_30')
      if (getLevel(newGs.xp) >= 5) add('level_5'); if (getLevel(newGs.xp) >= 10) add('level_10')
      const u1l = SUBJECTS[subjectId]?.units[0]?.lessons || []
      if (u1l.length > 0 && u1l.every(l => newGs.completed.includes(l.id))) {
        const pfx = {investing:'inv',taxes:'tax',credit:'credit',banking:'banking'}[subjectId]
        if (pfx) add(`${pfx}_unit1`)
      }
      if (Object.keys(SUBJECTS).every(sid => newGs.completed.some(id => id.startsWith(sid)))) add('diversified')
      newGs.badges = nb
      if (!gs.started.includes(subjectId)) newGs.started = [...gs.started, subjectId]
      saveState(newGs); setGs(newGs); setDone(true)
    } else {
      setQIdx(i => i + 1)
      setSelected(null); setRevealed(false); setMistakeOnThisQ(false)
    }
  }

  if (done) {
    const stars = heartsLost === 0 ? 3 : heartsLost === 1 ? 2 : 1
    return (
      <div style={{ maxWidth:460, margin:'0 auto', textAlign:'center', paddingTop:20 }}>
        <div style={{ background:C.card, border:`2px solid ${sub.color}50`, borderRadius:24, padding:'40px 32px' }}>
          <div style={{ fontSize:68, marginBottom:12, lineHeight:1 }}>{stars === 3 ? '🏆' : stars === 2 ? '⭐' : '✅'}</div>
          <div style={{ fontFamily:"'Sora',sans-serif", fontSize:28, fontWeight:800, color:sub.color, marginBottom:6 }}>
            {stars === 3 ? 'Perfect!' : stars === 2 ? 'Great work!' : 'Complete!'}
          </div>
          <div style={{ fontSize:13, color:C.sub, marginBottom:24 }}>{lesson.title}</div>
          <div style={{ display:'flex', justifyContent:'center', gap:8, marginBottom:28 }}>
            {[0,1,2].map(i => <Star key={i} size={44} color={C.gold} fill={i < stars ? C.gold : 'none'} />)}
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:10, marginBottom:28 }}>
            {[
              { icon:'⚡', v:`+${lesson.xp + sessionXp}`, l:'XP Earned', c:C.gold },
              { icon:'🔥', v:combo > 0 ? `×${combo}` : '—', l:'Best Combo', c:C.accent },
              { icon:'❤️', v:`${curHearts}/${gs.maxHearts}`, l:'Hearts', c:C.neg },
            ].map(({ icon, v, l, c }) => (
              <div key={l} style={{ background:C.surface, border:`1px solid ${C.border}`, borderRadius:14, padding:'16px 8px' }}>
                <div style={{ fontSize:24 }}>{icon}</div>
                <div style={{ fontSize:22, fontWeight:800, color:c, margin:'4px 0' }}>{v}</div>
                <div style={{ fontSize:10, color:C.sub }}>{l}</div>
              </div>
            ))}
          </div>
          <div style={{ display:'flex', gap:10, justifyContent:'center' }}>
            <button onClick={() => setScreen('subject')} style={S.btn(C.surface)}>← Units</button>
            <button onClick={() => setScreen('subject')} style={S.btn(sub.color)}>Continue →</button>
          </div>
        </div>
      </div>
    )
  }

  if (!q) return null

  const renderTF = () => (
    <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:14 }}>
      {[{ label:'TRUE', icon:'✓', color:C.pos, idx:0 }, { label:'FALSE', icon:'✗', color:C.neg, idx:1 }].map(({ label, icon, color, idx }) => {
        const isSel=selected===idx, isCorr=revealed&&idx===qAns, isWrng=revealed&&isSel&&idx!==qAns
        return (
          <button key={idx} onClick={() => handleSelect(idx)} disabled={revealed}
            style={{ padding:'36px 16px', borderRadius:20, border:`3px solid ${isCorr?C.pos:isWrng?C.neg:isSel?sub.color:C.border}`, background:isCorr?`${C.pos}20`:isWrng?`${C.neg}20`:isSel?`${sub.color}20`:C.surface, cursor:revealed?'default':'pointer', fontFamily:'inherit', transition:'all 0.18s', display:'flex', flexDirection:'column', alignItems:'center', gap:12 }}>
            <span style={{ fontSize:42, color:isCorr?C.pos:isWrng?C.neg:color, fontWeight:900, lineHeight:1 }}>{icon}</span>
            <span style={{ fontSize:20, fontWeight:800, color:isCorr?C.pos:isWrng?C.neg:C.text, letterSpacing:'0.06em' }}>{label}</span>
          </button>
        )
      })}
    </div>
  )

  const renderMC = () => {
    const is4 = qOpts.length === 4
    return (
      <div style={{ display:'grid', gridTemplateColumns:is4?'1fr 1fr':'1fr', gap:10 }}>
        {qOpts.map((opt, i) => {
          const isSel=selected===i, isCorr=revealed&&i===qAns, isWrng=revealed&&isSel&&i!==qAns
          return (
            <button key={i} onClick={() => handleSelect(i)} disabled={revealed}
              style={{ padding:is4?'22px 14px':'14px 18px', borderRadius:14, border:`2px solid ${isCorr?C.pos:isWrng?C.neg:isSel?sub.color:C.border}`, background:isCorr?`${C.pos}18`:isWrng?`${C.neg}18`:isSel?`${sub.color}18`:C.surface, cursor:revealed?'default':'pointer', fontFamily:'inherit', textAlign:is4?'center':'left', fontSize:13, color:C.text, transition:'all 0.18s', fontWeight:isCorr?700:400, display:'flex', alignItems:'center', gap:10, justifyContent:is4?'center':'flex-start', minHeight:is4?90:52, lineHeight:1.4 }}>
              {!is4 && <span style={{ width:26, height:26, borderRadius:8, background:isCorr?C.pos:isWrng?C.neg:C.dim, color:'#fff', fontSize:11, fontWeight:800, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>{String.fromCharCode(65+i)}</span>}
              <span>{opt}</span>
            </button>
          )
        })}
      </div>
    )
  }

  const renderMatch = () => {
    const pairs = q.pairs || []
    const matched = Object.keys(matchedPairs).length
    return (
      <div>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:12, fontSize:12, color:C.sub }}>
          <span>Tap a <strong style={{color:sub.color}}>term</strong>, then its <strong style={{color:sub.color}}>definition</strong></span>
          <span style={{ background:C.surface, border:`1px solid ${C.border}`, borderRadius:8, padding:'3px 10px', fontWeight:700, color:matched===pairs.length?C.pos:C.text }}>{matched}/{pairs.length} ✓</span>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10 }}>
          <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
            {pairs.map((p, i) => {
              const isM=matchedPairs[i]!==undefined, isS=matchTermSel===i, isW=matchWrong?.term===i
              return (
                <button key={i} onClick={() => handleMatchTerm(i)} disabled={isM||matchDone}
                  style={{ padding:'13px 12px', borderRadius:12, fontSize:13, fontWeight:700, border:`2px solid ${isM?sub.color:isS?C.gold:isW?C.neg:C.border}`, background:isM?`${sub.color}25`:isS?`${C.gold}18`:isW?`${C.neg}18`:C.surface, color:isM?sub.color:isS?C.gold:C.text, cursor:isM?'default':'pointer', fontFamily:'inherit', textAlign:'center', transition:'all 0.15s', minHeight:60, display:'flex', alignItems:'center', justifyContent:'center', lineHeight:1.3 }}>
                  {isM&&'✓ '}{p.term}
                </button>
              )
            })}
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
            {matchShuffled.map((d, si) => {
              const isM=Object.values(matchedPairs).includes(d.termIdx), isW=matchWrong?.def===d.termIdx, hi=matchTermSel!==null&&!isM
              return (
                <button key={si} onClick={() => handleMatchDef(d)} disabled={isM||matchDone}
                  style={{ padding:'13px 12px', borderRadius:12, fontSize:12, border:`2px solid ${isM?sub.color:isW?C.neg:hi?`${sub.color}80`:C.border}`, background:isM?`${sub.color}20`:isW?`${C.neg}20`:hi?`${sub.color}08`:C.surface, color:isM?sub.color:C.text, cursor:isM?'default':'pointer', fontFamily:'inherit', textAlign:'center', transition:'all 0.15s', minHeight:60, display:'flex', alignItems:'center', justifyContent:'center', lineHeight:1.4 }}>
                  {d.text}
                </button>
              )
            })}
          </div>
        </div>
        {revealed && (
          <div style={{ marginTop:14, background:`${C.pos}15`, border:`1px solid ${C.pos}40`, borderRadius:12, padding:14 }}>
            <div style={{ fontSize:12, fontWeight:800, color:C.pos, marginBottom:6 }}>✅ All pairs matched!</div>
            <div style={{ fontSize:13, color:C.text, lineHeight:1.75 }}>{q.exp}</div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div style={{ maxWidth:640, margin:'0 auto' }}>
      <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:20 }}>
        <button onClick={() => setScreen('subject')} style={{ background:'none', border:`1px solid ${C.border}`, borderRadius:8, padding:'7px 11px', cursor:'pointer', color:C.sub, fontFamily:'inherit', display:'flex', alignItems:'center', gap:5, fontSize:12, flexShrink:0 }}><X size={12}/> Quit</button>
        <div style={{ flex:1, display:'flex', gap:3 }}>
          {questions.map((_,i) => <div key={i} style={{ flex:1, height:8, borderRadius:4, transition:'background 0.35s', background:i<qIdx?sub.color:i===qIdx?`${sub.color}55`:C.dim }} />)}
        </div>
        {comboLabel && <div style={{ background:`linear-gradient(135deg,${C.accent},${C.gold})`, color:'#fff', borderRadius:10, padding:'4px 10px', fontSize:11, fontWeight:800, whiteSpace:'nowrap', flexShrink:0 }}>{comboLabel} ×{combo}</div>}
        <div style={{ display:'flex', gap:2, flexShrink:0 }}>
          {Array.from({length:gs.maxHearts}).map((_,i) => <Heart key={i} size={16} fill={i<curHearts?C.neg:'none'} color={i<curHearts?C.neg:C.sub} />)}
        </div>
        <div style={{ fontSize:12, fontWeight:800, color:C.gold, background:`${C.gold}15`, border:`1px solid ${C.gold}30`, borderRadius:8, padding:'4px 8px', flexShrink:0 }}>+{sessionXp} XP</div>
      </div>

      {qIdx === 0 && (
        <div style={{ background:`${sub.color}10`, border:`1px solid ${sub.color}30`, borderRadius:14, padding:18, marginBottom:16 }}>
          <div style={{ fontSize:11, color:sub.color, fontWeight:700, textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:8 }}>{unit.icon} {unit.title} — {lesson.title}</div>
          <div style={{ fontSize:13, color:C.text, lineHeight:1.8 }}>{lesson.intro}</div>
        </div>
      )}

      <div style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:20, padding:26 }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:16 }}>
          <span style={{ fontSize:10, color:C.sub, fontWeight:700, textTransform:'uppercase', letterSpacing:'0.08em', background:C.dim, padding:'4px 10px', borderRadius:6 }}>
            {q.type==='tf'?'⚡ True or False':q.type==='match'?'🔗 Matching':q.type==='scenario'?'🎯 Scenario':'❓ Multiple Choice'} · {qIdx+1}/{questions.length}
          </span>
          <span style={{ fontSize:12, fontWeight:700, color:sub.color }}>{combo>=2?`×${Math.min(combo,4)+1} XP`:'+ XP'}</span>
        </div>

        <div style={{ fontSize:17, fontWeight:700, color:C.text, lineHeight:1.7, marginBottom:20 }}>{q.q}</div>

        {q.type==='scenario' && q.setup && (
          <div style={{ background:C.surface, border:`1px solid ${C.border}`, borderRadius:12, padding:14, marginBottom:16, fontSize:13, color:C.sub, lineHeight:1.75 }}>
            <span style={{color:C.accent, fontWeight:700}}>📋 Situation: </span>{q.setup}
          </div>
        )}

        {q.type==='match' ? renderMatch() : q.type==='tf' ? renderTF() : renderMC()}

        {revealed && q.type!=='match' && (
          <div style={{ marginTop:16, background:selected===qAns?`${C.pos}15`:`${C.neg}15`, border:`1px solid ${selected===qAns?C.pos:C.neg}40`, borderRadius:14, padding:16 }}>
            <div style={{ fontSize:13, fontWeight:800, color:selected===qAns?C.pos:C.neg, marginBottom:6 }}>{selected===qAns?'✅ Correct!':'❌ Not quite'}</div>
            <div style={{ fontSize:13, color:C.text, lineHeight:1.8 }}>{q.exp}</div>
          </div>
        )}

        <div style={{ marginTop:16, display:'flex', justifyContent:'flex-end', gap:10 }}>
          {revealed && selected!==qAns && q.type!=='match' && (
            <button onClick={() => { setSelected(null); setRevealed(false) }} style={{ ...S.btn(C.dim), fontSize:12 }}><RotateCcw size={13}/> Try Again</button>
          )}
          {revealed && <button onClick={advance} style={S.btn(sub.color)}>{isLast?'🏁 Finish!':'Next →'}</button>}
        </div>
      </div>
    </div>
  )
}


const ALL_LEARN = { ...LEARN_CONTENT, ...LEARN_CONTENT_2, ...TRADING_LEARN_EXT_1, ...TRADING_LEARN_EXT_2, ...TRADING_LEARN_EXT_3, ...TRADING_LEARN_TA_1, ...TRADING_LEARN_TA_2, ...TRADING_LEARN_TA_3, ...TRADING_LEARN_MO, ...TRADING_LEARN_MR, ...TRADING_LEARN_VOL, ...TRADING_LEARN_SYS }

// ─── LEARN READER ────────────────────────────────────────────────────────────────
function LearnReader({ unitId, subjectId, setScreen, setCurrentLearnUnit }) {
  const C = useC()
  const S = getS(C)
  const sub      = SUBJECTS[subjectId]
  const content  = ALL_LEARN[unitId]
  const allUnits = sub.units
  const [imgErr, setImgErr] = useState({})

  const C2 = { ...{ bg:'#03080F', surface:'#06101F', card:'#081525', border:'#0D2035', text:'#E8F4FF', sub:'#4A7AA0', dim:'#0A1A2E', accent:'#FF6B35' } }

  const calloutStyle = (type) => {
    const map = { insight:{ bg:'#001A4D', border:'#3D8EFF', icon:<Info size={15} color="#3D8EFF"/> }, fact:{ bg:'#001A2E', border:'#00D09C', icon:<Lightbulb size={15} color="#00D09C"/> }, warning:{ bg:'#2D0A00', border:'#FF6B35', icon:<AlertTriangle size={15} color="#FF6B35"/> } }
    return map[type] || map.insight
  }

  return (
    <div style={{ display:'grid', gridTemplateColumns:'220px 1fr', gap:28, maxWidth:1060, margin:'0 auto' }}>

      {/* ── Sidebar: unit navigation ── */}
      <div style={{ position:'sticky', top:90, height:'fit-content', maxHeight:'calc(100vh - 110px)', overflowY:'auto' }}>
        <div style={{ fontSize:11, fontWeight:700, color:sub.color, textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:12 }}>
          {sub.emoji} {sub.title}
        </div>
        {allUnits.map((u, idx) => {
          const hasLearn = !!ALL_LEARN[u.id]
          const isActive = u.id === unitId
          return (
            <button key={u.id} onClick={() => hasLearn && setCurrentLearnUnit(u.id)}
              style={{ width:'100%', textAlign:'left', padding:'9px 12px', borderRadius:10, marginBottom:4, background:isActive ? `${sub.color}20` : 'none', border:`1px solid ${isActive ? sub.color + '50' : 'transparent'}`, cursor:hasLearn ? 'pointer' : 'default', fontFamily:'inherit', opacity:hasLearn ? 1 : 0.4, display:'flex', alignItems:'center', gap:8 }}>
              <span style={{ fontSize:14, flexShrink:0 }}>{u.icon}</span>
              <div style={{ minWidth:0 }}>
                <div style={{ fontSize:12, fontWeight:isActive ? 700 : 500, color:isActive ? sub.color : C2.text, lineHeight:1.3, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis' }}>{u.title}</div>
                {hasLearn ? <div style={{ fontSize:10, color:C2.sub }}>{ALL_LEARN[u.id].readTime}</div>
                           : <div style={{ fontSize:10, color:C2.sub }}>Coming soon</div>}
              </div>
            </button>
          )
        })}
      </div>

      {/* ── Main content ── */}
      <div style={{ minWidth:0 }}>
        {!content ? (
          <div style={{ textAlign:'center', padding:'80px 40px', background:C2.card, borderRadius:20, border:`1px solid ${C2.border}` }}>
            <div style={{ fontSize:48, marginBottom:16 }}>📚</div>
            <div style={{ fontSize:20, fontWeight:700, marginBottom:10 }}>Content Coming Soon</div>
            <div style={{ fontSize:14, color:C2.sub }}>Lessons for this unit are coming soon. All units above are fully available to explore!</div>
          </div>
        ) : (
          <>
            {/* Hero image */}
            {content.image && !imgErr[unitId] && (
              <div style={{ borderRadius:16, overflow:'hidden', marginBottom:24, position:'relative' }}>
                <img src={content.image} alt={content.title} onError={() => setImgErr(e => ({...e,[unitId]:true}))}
                  style={{ width:'100%', height:240, objectFit:'cover', display:'block' }} />
                <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top, #03080F 0%, transparent 60%)' }} />
                {content.imageCaption && (
                  <div style={{ position:'absolute', bottom:12, left:16, right:16, fontSize:11, color:'rgba(255,255,255,0.6)' }}>{content.imageCaption}</div>
                )}
              </div>
            )}

            {/* Article header */}
            <div style={{ marginBottom:32 }}>
              <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:12 }}>
                <span style={{ background:`${sub.color}20`, color:sub.color, fontSize:11, fontWeight:700, padding:'4px 12px', borderRadius:20 }}>{sub.emoji} {sub.title}</span>
                <span style={{ color:C2.sub, fontSize:11 }}>·</span>
                <span style={{ color:C2.sub, fontSize:11 }}>{content.readTime}</span>
              </div>
              <h1 style={{ fontFamily:"'Sora',sans-serif", fontSize:28, fontWeight:800, color:C2.text, lineHeight:1.3, margin:'0 0 10px' }}>{content.title}</h1>
              <p style={{ fontSize:15, color:C2.sub, lineHeight:1.7, margin:0 }}>{content.subtitle}</p>
              <div style={{ height:3, background:`linear-gradient(90deg, ${sub.color}, transparent)`, marginTop:20, borderRadius:2 }} />
            </div>

            {/* Sections */}
            {(content.sections || []).map((section, si) => (
              <div key={si} style={{ marginBottom:40 }}>
                {section.heading && (
                  <h2 style={{ fontFamily:"'Sora',sans-serif", fontSize:20, fontWeight:800, color:C2.text, marginBottom:14, lineHeight:1.4 }}>
                    {section.heading}
                  </h2>
                )}

                {section.body && (
                  <div style={{ fontSize:14, color:C2.text, lineHeight:1.9, marginBottom: section.svg || section.keyPoints || section.callout ? 20 : 0, whiteSpace:'pre-line' }}>
                    {section.body.split(/\n\n+/).map((para, pi) => (
                      <p key={pi} style={{ margin:'0 0 16px' }}>{para}</p>
                    ))}
                  </div>
                )}

                {/* SVG diagram */}
                {section.svg && (
                  <div style={{ marginBottom:section.svgCaption ? 8 : 20 }}>
                    <div dangerouslySetInnerHTML={{ __html: section.svg }} style={{ width:'100%', borderRadius:14, overflow:'hidden' }} />
                    {section.svgCaption && (
                      <div style={{ fontSize:11, color:C2.sub, textAlign:'center', marginTop:8, fontStyle:'italic' }}>{section.svgCaption}</div>
                    )}
                  </div>
                )}

                {/* Named chart from TRADING_CHARTS library */}
                {section.chart && TRADING_CHARTS[section.chart] && (
                  <div style={{ marginBottom:20, borderRadius:14, overflow:'hidden' }}>
                    <div dangerouslySetInnerHTML={{ __html: TRADING_CHARTS[section.chart]() }} style={{ width:'100%' }} />
                    {(section.chartCaption || CHART_CAPTIONS[section.chart]) && (
                      <div style={{ fontSize:11, color:C2.sub, textAlign:'center', marginTop:8, fontStyle:'italic', padding:'0 8px' }}>
                        {section.chartCaption || CHART_CAPTIONS[section.chart]}
                      </div>
                    )}
                  </div>
                )}

                {/* Inline image */}
                {section.image && (
                  <div style={{ marginBottom:20, borderRadius:14, overflow:'hidden' }}>
                    <img src={section.image} alt={section.imageAlt || ''} style={{ width:'100%', maxHeight:320, objectFit:'cover', display:'block' }} />
                    {section.imageCaption && <div style={{ fontSize:11, color:C2.sub, padding:'8px 0', textAlign:'center', fontStyle:'italic' }}>{section.imageCaption}</div>}
                  </div>
                )}

                {/* Key points */}
                {section.keyPoints && (
                  <div style={{ background:`${sub.color}0C`, border:`1px solid ${sub.color}30`, borderRadius:14, padding:'18px 20px', marginBottom:20 }}>
                    <div style={{ fontSize:12, fontWeight:700, color:sub.color, textTransform:'uppercase', letterSpacing:'0.08em', marginBottom:14 }}>
                      ✦ Key Takeaways
                    </div>
                    {section.keyPoints.map((pt, ki) => (
                      <div key={ki} style={{ display:'flex', gap:10, marginBottom:10, alignItems:'flex-start' }}>
                        <div style={{ width:20, height:20, borderRadius:'50%', background:sub.color, color:'#fff', fontSize:10, fontWeight:800, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, marginTop:1 }}>{ki+1}</div>
                        <div style={{ fontSize:13, color:C2.text, lineHeight:1.65 }}>{pt}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Callout box */}
                {section.callout && (() => {
                  const cs = calloutStyle(section.callout.type)
                  return (
                    <div style={{ background:cs.bg, border:`1px solid ${cs.border}`, borderRadius:14, padding:'16px 20px', marginBottom:20 }}>
                      <div style={{ display:'flex', gap:10, alignItems:'flex-start' }}>
                        <div style={{ flexShrink:0, marginTop:2 }}>{cs.icon}</div>
                        <div style={{ fontSize:13, color:C2.text, lineHeight:1.8, fontStyle:'italic' }}>{section.callout.text}</div>
                      </div>
                    </div>
                  )
                })()}
              </div>
            ))}

            {/* Bottom CTA */}
            <div style={{ background:`linear-gradient(135deg, ${sub.color}20, ${sub.color}08)`, border:`1px solid ${sub.color}40`, borderRadius:20, padding:'28px 32px', textAlign:'center', marginTop:24 }}>
              <div style={{ fontSize:22, marginBottom:10 }}>🎮</div>
              <div style={{ fontFamily:"'Sora',sans-serif", fontSize:18, fontWeight:800, color:C2.text, marginBottom:8 }}>Ready to test your knowledge?</div>
              <div style={{ fontSize:13, color:C2.sub, marginBottom:20 }}>Take the interactive quiz for this unit and earn XP</div>
              <button onClick={() => setScreen('subject')} style={{ background:sub.color, color:'#fff', border:'none', borderRadius:12, padding:'12px 28px', fontWeight:800, fontSize:14, cursor:'pointer', fontFamily:'inherit' }}>
                Start Practice Quiz →
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

// ─── MAIN ACADEMY COMPONENT ─────────────────────────────────────────────────────
export default function Academy() {

  const [themeName, setThemeName] = useState(() => {
    if (typeof window !== 'undefined') {
      const s = localStorage.getItem('fiq_theme_trading')
      return (s === 'aurora' ? 'midnight' : s) || 'midnight'
    }
    return 'midnight'
  })
  const CT = themeName === 'daytime' ? DAYTIME : MIDNIGHT
  const S = getS(CT)
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])
  const toggleTheme = () => {
    const next = themeName === 'midnight' ? 'daytime' : 'midnight'
    setThemeName(next)
    if (typeof window !== 'undefined') localStorage.setItem('fiq_theme_trading', next)
  }
  const { isLoaded, isSignedIn } = useUser()
  const router = useRouter()
  const [gs, setGs] = useState(DEFAULT_STATE)
  const [screen, setScreen] = useState('home')
  const [currentSubject, setCurrentSubject] = useState('investing')
  const [currentLesson, setCurrentLesson] = useState(null)
  const [currentUnit, setCurrentUnit] = useState(null)
  const [currentLearnUnit, setCurrentLearnUnit] = useState(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => { if (isLoaded && !isSignedIn) router.push('/sign-in') }, [isLoaded, isSignedIn])
  useEffect(() => { setMounted(true); setGs(loadState()) }, [])

  if (!isLoaded || !mounted) return (
    <div style={{ minHeight:'100vh', background:CT.bg, display:'flex', alignItems:'center', justifyContent:'center' }}>
      <div style={{ color:CT.sub, fontSize:14, fontFamily:'Manrope,sans-serif' }}>Loading Academy…</div>
    </div>
  )
  if (!isSignedIn) return null

  const sub = SUBJECTS[currentSubject]

  return (
    <ThemeCtx.Provider value={CT}>
    <>
      <Head>
        <title>Trading Academy — FintelligenceIQ</title>
        <meta name="robots" content="noindex" />
      </Head>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@700;800&family=Manrope:wght@400;500;600;700&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        body{background:${CT.bg};color:${CT.text};font-family:'Manrope',system-ui,sans-serif;}
        ::-webkit-scrollbar{width:5px;} ::-webkit-scrollbar-thumb{background:${CT.dim};border-radius:3px;}
        button:focus-visible{outline:2px solid ${CT.accent};outline-offset:2px;}
      `}</style>

      <div style={{ minHeight:'100vh', background:CT.bg, position:'relative' }}>
        {/* Full-bleed background photo */}
        <div style={{ position:'fixed', inset:0, zIndex:0, pointerEvents:'none' }}>
          <img
            src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1920&q=25"
            alt=""
            style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', objectPosition:'center' }}
            onError={e => (e.currentTarget.style.display = 'none')}
          />
          <div style={{ position:'absolute', inset:0, background: CT.name === 'daytime'
            ? 'linear-gradient(135deg,rgba(240,244,250,0.90) 0%,rgba(224,234,245,0.86) 100%)'
            : 'linear-gradient(135deg,rgba(2,6,15,0.90) 0%,rgba(8,18,36,0.86) 100%)'
          }} />
          <div style={{ position:'absolute', inset:0,
            backgroundImage: `radial-gradient(circle, ${CT.accent}18 1px, transparent 1px)`,
            backgroundSize: '28px 28px', opacity: 0.3
          }} />
        </div>
        {/* Top nav */}
        <div style={{ padding:'0 24px', borderBottom:`1px solid ${CT.border}`, background: CT.name === 'daytime' ? 'rgba(255,255,255,0.92)' : 'rgba(3,8,15,0.88)', backdropFilter:'blur(10px)', WebkitBackdropFilter:'blur(10px)', position:'sticky', top:0, zIndex:100 }}>
          <div className="academy-header-inner" style={{ maxWidth:980, margin:'0 auto', height:58, display:'flex', alignItems:'center', justifyContent:'space-between' }}>
            <div style={{ display:'flex', alignItems:'center', gap:16 }}>
              <Link href="/dashboard" style={{ textDecoration:'none', display:'flex', alignItems:'center', gap:6, color:CT.sub, fontSize:12 }}>
                <ChevronLeft size={14} /> Dashboard
              </Link>
              <div style={{ width:1, height:20, background:CT.border }} />
              <div style={{ display:'flex', alignItems:'center', gap:8 }}>
                <BookOpen size={16} color={CT.accent} />
                <span style={{ fontFamily:"'Sora',sans-serif", fontWeight:800, fontSize:15 }}>Trading Academy</span>
              </div>
              <div className="academy-breadcrumb" style={{ display:'flex', alignItems:'center', gap:8 }}>
              {screen === 'flashcards' && (
                <>
                  <div style={{ width:1, height:20, background:CT.border }} />
                  <span style={{ fontSize:13, color:CT.sub, display:'flex', alignItems:'center', gap:5 }}>
                    <span style={{ fontSize:14 }}>🃏</span> Flashcard Academy
                  </span>
                </>
              )}
              {screen !== 'home' && screen !== 'flashcards' && sub && (
                <>
                  <div style={{ width:1, height:20, background:CT.border }} />
                  <button onClick={() => setScreen(screen === 'lesson' || screen === 'learn' ? 'subject' : 'home')} style={{ background:'none', border:'none', color:CT.sub, cursor:'pointer', fontSize:13, fontFamily:'inherit' }}>{sub.emoji} {sub.title}</button>
                  {screen === 'learn' && currentLearnUnit && ALL_LEARN[currentLearnUnit] && (
                    <>
                      <div style={{ width:1, height:20, background:CT.border }} />
                      <span style={{ fontSize:13, color:CT.text, display:'flex', alignItems:'center', gap:5 }}><BookOpen size={12} color="#00D09C"/> {ALL_LEARN[currentLearnUnit].title}</span>
                    </>
                  )}
                </>
              )}
              </div>
            </div>
            <button onClick={() => setScreen(screen === 'flashcards' ? 'home' : 'flashcards')}
              style={{ display:'flex', alignItems:'center', gap:6, background: screen === 'flashcards' ? `#FF6B3525` : 'rgba(255,255,255,0.06)', border:`1px solid ${screen === 'flashcards' ? '#FF6B35' : 'rgba(255,255,255,0.12)'}`, borderRadius:20, padding:'5px 14px', cursor:'pointer', fontFamily:'inherit', fontSize:12, fontWeight:700, color: screen === 'flashcards' ? '#FF6B35' : CT.sub, transition:'all 0.15s' }}>
                <span style={{ fontSize:14 }}>🃏</span>
                <span>Flashcards</span>
              </button>
              <div style={{ display:'flex', alignItems:'center', gap:10 }}>
              <StatPill icon={Flame} value={gs.streak} label="" color={CT.accent} />
              <StatPill icon={Zap} value={gs.xp} label="XP" color={CT.gold} />

              <button onClick={toggleTheme}
                style={{ background: CT.name === 'daytime' ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)', border:`1px solid ${CT.border}`, borderRadius:20, padding:'5px 12px', cursor:'pointer', fontFamily:'inherit', display:'flex', alignItems:'center', gap:6, transition:'all 0.2s', color:CT.text }}>
                <span style={{ fontSize:13 }}>{themeName === 'midnight' ? '🌙' : '☀️'}</span>
                <span style={{ fontSize:11, fontWeight:700 }}>{themeName === 'midnight' ? 'Midnight' : 'Daytime'}</span>
              </button>
              <div style={{ display:'flex', gap:3 }}>
                {Array.from({length:gs.maxHearts}).map((_,i) => <Heart key={i} size={14} fill={i < gs.hearts ? CT.neg : 'none'} color={i < gs.hearts ? CT.neg : CT.sub} />)}
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="academy-content" style={{ padding:'32px 24px', maxWidth:980, margin:'0 auto', position:'relative', zIndex:1 }}>
          {screen === 'home' && <HomeScreen gs={gs} setGs={setGs} setScreen={setScreen} setCurrentSubject={setCurrentSubject} />}
          {screen === 'subject' && <SubjectScreen subjectId={currentSubject} gs={gs} setScreen={setScreen} setCurrentLesson={setCurrentLesson} setCurrentUnit={setCurrentUnit} setCurrentLearnUnit={(uid) => { setCurrentLearnUnit(uid); setScreen('learn') }} />}
          {screen === 'lesson' && currentLesson && <LessonPlayer lesson={currentLesson} unit={currentUnit} subjectId={currentSubject} gs={gs} setGs={setGs} setScreen={setScreen} />}
          {screen === 'flashcards' && <FlashcardSystem cards={FLASHCARDS_TRADING} storageKey="fiq_fc_trading" accentColor="#FF6B35" academyName="Trading Academy" onBack={() => setScreen('home')} cards={FLASHCARDS_TRADING} storageKey="fiq_fc_trading" accentColor="#FF6B35" academyName="Trading Academy" />}
          {screen === 'learn' && currentLearnUnit && <LearnReader unitId={currentLearnUnit} subjectId={currentSubject} setScreen={setScreen} setCurrentLearnUnit={setCurrentLearnUnit} />}
        </div>
      </div>
    </>
    </ThemeCtx.Provider>
  )
}

export async function getServerSideProps() { return { props: {} } }
