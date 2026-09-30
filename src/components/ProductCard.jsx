import { motion } from 'motion/react'
import { Star, ShoppingCart } from 'lucide-react'
import { useDispatch } from 'react-redux'

import GButton from './GButton'
import { add } from '../store/cartSlice'

export default function ProductCard({ p, deal = false }) {
  const dispatch = useDispatch()

  const hasDiscount =
    p.discountPrice && p.discountPrice < p.price

  const off = hasDiscount
    ? Math.round(
        ((p.price - p.discountPrice) / p.price) * 100
      )
    : 0

  return (
    <motion.div
      whileHover={{
        y: -6,
        boxShadow:
          '0 16px 30px -12px rgba(15,91,47,.35)'
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20
      }}
      className="group relative overflow-hidden rounded-xl border border-green-100 bg-white p-3"
    >
      {/* Badge */}
      {(p.badge || deal) && (
        <span
          className={`
            absolute left-3 top-3 z-10 rounded-full
            px-2.5 py-1 text-[10px] font-bold text-white
            ${
              deal || p.badge === 'Best Seller' || p.badge === 'Popular'
                ? 'bg-orange'
                : 'bg-brand'
            }
          `}
        >
          {deal ? 'Deal' : p.badge}
        </span>
      )}

      {/* Discount */}
      {hasDiscount && !deal && (
        <span className="absolute right-3 top-3 z-10 rounded-full bg-red-50 px-2 py-1 text-[10px] font-bold text-red-500">
          -{off}%
        </span>
      )}

      {/* Product Image */}
      <motion.div
        whileHover={{
          scale: 1.08
        }}
        transition={{
          type: 'spring',
          stiffness: 250
        }}
        className="relative mb-3 flex h-40 items-center justify-center overflow-hidden rounded-lg bg-gray-50"
      >
        <img
          src={p.image}
          alt={p.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </motion.div>

      {/* Product Name */}
      <h3 className="line-clamp-2 min-h-10 text-sm font-semibold text-gray-800">
        {p.name}
      </h3>

      {/* Unit */}
      <p className="mt-1 text-xs text-gray-500">
        {p.unit}
      </p>

      {/* Rating */}
      <div className="mt-2 flex items-center gap-1 text-xs text-gray-600">
        <Star
          size={13}
          className="fill-amber-400 text-amber-400"
        />

        <span className="font-medium">
          {p.rating}
        </span>

        <span className="text-gray-400">
          ({p.reviews})
        </span>
      </div>

      {/* Price */}
      <div className="my-3 flex flex-wrap items-center gap-2">
        <b className="text-lg font-bold text-brand">
          ৳{(p.discountPrice ?? p.price).toFixed(0)}
        </b>

        {hasDiscount && (
          <s className="text-xs text-gray-400">
            ৳{p.price.toFixed(0)}
          </s>
        )}

        {hasDiscount && (
          <span className="text-xs font-bold text-orange">
            {off}% OFF
          </span>
        )}
      </div>

      {/* Stock */}
      {p.stock <= 10 && (
        <p className="mb-2 text-[11px] font-medium text-red-500">
          Only {p.stock} left
        </p>
      )}

      {/* Add To Cart */}
      <GButton
        className="w-full"
        onClick={() => dispatch(add(p.id))}
      >
        <ShoppingCart size={14} />
        Add to Cart
      </GButton>
    </motion.div>
  )
}

