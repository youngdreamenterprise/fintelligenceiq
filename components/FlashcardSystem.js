import { useState, useEffect, useRef, useCallback } from 'react'

// ─── SM-2 Spaced Repetition Algorithm ────────────────────────────────────────
function sm2Update(card, rating) {
  // rating: 1=again 2=hard 3=good 4=easy
  let { interval = 0, ease = 2.5, reps = 0 } = card
  if (rating === 1) {
    interval = 0; reps = 0
  } else if (rating === 2) {
    interval = Math.max(1, Math.round(interval * 1.2))
    ease = Math.max(1.3, ease - 0.15)
    reps++
  } else if (rating === 3) {
    interval = reps === 0 ? 1 : reps === 1 ? 3 : Math.round(interval * ease)
    reps++
  } else {
    interval = reps === 0 ? 1 : reps === 1 ? 4 : Math.round(interval * ease * 1.3)
    ease = Math.min(3.0, ease + 0.10)
    reps++
  }
  const nextReview = Date.now() + interval * 86400000
  const status = reps === 0 ? 'learning' : interval >= 21 ? 'mastered' : 'review'
  return { interval, ease, reps, nextReview, status }
}

const INTERVAL_LABELS = { 1: '<10 min', 2: '1 day', 3: '3 days', 4: '1 week' }

// ─── Color palette ────────────────────────────────────────────────────────────
const CAT_COLORS = {
  // Financial
  Investing: '#3D8EFF', Taxes: '#F59E0B', Credit: '#00D09C',
  Banking: '#A78BFA', Insurance: '#FF6B35',
  // Crypto
  Blockchain: '#F7931A', Bitcoin: '#F7931A', Ethereum: '#627EEA',
  DeFi: '#00D09C', NFTs: '#7C3AED', Stablecoins: '#3D8EFF',
  Trading: '#F59E0B', Security: '#EF4444', Regulation: '#6B7280',
  'Layer 2': '#A78BFA', Concepts: '#00D09C',
  // Trading
  Indicators: '#3D8EFF', Patterns: '#F59E0B', Strategy: '#00D09C',
  'Risk Management': '#EF4444', 'Market Structure': '#A78BFA',
  Advanced: '#FF6B35', Tools: '#3D8EFF', Psychology: '#F472B6',
  Systems: '#6B7280', Setups: '#00D09C',
}
const catColor = (cat) => CAT_COLORS[cat] || '#3D8EFF'

const DIFF_COLORS = { easy: '#00D09C', medium: '#F59E0B', hard: '#EF4444' }
const DIFF_LABELS = { easy: 'Beginner', medium: 'Intermediate', hard: 'Advanced' }

// ─── Main FlashcardSystem Component ──────────────────────────────────────────
export default function FlashcardSystem({ cards, storageKey, accentColor = '#FF6B35', academyName, onBack }) {
  const [mode, setMode]           = useState('dashboard')
  const [selectedCat, setSelectedCat] = useState(null)
  const [selectedDiff, setSelectedDiff] = useState(null)
  const [session, setSession]     = useState([])
  const [idx, setIdx]             = useState(0)
  const [flipped, setFlipped]     = useState(false)
  const [stats, setStats]         = useState({ again:0, hard:0, good:0, easy:0 })
  const [cardStates, setCardStates] = useState({})
  const [sessionSize, setSessionSize] = useState(15)
  const [animDir, setAnimDir]     = useState(null)
  const [showTip, setShowTip]     = useState(false)
  const [confetti, setConfetti]   = useState(false)
  const flipTimeout = useRef(null)

  // Load / save state
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) || '{}')
      setCardStates(saved)
    } catch {}
  }, [storageKey])

  const saveStates = useCallback((next) => {
    setCardStates(next)
    try { localStorage.setItem(storageKey, JSON.stringify(next)) } catch {}
  }, [storageKey])

  // Derived stats
  const now = Date.now()
  const getStatus = (id) => cardStates[id]?.status || 'new'
  const isDue = (id) => {
    const s = cardStates[id]
    if (!s || s.status === 'new' || s.status === 'learning') return true
    return s.nextReview <= now
  }

  const categories = [...new Set(cards.map(c => c.cat))]

  const getFilteredCards = useCallback(() => {
    let pool = cards
    if (selectedCat) pool = pool.filter(c => c.cat === selectedCat)
    if (selectedDiff) pool = pool.filter(c => c.diff === selectedDiff)
    return pool
  }, [cards, selectedCat, selectedDiff])

  const buildSession = useCallback(() => {
    const pool = getFilteredCards()
    const due = pool.filter(c => isDue(c.id) && getStatus(c.id) !== 'mastered')
    const newCards = pool.filter(c => getStatus(c.id) === 'new')
    const mastered = pool.filter(c => getStatus(c.id) === 'mastered')
    // Shuffle
    const shuffle = a => [...a].sort(() => Math.random() - 0.5)
    const deck = [...shuffle(due), ...shuffle(newCards)]
    const final = deck.slice(0, sessionSize)
    // Add a few mastered for review if needed
    if (final.length < 5 && mastered.length > 0) {
      final.push(...shuffle(mastered).slice(0, Math.min(5, mastered.length)))
    }
    return shuffle(final)
  }, [getFilteredCards, sessionSize, cardStates])

  const startSession = () => {
    const deck = buildSession()
    if (deck.length === 0) return
    setSession(deck); setIdx(0); setFlipped(false); setStats({ again:0, hard:0, good:0, easy:0 })
    setShowTip(false); setMode('session')
  }

  const handleFlip = () => {
    setFlipped(f => !f)
    setShowTip(false)
  }

  const handleRate = (rating) => {
    const card = session[idx]
    const prev = cardStates[card.id] || {}
    const next = sm2Update(prev, rating)
    const newStates = { ...cardStates, [card.id]: next }
    saveStates(newStates)
    setStats(s => ({
      ...s,
      again: rating === 1 ? s.again + 1 : s.again,
      hard:  rating === 2 ? s.hard + 1 : s.hard,
      good:  rating === 3 ? s.good + 1 : s.good,
      easy:  rating === 4 ? s.easy + 1 : s.easy,
    }))
    // Animate out
    setAnimDir(rating >= 3 ? 'right' : 'left')
    clearTimeout(flipTimeout.current)
    flipTimeout.current = setTimeout(() => {
      setAnimDir(null)
      if (idx + 1 >= session.length) {
        setConfetti(true)
        setMode('complete')
        setTimeout(() => setConfetti(false), 3000)
      } else {
        setIdx(i => i + 1)
        setFlipped(false)
        setShowTip(false)
      }
    }, 350)
  }

  // Keyboard shortcuts
  useEffect(() => {
    if (mode !== 'session') return
    const handler = (e) => {
      if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); handleFlip() }
      if (flipped) {
        if (e.key === '1') handleRate(1)
        if (e.key === '2') handleRate(2)
        if (e.key === '3') handleRate(3)
        if (e.key === '4') handleRate(4)
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [mode, flipped, idx, session])

  // Totals for dashboard
  const totalCards = cards.length
  const masteredCount = cards.filter(c => getStatus(c.id) === 'mastered').length
  const dueCount = cards.filter(c => isDue(c.id) && getStatus(c.id) !== 'new' && getStatus(c.id) !== 'mastered').length
  const newCount = cards.filter(c => getStatus(c.id) === 'new').length
  const masteredPct = Math.round((masteredCount / totalCards) * 100)

  const resetAll = () => {
    saveStates({})
    setMode('dashboard')
  }

  // ── DASHBOARD ────────────────────────────────────────────────────────────────
  if (mode === 'dashboard') return (
    <div style={{ maxWidth: 900, margin: '0 auto' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24, flexWrap: 'wrap', gap: 12 }}>
        <div>
          {onBack && (
            <button onClick={onBack} style={{ display:'flex', alignItems:'center', gap:5, background:'none', border:'none', color:'#4A7AA0', cursor:'pointer', fontFamily:'inherit', fontSize:12, padding:0, marginBottom:10 }}>
              ← Back to Academy
            </button>
          )}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
            <span style={{ fontSize: 28 }}>🃏</span>
            <h1 style={{ fontFamily: "'Sora',sans-serif", fontSize: 24, fontWeight: 800, margin: 0 }}>Flashcard Academy</h1>
          </div>
          <p style={{ fontSize: 13, color: '#4A7AA0', margin: 0 }}>Spaced repetition learning — {totalCards} cards · {academyName}</p>
        </div>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: '8px 14px', display: 'flex', gap: 16 }}>
            {[
              { label: 'Mastered', value: masteredCount, color: '#00D09C' },
              { label: 'To Review', value: dueCount, color: '#F59E0B' },
              { label: 'New', value: newCount, color: '#3D8EFF' },
            ].map(s => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 18, fontWeight: 800, color: s.color }}>{s.value}</div>
                <div style={{ fontSize: 10, color: '#4A7AA0' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 20, height: 10, marginBottom: 28, overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${masteredPct}%`, background: `linear-gradient(90deg, #00D09C, #3D8EFF)`, borderRadius: 20, transition: 'width 0.5s ease' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: -24, marginBottom: 20, fontSize: 11, color: '#4A7AA0' }}>
        <span>{masteredPct}% mastered</span>
        <span>{totalCards - masteredCount} remaining</span>
      </div>

      {/* Filters */}
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}>
        <span style={{ fontSize: 12, color: '#4A7AA0', alignSelf: 'center', marginRight: 4 }}>Filter:</span>
        <button onClick={() => setSelectedCat(null)} style={{ padding: '5px 12px', borderRadius: 20, fontSize: 11, fontWeight: 700, fontFamily: 'inherit', cursor: 'pointer', background: !selectedCat ? accentColor : 'transparent', color: !selectedCat ? '#fff' : '#4A7AA0', border: `1px solid ${!selectedCat ? accentColor : 'rgba(255,255,255,0.1)'}` }}>
          All categories
        </button>
        {categories.map(cat => (
          <button key={cat} onClick={() => setSelectedCat(cat === selectedCat ? null : cat)}
            style={{ padding: '5px 12px', borderRadius: 20, fontSize: 11, fontWeight: 700, fontFamily: 'inherit', cursor: 'pointer', background: selectedCat === cat ? catColor(cat) : 'transparent', color: selectedCat === cat ? '#fff' : '#4A7AA0', border: `1px solid ${selectedCat === cat ? catColor(cat) : 'rgba(255,255,255,0.1)'}` }}>
            {cat}
          </button>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 24 }}>
        <span style={{ fontSize: 12, color: '#4A7AA0', alignSelf: 'center', marginRight: 4 }}>Difficulty:</span>
        {['easy', 'medium', 'hard'].map(d => (
          <button key={d} onClick={() => setSelectedDiff(d === selectedDiff ? null : d)}
            style={{ padding: '5px 12px', borderRadius: 20, fontSize: 11, fontWeight: 700, fontFamily: 'inherit', cursor: 'pointer', background: selectedDiff === d ? DIFF_COLORS[d] : 'transparent', color: selectedDiff === d ? '#fff' : '#4A7AA0', border: `1px solid ${selectedDiff === d ? DIFF_COLORS[d] : 'rgba(255,255,255,0.1)'}` }}>
            {DIFF_LABELS[d]}
          </button>
        ))}
      </div>

      {/* Session size */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
        <span style={{ fontSize: 12, color: '#4A7AA0' }}>Cards per session:</span>
        {[10, 15, 20, 30, 50].map(n => (
          <button key={n} onClick={() => setSessionSize(n)}
            style={{ width: 36, height: 36, borderRadius: '50%', fontSize: 12, fontWeight: 700, fontFamily: 'inherit', cursor: 'pointer', background: sessionSize === n ? accentColor : 'transparent', color: sessionSize === n ? '#fff' : '#4A7AA0', border: `1px solid ${sessionSize === n ? accentColor : 'rgba(255,255,255,0.15)'}` }}>
            {n}
          </button>
        ))}
      </div>

      {/* Category cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))', gap: 12, marginBottom: 28 }}>
        {categories.map(cat => {
          const catCards = cards.filter(c => c.cat === cat && (!selectedDiff || c.diff === selectedDiff))
          const catMastered = catCards.filter(c => getStatus(c.id) === 'mastered').length
          const catDue = catCards.filter(c => isDue(c.id) && getStatus(c.id) !== 'new' && getStatus(c.id) !== 'mastered').length
          const catNew = catCards.filter(c => getStatus(c.id) === 'new').length
          const pct = catCards.length ? Math.round((catMastered / catCards.length) * 100) : 0
          const color = catColor(cat)
          const isSelected = selectedCat === cat
          return (
            <button key={cat} onClick={() => setSelectedCat(cat === selectedCat ? null : cat)}
              style={{ background: isSelected ? `${color}18` : 'rgba(255,255,255,0.04)', border: `1px solid ${isSelected ? color + '60' : 'rgba(255,255,255,0.1)'}`, borderRadius: 14, padding: '14px 16px', cursor: 'pointer', fontFamily: 'inherit', textAlign: 'left', transition: 'all 0.15s' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = color + '60'}
              onMouseLeave={e => e.currentTarget.style.borderColor = isSelected ? color + '60' : 'rgba(255,255,255,0.1)'}>
              <div style={{ fontSize: 12, fontWeight: 800, color, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>{cat}</div>
              <div style={{ fontSize: 20, fontWeight: 800, color: '#E8F4FF', marginBottom: 8 }}>{catCards.length} cards</div>
              {/* Progress ring visual (simple bar) */}
              <div style={{ height: 4, background: 'rgba(255,255,255,0.1)', borderRadius: 4, marginBottom: 8, overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${pct}%`, background: color, borderRadius: 4 }} />
              </div>
              <div style={{ display: 'flex', gap: 10, fontSize: 10 }}>
                <span style={{ color: '#00D09C' }}>✓ {catMastered}</span>
                <span style={{ color: '#F59E0B' }}>↻ {catDue}</span>
                <span style={{ color: '#3D8EFF' }}>★ {catNew}</span>
              </div>
            </button>
          )
        })}
      </div>

      {/* Start button */}
      <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
        <button onClick={startSession}
          style={{ background: `linear-gradient(135deg, ${accentColor}, #7C3AED)`, color: '#fff', border: 'none', borderRadius: 14, padding: '14px 32px', fontSize: 16, fontWeight: 800, cursor: 'pointer', fontFamily: 'inherit', boxShadow: `0 4px 20px ${accentColor}40`, transition: 'transform 0.15s' }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
          🚀 Start Studying {selectedCat ? `· ${selectedCat}` : '· All Cards'}
        </button>
        <span style={{ fontSize: 12, color: '#4A7AA0' }}>
          {getFilteredCards().filter(c => isDue(c.id) || getStatus(c.id) === 'new').length} cards available
        </span>
        {masteredCount > 0 && (
          <button onClick={resetAll} style={{ background: 'transparent', color: '#4A7AA0', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10, padding: '8px 14px', fontSize: 11, cursor: 'pointer', fontFamily: 'inherit' }}>
            Reset progress
          </button>
        )}
      </div>

      {/* Keyboard hint */}
      <div style={{ marginTop: 24, padding: '12px 16px', background: 'rgba(255,255,255,0.03)', borderRadius: 10, border: '1px solid rgba(255,255,255,0.06)' }}>
        <span style={{ fontSize: 11, color: '#4A7AA0' }}>⌨ Keyboard shortcuts: <strong style={{ color: '#E8F4FF' }}>Space</strong> flip card · <strong style={{ color: '#E8F4FF' }}>1</strong> Again · <strong style={{ color: '#E8F4FF' }}>2</strong> Hard · <strong style={{ color: '#E8F4FF' }}>3</strong> Good · <strong style={{ color: '#E8F4FF' }}>4</strong> Easy</span>
      </div>
    </div>
  )

  // ── SESSION ────────────────────────────────────────────────────────────────
  if (mode === 'session') {
    const card = session[idx]
    if (!card) return null
    const color = catColor(card.cat)
    const progress = (idx / session.length) * 100

    return (
      <div style={{ maxWidth: 680, margin: '0 auto' }}>
        {/* Progress */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
          <button onClick={() => setMode('dashboard')} style={{ background: 'none', border: 'none', color: '#4A7AA0', cursor: 'pointer', fontSize: 18, padding: 0, fontFamily: 'inherit', lineHeight: 1 }}>←</button>
          <div style={{ flex: 1, background: 'rgba(255,255,255,0.08)', borderRadius: 20, height: 8, overflow: 'hidden' }}>
            <div style={{ height: '100%', width: `${progress}%`, background: `linear-gradient(90deg, ${accentColor}, #7C3AED)`, borderRadius: 20, transition: 'width 0.3s ease' }} />
          </div>
          <span style={{ fontSize: 13, color: '#4A7AA0', fontWeight: 700, minWidth: 50, textAlign: 'right' }}>{idx + 1}/{session.length}</span>
        </div>

        {/* Badges */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
          <span style={{ background: `${color}20`, color, border: `1px solid ${color}40`, borderRadius: 20, padding: '3px 12px', fontSize: 11, fontWeight: 700 }}>{card.cat}</span>
          <span style={{ background: `${DIFF_COLORS[card.diff]}15`, color: DIFF_COLORS[card.diff], border: `1px solid ${DIFF_COLORS[card.diff]}30`, borderRadius: 20, padding: '3px 12px', fontSize: 11, fontWeight: 700 }}>{DIFF_LABELS[card.diff]}</span>
          <span style={{ background: 'rgba(255,255,255,0.06)', color: '#4A7AA0', borderRadius: 20, padding: '3px 12px', fontSize: 11 }}>{card.type}</span>
          <span style={{ marginLeft: 'auto', background: 'rgba(255,255,255,0.04)', color: '#4A7AA0', borderRadius: 20, padding: '3px 12px', fontSize: 11 }}>{card.sub}</span>
        </div>

        {/* Card container with 3D flip */}
        <div style={{ perspective: '1200px', marginBottom: 20 }}
          onClick={!flipped ? handleFlip : undefined}>
          <div style={{
            position: 'relative', minHeight: 320, transformStyle: 'preserve-3d',
            transition: flipped ? 'transform 0.5s cubic-bezier(0.4,0,0.2,1)' : 'transform 0.5s cubic-bezier(0.4,0,0.2,1)',
            transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            cursor: flipped ? 'default' : 'pointer',
          }}>

            {/* FRONT */}
            <div style={{
              position: 'absolute', inset: 0, backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden',
              background: 'linear-gradient(145deg, rgba(8,21,40,0.95), rgba(3,8,20,0.98))',
              border: `1px solid ${color}40`, borderRadius: 20,
              padding: '32px 32px',
              display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
              boxShadow: `0 8px 40px ${color}20, 0 0 0 1px rgba(255,255,255,0.05)`,
              transform: animDir === 'right' ? 'translateX(120px) opacity(0)' : animDir === 'left' ? 'translateX(-120px)' : 'translateX(0)',
              transition: 'transform 0.35s ease, opacity 0.35s ease',
              opacity: animDir ? 0 : 1,
            }}>
              <div style={{ position: 'absolute', top: 20, right: 20, fontSize: 24, opacity: 0.2 }}>🃏</div>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${color}, transparent)`, borderRadius: '20px 20px 0 0' }} />
              <div style={{ fontSize: 11, fontWeight: 700, color, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 20, opacity: 0.8 }}>QUESTION</div>
              <div style={{ fontSize: 18, fontWeight: 700, color: '#E8F4FF', textAlign: 'center', lineHeight: 1.6, maxWidth: 500 }}>{card.front}</div>
              <div style={{ marginTop: 32, fontSize: 12, color: '#4A7AA0', display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ fontSize: 16 }}>👆</span> Click card or press <strong style={{ color: '#E8F4FF' }}>Space</strong> to reveal answer
              </div>
            </div>

            {/* BACK */}
            <div style={{
              position: 'absolute', inset: 0, backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden',
              background: 'linear-gradient(145deg, rgba(5,15,35,0.98), rgba(8,22,45,0.98))',
              border: `1px solid ${color}60`, borderRadius: 20,
              padding: '28px 32px',
              display: 'flex', flexDirection: 'column', justifyContent: 'flex-start',
              boxShadow: `0 8px 40px ${color}30, 0 0 0 1px rgba(255,255,255,0.05)`,
              transform: 'rotateY(180deg)',
            }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${color}, #7C3AED)`, borderRadius: '20px 20px 0 0' }} />
              <div style={{ fontSize: 11, fontWeight: 700, color, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16, opacity: 0.8 }}>ANSWER</div>
              <div style={{ fontSize: 14, color: '#E8F4FF', lineHeight: 1.8, flex: 1, overflowY: 'auto', whiteSpace: 'pre-wrap' }}>{card.back}</div>
              {card.tip && (
                <div style={{ marginTop: 16 }}>
                  <button onClick={() => setShowTip(t => !t)}
                    style={{ background: `${color}15`, border: `1px solid ${color}40`, borderRadius: 10, padding: '6px 14px', fontSize: 11, fontWeight: 700, color, cursor: 'pointer', fontFamily: 'inherit', display: 'flex', alignItems: 'center', gap: 6 }}>
                    💡 {showTip ? 'Hide' : 'Show'} Pro Tip
                  </button>
                  {showTip && (
                    <div style={{ marginTop: 10, background: `${color}10`, border: `1px solid ${color}25`, borderRadius: 10, padding: '10px 14px', fontSize: 12, color: '#B0CDE8', lineHeight: 1.7 }}>{card.tip}</div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Rating buttons — only visible when flipped */}
        <div style={{ transition: 'all 0.3s ease', opacity: flipped ? 1 : 0, pointerEvents: flipped ? 'all' : 'none', transform: flipped ? 'translateY(0)' : 'translateY(10px)' }}>
          <div style={{ textAlign: 'center', fontSize: 12, color: '#4A7AA0', marginBottom: 12 }}>How well did you know this?</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 10 }}>
            {[
              { rating: 1, label: 'Again', sub: '<10 min', color: '#EF4444', emoji: '😕', key: '1' },
              { rating: 2, label: 'Hard', sub: '1 day', color: '#F59E0B', emoji: '😐', key: '2' },
              { rating: 3, label: 'Good', sub: '3 days', color: '#00D09C', emoji: '🙂', key: '3' },
              { rating: 4, label: 'Easy', sub: '1 week+', color: '#3D8EFF', emoji: '😄', key: '4' },
            ].map(({ rating, label, sub, color: c, emoji, key }) => (
              <button key={rating} onClick={() => handleRate(rating)}
                style={{ background: `${c}15`, border: `2px solid ${c}40`, borderRadius: 14, padding: '14px 0', cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.15s', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}
                onMouseEnter={e => { e.currentTarget.style.background = `${c}30`; e.currentTarget.style.borderColor = c; e.currentTarget.style.transform = 'scale(1.04)' }}
                onMouseLeave={e => { e.currentTarget.style.background = `${c}15`; e.currentTarget.style.borderColor = `${c}40`; e.currentTarget.style.transform = 'scale(1)' }}>
                <span style={{ fontSize: 22 }}>{emoji}</span>
                <span style={{ fontSize: 13, fontWeight: 800, color: c }}>{label}</span>
                <span style={{ fontSize: 10, color: '#4A7AA0' }}>{sub}</span>
                <span style={{ fontSize: 9, color: '#2A5070', marginTop: 2 }}>Press [{key}]</span>
              </button>
            ))}
          </div>
        </div>

        {/* Flip hint when not flipped */}
        {!flipped && (
          <div style={{ textAlign: 'center', marginTop: 16, color: '#2A5070', fontSize: 11 }}>
            Card {idx + 1} of {session.length} · {Math.round(progress)}% complete
          </div>
        )}
      </div>
    )
  }

  // ── COMPLETE ────────────────────────────────────────────────────────────────
  if (mode === 'complete') {
    const total = stats.again + stats.hard + stats.good + stats.easy
    const correct = stats.good + stats.easy
    const pct = total ? Math.round((correct / total) * 100) : 0
    const xpEarned = stats.easy * 15 + stats.good * 10 + stats.hard * 5 + stats.again * 1

    return (
      <div style={{ maxWidth: 560, margin: '0 auto', textAlign: 'center' }}>
        {confetti && (
          <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 999 }}>
            {Array.from({length: 50}).map((_, i) => (
              <div key={i} style={{
                position: 'absolute', left: `${Math.random()*100}%`, top: `-20px`,
                width: `${Math.random()*10+5}px`, height: `${Math.random()*10+5}px`,
                background: ['#FF6B35','#3D8EFF','#00D09C','#F59E0B','#7C3AED','#F472B6'][i % 6],
                borderRadius: Math.random() > 0.5 ? '50%' : '2px',
                animation: `fall ${Math.random()*2+1}s ease-in forwards`,
                animationDelay: `${Math.random()*0.5}s`,
                transform: `rotate(${Math.random()*360}deg)`,
              }} />
            ))}
          </div>
        )}
        <style>{`@keyframes fall { to { transform: translateY(110vh) rotate(720deg); opacity: 0; } }`}</style>

        <div style={{ fontSize: 72, marginBottom: 16 }}>{pct >= 80 ? '🎉' : pct >= 60 ? '👍' : '📚'}</div>
        <h2 style={{ fontFamily: "'Sora',sans-serif", fontSize: 28, fontWeight: 800, color: '#E8F4FF', marginBottom: 8 }}>
          Session Complete!
        </h2>
        <p style={{ fontSize: 15, color: '#4A7AA0', marginBottom: 32 }}>
          {pct >= 80 ? 'Outstanding work!' : pct >= 60 ? 'Great progress!' : 'Keep practicing — it gets easier!'}
        </p>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 12, marginBottom: 28 }}>
          {[
            { label: 'Cards reviewed', value: total, color: '#E8F4FF', icon: '🃏' },
            { label: 'Accuracy', value: `${pct}%`, color: pct >= 80 ? '#00D09C' : pct >= 60 ? '#F59E0B' : '#EF4444', icon: '🎯' },
            { label: 'XP earned', value: `+${xpEarned}`, color: '#F59E0B', icon: '⚡' },
            { label: 'Mastered total', value: cards.filter(c => getStatus(c.id) === 'mastered').length, color: '#00D09C', icon: '✓' },
          ].map(({ label, value, color, icon }) => (
            <div key={label} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 14, padding: '18px 16px' }}>
              <div style={{ fontSize: 24, marginBottom: 6 }}>{icon}</div>
              <div style={{ fontSize: 24, fontWeight: 800, color, marginBottom: 4 }}>{value}</div>
              <div style={{ fontSize: 12, color: '#4A7AA0' }}>{label}</div>
            </div>
          ))}
        </div>

        {/* Rating breakdown */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 8, marginBottom: 28 }}>
          {[
            { label: 'Again', count: stats.again, color: '#EF4444' },
            { label: 'Hard', count: stats.hard, color: '#F59E0B' },
            { label: 'Good', count: stats.good, color: '#00D09C' },
            { label: 'Easy', count: stats.easy, color: '#3D8EFF' },
          ].map(({ label, count, color }) => (
            <div key={label} style={{ background: `${color}10`, border: `1px solid ${color}30`, borderRadius: 10, padding: '10px 0' }}>
              <div style={{ fontSize: 18, fontWeight: 800, color }}>{count}</div>
              <div style={{ fontSize: 11, color: '#4A7AA0' }}>{label}</div>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={startSession}
            style={{ background: `linear-gradient(135deg, ${accentColor}, #7C3AED)`, color: '#fff', border: 'none', borderRadius: 12, padding: '12px 24px', fontSize: 14, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }}>
            🔄 Study Again
          </button>
          <button onClick={() => setMode('dashboard')}
            style={{ background: 'rgba(255,255,255,0.06)', color: '#E8F4FF', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 12, padding: '12px 24px', fontSize: 14, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}>
            📊 Back to Deck
          </button>
        </div>

        {dueCount > 0 && (
          <p style={{ marginTop: 20, fontSize: 12, color: '#4A7AA0' }}>
            {dueCount} cards due for review — come back tomorrow to maximize retention
          </p>
        )}
      </div>
    )
  }

  return null
}
