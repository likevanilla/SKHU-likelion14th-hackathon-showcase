import { useId, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './StrokeText.css'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

function StrokeText({
  text = 'Draw Attention',
  strokeColor = '#1C1C1C',
  fillColor = '#1C1C1C',
  strokeWidth = 1.4,
  drawDuration = 1.6,
  fillDelay = 0.2,
  stagger = 0.05,
  ease = 'power2.out',
  trigger = 'mount',
  fillMode = 'wipe',
  fontSize = 128,
  fontWeight = 800,
  letterSpacing = 0,
  fontFamily = 'inherit',
  reverse = false,
  className = '',
  style = {},
}) {
  const rootRef = useRef(null)
  const strokeTextRef = useRef(null)
  const wipeRectRef = useRef(null)
  const [box, setBox] = useState(null)

  const rawId = useId()
  const wipeId = `stroke-text-wipe-${rawId.replace(/[^a-zA-Z0-9_-]/g, '')}`
  const characters = useMemo(() => Array.from(String(text ?? '')), [text])
  const numericFontSize = Number.parseFloat(fontSize) || 128
  const dash = Math.max(numericFontSize * 7, 200)

  const fontStyle = useMemo(
    () => ({
      fontFamily,
      fontSize: `${numericFontSize}px`,
      fontWeight,
      letterSpacing: `${letterSpacing}px`,
    }),
    [fontFamily, numericFontSize, fontWeight, letterSpacing],
  )

  useLayoutEffect(() => {
    const node = strokeTextRef.current
    if (!node) return undefined

    let cancelled = false
    let frameId = 0

    setBox(null)

    const measure = () => {
      if (cancelled || !strokeTextRef.current) return
      let bbox
      try {
        bbox = strokeTextRef.current.getBBox()
      } catch {
        return
      }
      if (!bbox || !bbox.width) return

      const pad = Math.max(Number(strokeWidth) || 1, numericFontSize * 0.1)
      const next = {
        x: bbox.x - pad,
        y: bbox.y - pad,
        width: bbox.width + pad * 2,
        height: bbox.height + pad * 2,
      }

      setBox((prev) =>
        prev &&
        Math.abs(prev.x - next.x) < 0.5 &&
        Math.abs(prev.width - next.width) < 0.5 &&
        Math.abs(prev.y - next.y) < 0.5
          ? prev
          : next,
      )
    }

    const measureOnNextFrame = () => {
      frameId = window.requestAnimationFrame(measure)
    }

    if (typeof document !== 'undefined' && document.fonts?.ready) {
      document.fonts.ready.then(measureOnNextFrame).catch(measureOnNextFrame)
    } else {
      measureOnNextFrame()
    }

    return () => {
      cancelled = true
      window.cancelAnimationFrame(frameId)
    }
  }, [characters, numericFontSize, fontWeight, letterSpacing, strokeWidth])

  useLayoutEffect(() => {
    const root = rootRef.current
    if (typeof window === 'undefined' || !root || !box) return undefined

    const strokes = gsap.utils.toArray(root.querySelectorAll('[data-stroke-char]'))
    const fills = gsap.utils.toArray(root.querySelectorAll('[data-fill-char]'))
    const wipe = wipeRectRef.current
    if (!strokes.length) return undefined

    const fillEnabled = fillMode !== 'none'
    const useWipe = fillEnabled && fillMode === 'wipe'
    const fillDuration = Math.max(0.4, drawDuration * 0.5)
    const staggerConfig = reverse ? { each: stagger, from: 'end' } : stagger
    const targets = [...strokes, ...fills, wipe].filter(Boolean)

    const setStart = () => {
      gsap.killTweensOf(targets)
      gsap.set(strokes, { strokeDasharray: dash, strokeDashoffset: dash })
      gsap.set(fills, { opacity: useWipe ? 1 : 0 })
      if (wipe) gsap.set(wipe, { attr: { width: 0 } })
    }

    const setEnd = () => {
      gsap.killTweensOf(targets)
      gsap.set(strokes, { strokeDasharray: dash, strokeDashoffset: 0 })
      gsap.set(fills, { opacity: fillEnabled ? 1 : 0 })
      if (wipe) gsap.set(wipe, { attr: { width: fillEnabled ? box.width : 0 } })
    }

    const prefersReducedMotion = window.matchMedia?.(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (prefersReducedMotion) {
      setEnd()
      return () => gsap.killTweensOf(targets)
    }

    const build = () => {
      setStart()
      const tl = gsap.timeline({
        paused: true,
        repeat: trigger === 'loop' ? -1 : 0,
        repeatDelay: trigger === 'loop' ? 0.9 : 0,
        defaults: { overwrite: 'auto' },
      })

      tl.to(strokes, {
        strokeDashoffset: 0,
        duration: drawDuration,
        ease,
        stagger: staggerConfig,
      })

      if (useWipe && wipe) {
        tl.to(
          wipe,
          { attr: { width: box.width }, duration: fillDuration, ease: 'power2.inOut' },
          drawDuration + fillDelay,
        )
      } else if (fillEnabled) {
        tl.to(
          fills,
          { opacity: 1, duration: fillDuration, ease: 'power2.out', stagger: staggerConfig },
          drawDuration + fillDelay,
        )
      }

      return tl
    }

    let timeline = null
    let scrollTrigger = null
    let removeHover = null

    if (trigger === 'hover') {
      setEnd()
      const play = () => {
        timeline?.kill()
        timeline = build()
        timeline.play(0)
      }
      root.addEventListener('pointerenter', play)
      removeHover = () => root.removeEventListener('pointerenter', play)
    } else {
      timeline = build()
      if (trigger === 'scroll') {
        scrollTrigger = ScrollTrigger.create({
          trigger: root,
          start: 'top 82%',
          once: true,
          onEnter: () => timeline?.play(0),
        })
      } else {
        timeline.play(0)
      }
    }

    return () => {
      removeHover?.()
      scrollTrigger?.kill()
      timeline?.kill()
      gsap.killTweensOf(targets)
    }
  }, [box, dash, drawDuration, fillDelay, stagger, ease, trigger, fillMode, reverse])

  const viewBox = box
    ? `${box.x} ${box.y} ${box.width} ${box.height}`
    : `0 ${-numericFontSize} 600 ${numericFontSize * 1.3}`

  return (
    <span
      ref={rootRef}
      className={`stroke-text ${!box ? 'stroke-text--measuring' : ''} ${
        trigger === 'hover' ? 'stroke-text--hover' : ''
      } ${className}`.trim()}
      style={{
        '--stroke-text-height': `${Math.round(numericFontSize * 1.08)}px`,
        ...style,
      }}
      role="img"
      aria-label={String(text ?? '')}
    >
      <svg
        aria-hidden="true"
        className="stroke-text__svg"
        preserveAspectRatio="xMinYMid meet"
        viewBox={viewBox}
      >
        {fillMode === 'wipe' && box && (
          <defs>
            <clipPath clipPathUnits="userSpaceOnUse" id={wipeId}>
              <rect ref={wipeRectRef} height={box.height} width="0" x={box.x} y={box.y} />
            </clipPath>
          </defs>
        )}

        <text
          ref={strokeTextRef}
          className="stroke-text__stroke"
          fill="none"
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokeWidth}
          style={{
            ...fontStyle,
            strokeDasharray: dash,
            strokeDashoffset: dash,
          }}
          x="0"
          y="0"
        >
          {characters.map((char, index) => (
            <tspan data-stroke-char key={`s-${index}`}>
              {char}
            </tspan>
          ))}
        </text>

        <text
          className="stroke-text__fill"
          clipPath={fillMode === 'wipe' && box ? `url(#${wipeId})` : undefined}
          fill={fillColor}
          stroke="none"
          opacity={fillMode === 'wipe' && box ? 1 : 0}
          style={fontStyle}
          x="0"
          y="0"
        >
          {characters.map((char, index) => (
            <tspan data-fill-char key={`f-${index}`}>
              {char}
            </tspan>
          ))}
        </text>
      </svg>
    </span>
  )
}

export default StrokeText
