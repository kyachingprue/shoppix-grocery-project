import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react'
import {
  Menu,
  X,
  Search,
  ShoppingCart,
  Heart,
  User,
  MapPin,
  Leaf
} from 'lucide-react'
import { useSelector } from 'react-redux'
import { selectCount } from '../../store/cartSlice'
import GButton from '../GButton'

const nav = [
  ['/', 'Home'],
  ['/shop', 'Shop'],
  ['/deals', 'Deals'],
  ['/about', 'About Us'],
  ['/contact', 'Contact']
]

const Logo = ({ light }) => (
  <Link
    to="/"
    className={`flex items-center gap-1.5 font-extrabold leading-none ${
      light ? 'text-white' : 'text-brand-dark'
    }`}
  >
    <Leaf className="fill-brand text-brand" size={30} />

    <span>
      Shoppix
      <small className="block text-xs font-medium">grocery.com</small>
    </span>
  </Link>
)

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const count = useSelector(selectCount)
  const { pathname } = useLocation()

  const { scrollYProgress } = useScroll()

  const bar = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24
  })

  useEffect(() => {
    setOpen(false)

    window.scrollTo({
      top: 0
    })
  }, [pathname])

  const link = ({ isActive }) =>
    `text-sm font-medium transition-colors hover:text-brand ${
      isActive ? 'text-brand' : 'text-gray-700'
    }`

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        style={{ scaleX: bar }}
        className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-orange"
      />

      {/* Navbar */}
      <header
        id="top"
        className="sticky top-0 z-50 bg-white/95 shadow-sm backdrop-blur"
      >
        {/* Main Navbar */}
        <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-3 px-4 py-3 lg:flex">

          {/* Mobile Menu */}
          <button
            aria-label="Menu"
            onClick={() => setOpen(true)}
            className="justify-self-start lg:hidden"
          >
            <Menu />
          </button>

          {/* Logo */}
          <div className="justify-self-center">
            <Logo />
          </div>

          {/* Search */}
          <form className="mx-6 hidden flex-1 items-center overflow-hidden rounded-lg border border-green-200 lg:flex">
            <input
              className="w-full px-4 py-2 text-sm outline-none"
              placeholder="Search for fresh groceries, fruits, vegetables..."
            />

            <button
              type="button"
              className="bg-brand p-3 text-white"
            >
              <Search size={16} />
            </button>
          </form>

          {/* Right Actions */}
          <div className="flex items-center gap-4 justify-self-end text-gray-700">
            <Heart
              className="hidden sm:block"
              size={20}
            />

            <User
              className="hidden sm:block"
              size={20}
            />

            <Link
              to="/cart"
              className="relative"
            >
              <ShoppingCart size={22} />

              <span className="absolute -right-2 -top-2 grid h-4 w-4 place-items-center rounded-full bg-orange text-[10px] font-bold text-white">
                {count}
              </span>
            </Link>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden border-t border-green-50 lg:block">
          <div className="mx-auto flex max-w-7xl items-center gap-8 px-4 py-2">

            <GButton to="/shop">
              <Menu size={16} />
              All Categories
            </GButton>

            {nav.map(([to, label]) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={link}
              >
                {label}
              </NavLink>
            ))}

            <span className="ml-auto flex items-center gap-1 text-xs">
              <MapPin
                size={14}
                className="text-brand"
              />

              Deliver to <b>Dhaka, Bangladesh</b>
            </span>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              key="bd"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[70] bg-black/50"
            />

            {/* Drawer */}
            <motion.aside
              key="dr"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{
                type: 'spring',
                damping: 26
              }}
              className="fixed inset-y-0 left-0 z-[80] w-72 bg-white p-5"
            >
              <div className="mb-6 flex items-center justify-between">
                <Logo />

                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                >
                  <X />
                </button>
              </div>

              <div className="flex flex-col gap-4">
                {nav.map(([to, label]) => (
                  <NavLink
                    key={to}
                    to={to}
                    end={to === '/'}
                    className={link}
                  >
                    {label}
                  </NavLink>
                ))}

                <NavLink
                  to="/cart"
                  className={link}
                >
                  Cart ({count})
                </NavLink>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

