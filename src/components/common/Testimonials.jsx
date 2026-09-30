import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  BadgeCheck,
  ShoppingBag
} from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Sophia Carter',
    role: 'Verified Customer',
    avatar: 'https://i.pravatar.cc/150?img=47',
    rating: 5,
    review:
      'Antixor Grocery has made my weekly shopping so much easier. The fruits and vegetables were fresh, well packed, and delivered on time.',
    product: 'Fresh Fruits & Vegetables',
    date: '2 days ago',
    verified: true
  },
  {
    id: 2,
    name: 'Daniel Wilson',
    role: 'Verified Customer',
    avatar: 'https://i.pravatar.cc/150?img=12',
    rating: 5,
    review:
      'I really love the quality of their products. The milk, eggs and bakery items arrived fresh and the packaging was excellent.',
    product: 'Dairy & Bakery',
    date: '5 days ago',
    verified: true
  },
  {
    id: 3,
    name: 'Emily Johnson',
    role: 'Verified Customer',
    avatar: 'https://i.pravatar.cc/150?img=32',
    rating: 4,
    review:
      'The shopping experience is very smooth. I found everything I needed quickly and the prices are reasonable compared to other stores.',
    product: 'Pantry Staples',
    date: '1 week ago',
    verified: true
  },
  {
    id: 4,
    name: 'Michael Brown',
    role: 'Verified Customer',
    avatar: 'https://i.pravatar.cc/150?img=11',
    rating: 5,
    review:
      'Their meat and seafood collection is impressive. Everything looked fresh and the delivery arrived exactly when promised.',
    product: 'Meat & Seafood',
    date: '1 week ago',
    verified: true
  },
  {
    id: 5,
    name: 'Olivia Martinez',
    role: 'Verified Customer',
    avatar: 'https://i.pravatar.cc/150?img=44',
    rating: 5,
    review:
      'I ordered snacks, coffee and household essentials. Everything came neatly packed. I will definitely order again.',
    product: 'Snacks & Household',
    date: '2 weeks ago',
    verified: true
  },
  {
    id: 6,
    name: 'James Anderson',
    role: 'Verified Customer',
    avatar: 'https://i.pravatar.cc/150?img=68',
    rating: 5,
    review:
      'Excellent grocery service. The website is easy to use and the product quality has been consistently good.',
    product: 'Everyday Groceries',
    date: '2 weeks ago',
    verified: true
  }
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const total = testimonials.length

  const nextSlide = () => {
    setCurrent(prev => (prev + 1) % total)
  }

  const prevSlide = () => {
    setCurrent(prev => (prev - 1 + total) % total)
  }

  useEffect(() => {
    if (paused) return

    const timer = setInterval(() => {
      nextSlide()
    }, 4500)

    return () => clearInterval(timer)
  }, [paused])

  const getVisibleTestimonials = () => {
    const visible = []

    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(current + i) % total])
    }

    return visible
  }

  return (
    <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute left-0 top-20 h-64 w-64 rounded-full bg-green-100/50 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-orange-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4">
        {/* =================================================
            HEADER
        ================================================= */}

        <div className="mx-auto mb-10 max-w-2xl text-center">
          <motion.div
            initial={{
              opacity: 0,
              y: 15
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            className="mb-3 inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-xs font-bold text-brand"
          >
            <Star size={14} className="fill-amber-400 text-amber-400" />
            Loved by our customers
          </motion.div>

          <motion.h2
            initial={{
              opacity: 0,
              y: 15
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: 0.1
            }}
            className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
          >
            What Our Customers Say
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
              y: 15
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: 0.2
            }}
            className="mt-3 text-sm leading-6 text-gray-500 sm:text-base"
          >
            Thousands of happy shoppers trust Antixor Grocery for fresh products
            and reliable delivery.
          </motion.p>
        </div>

        {/* =================================================
            DESKTOP / TABLET CARDS
        ================================================= */}

        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="relative"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{
                opacity: 0,
                x: 30
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              exit={{
                opacity: 0,
                x: -30
              }}
              transition={{
                duration: 0.35
              }}
              className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
            >
              {getVisibleTestimonials().map((testimonial, index) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                  featured={index === 1}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* =================================================
              DESKTOP ARROWS
          ================================================= */}

          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous testimonials"
            className="absolute -left-5 top-1/2 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-lg transition hover:scale-105 hover:bg-brand hover:text-white lg:grid"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next testimonials"
            className="absolute -right-5 top-1/2 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-lg transition hover:scale-105 hover:bg-brand hover:text-white lg:grid"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* =================================================
            MOBILE CONTROLS
        ================================================= */}

        <div className="mt-7 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prevSlide}
            className="grid h-10 w-10 place-items-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition hover:bg-brand hover:text-white"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-1.5">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrent(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  current === index ? 'w-7 bg-brand' : 'w-1.5 bg-gray-300'
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={nextSlide}
            className="grid h-10 w-10 place-items-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition hover:bg-brand hover:text-white"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* =================================================
            BOTTOM STATS
        ================================================= */}

        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
          <Stat value="4.9/5" label="Average Rating" />

          <Stat value="10K+" label="Happy Customers" />

          <Stat value="98%" label="Positive Reviews" />

          <Stat value="24/7" label="Customer Support" />
        </div>
      </div>
    </section>
  )
}

/* =========================================================
   TESTIMONIAL CARD
========================================================= */

function TestimonialCard({ testimonial, featured }) {
  return (
    <motion.article
      whileHover={{
        y: -5
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20
      }}
      className={`
        relative overflow-hidden rounded-2xl
        border bg-white p-5 shadow-sm
        transition-shadow duration-300
        hover:shadow-xl
        ${featured ? 'border-green-200 shadow-green-100/50' : 'border-gray-100'}
      `}
    >
      {/* Quote Icon */}
      <div className="absolute right-5 top-5 text-green-100">
        <Quote size={42} />
      </div>

      {/* Customer */}
      <div className="flex items-center gap-3">
        <div className="relative">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="h-12 w-12 rounded-full object-cover ring-2 ring-green-100"
          />

          {testimonial.verified && (
            <span className="absolute -bottom-1 -right-1 grid h-5 w-5 place-items-center rounded-full bg-brand text-white ring-2 ring-white">
              <BadgeCheck size={12} />
            </span>
          )}
        </div>

        <div className="min-w-0">
          <h3 className="truncate text-sm font-bold text-gray-900">
            {testimonial.name}
          </h3>

          <p className="text-[11px] text-gray-400">{testimonial.role}</p>
        </div>
      </div>

      {/* Rating */}
      <div className="mt-4 flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            size={14}
            className={
              index < testimonial.rating
                ? 'fill-amber-400 text-amber-400'
                : 'text-gray-200'
            }
          />
        ))}

        <span className="ml-1 text-xs font-bold text-gray-600">
          {testimonial.rating}.0
        </span>
      </div>

      {/* Review */}
      <p className="mt-4 min-h-[96px] text-sm leading-6 text-gray-600">
        “{testimonial.review}”
      </p>

      {/* Product */}
      <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
        <div className="flex min-w-0 items-center gap-2">
          <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-green-50 text-brand">
            <ShoppingBag size={14} />
          </div>

          <div className="min-w-0">
            <p className="text-[10px] text-gray-400">Purchased</p>

            <p className="truncate text-xs font-semibold text-gray-700">
              {testimonial.product}
            </p>
          </div>
        </div>

        <span className="shrink-0 text-[10px] text-gray-400">
          {testimonial.date}
        </span>
      </div>
    </motion.article>
  )
}

/* =========================================================
   STAT
========================================================= */

function Stat({ value, label }) {
  return (
    <div className="rounded-xl border border-gray-100 bg-white px-3 py-4 text-center shadow-sm">
      <p className="text-lg font-extrabold text-brand sm:text-xl">{value}</p>

      <p className="mt-0.5 text-[10px] font-medium text-gray-400 sm:text-xs">
        {label}
      </p>
    </div>
  )
}
