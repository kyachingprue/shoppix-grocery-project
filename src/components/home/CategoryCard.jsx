import { Link } from 'react-router'
import { motion } from 'motion/react'
import GButton from '../GButton'
import { categories } from '../../data'

export default function CategoryCard() {
  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-brand">
            Explore Fresh Picks
          </p>

          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
            Shop by Category
          </h2>
        </div>

        <GButton to="/shop" variant="light" className="!py-1">
          View All
        </GButton>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
        {categories.map(([name, image, bg]) => (
          <motion.div
            key={name}
            whileHover={{ y: -6 }}
            whileTap={{ scale: 0.97 }}
            transition={{
              type: 'spring',
              stiffness: 300
            }}
          >
            <Link
              to={`/shop?category=${encodeURIComponent(name)}`}
              className={`${bg} group block overflow-hidden rounded-xl text-center shadow-sm transition-shadow duration-300 hover:shadow-md`}
            >
              {/* Image */}
              <div className="relative h-28 overflow-hidden">
                <img
                  src={image}
                  alt={name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/10" />
              </div>

              {/* Category Name */}
              <div className="px-2 py-3">
                <span className="text-xs font-semibold text-gray-700 transition-colors group-hover:text-brand">
                  {name}
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
