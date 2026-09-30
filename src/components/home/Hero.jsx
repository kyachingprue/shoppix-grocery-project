import { CreditCard, RotateCcw, Search, ShieldCheck, Truck } from 'lucide-react'
import {motion} from 'motion/react'
import GButton from '../GButton'

export default function Hero() {
  return (
    <div>
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-leaf via-green-50 to-lime-100 p-6 sm:p-10 lg:p-14">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-3 text-xs font-semibold tracking-widest text-brand">
              FRESH • HEALTHY • ALWAYS
            </p>
            <h1 className="text-4xl font-extrabold leading-tight text-brand-dark sm:text-5xl lg:text-6xl">
              Fresh Groceries Delivered to{' '}
              <span className="text-brand">Your Doorstep</span>
            </h1>
            <p className="mt-4 max-w-md text-gray-600">
              Shop from a wide range of fresh fruits, vegetables, dairy, pantry
              staples and more. Quality you can trust, convenience you'll love.
            </p>
            <div className="mt-6 flex max-w-md items-center gap-2 rounded-lg bg-white p-2 shadow">
              <Search size={16} className="ml-2 text-gray-400" />
              <input
                className="min-w-0 flex-1 text-sm outline-none"
                placeholder="Search for products..."
              />
              <GButton to="/shop">Shop Now</GButton>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4 text-xs sm:grid-cols-4">
              {[
                [ShieldCheck, 'Fresh & Quality Products'],
                [Truck, 'Fast & Reliable Delivery'],
                [CreditCard, 'Secure Payments'],
                [RotateCcw, 'Easy Returns']
              ].map(([I, t]) => (
                <div key={t} className="flex items-center gap-2">
                  <I className="shrink-0 text-brand" size={20} />
                  {t}
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative grid min-h-64 place-items-center"
          >
            <span className="absolute right-2 top-0 font-hand text-2xl text-brand">
              Good Food
              <br />
              Better Life ♡
            </span>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="text-[7rem] leading-none sm:text-[10rem]"
            >
              🧺
            </motion.div>
            <div className="absolute inset-0 flex flex-wrap items-center justify-center gap-2 text-5xl sm:text-6xl">
              {['🥦', '🍅', '🥕', '🍎', '🍋', '🥑'].map((e, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.4, rotate: 15 }}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 2 + i * 0.3 }}
                  style={{ marginTop: i % 2 ? 80 : -20 }}
                >
                  {e}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
