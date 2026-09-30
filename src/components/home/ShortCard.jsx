import {motion} from 'motion/react'
import GButton from '../GButton'

export default function ShortCard() {
  return (
    <div>
      <section className="grid gap-4 md:grid-cols-3">
              {[
                [
                  'Fresh Fruits',
                  'Up to 30% Off',
                  'from-lime-200 to-green-300 text-brand-dark',
                  '🍊'
                ],
                [
                  'Daily Essentials',
                  'Better Prices Every Day',
                  'from-orange to-amber-400 text-white',
                  '🛢️'
                ],
                [
                  'Organic Products',
                  'Pure & Natural',
                  'from-brand-dark to-teal-700 text-white',
                  '🌿'
                ]
              ].map(([a, b, c, e]) => (
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  key={a}
                  className={`relative overflow-hidden rounded-xl bg-gradient-to-br p-6 ${c}`}
                >
                  <h3 className="text-lg font-bold">{a}</h3>
                  <p className="mb-4">{b}</p>
                  <GButton to="/shop" variant="light">
                    Shop Now
                  </GButton>
                  <span className="absolute -bottom-2 right-3 text-7xl opacity-90">
                    {e}
                  </span>
                </motion.div>
              ))}
            </section>
    </div>
  )
}
