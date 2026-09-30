import { useRef } from 'react'
import { Link } from 'react-router'
import gsap from 'gsap'
// GSAP hover: liquid fill sweeps in + button springs up. Used for every button.
export default function GButton({
  to,
  children,
  className = '',
  variant = 'solid',
  ...rest
}) {
  const el = useRef(null),
    fill = useRef(null)
  const base =
    variant === 'solid'
      ? 'bg-brand text-white'
      : variant === 'light'
        ? 'bg-white text-brand-dark'
        : 'bg-orange text-white'
  const fillCol =
    variant === 'light'
      ? '#e8f3df'
      : variant === 'orange'
        ? '#c2410c'
        : '#0a3d20'
  const enter = () => {
    gsap.fromTo(
      fill.current,
      { yPercent: 100, borderRadius: '50%' },
      { yPercent: 0, borderRadius: '0%', duration: 0.45, ease: 'power3.out' }
    )
    gsap.to(el.current, {
      scale: 1.05,
      y: -2,
      duration: 0.3,
      ease: 'back.out(2)'
    })
  }
  const leave = () => {
    gsap.to(fill.current, { yPercent: -100, duration: 0.35, ease: 'power2.in' })
    gsap.to(el.current, { scale: 1, y: 0, duration: 0.3 })
  }
  const Tag = to ? Link : 'button'
  return (
    <Tag
      ref={el}
      to={to}
      onMouseEnter={enter}
      onMouseLeave={leave}
      onFocus={enter}
      onBlur={leave}
      className={`relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg px-5 py-2.5 text-sm font-semibold cursor-pointer ${base} ${className}`}
      {...rest}
    >
      <span
        ref={fill}
        className="absolute inset-0 translate-y-full"
        style={{ background: fillCol }}
      />
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
      </span>
    </Tag>
  )
}
