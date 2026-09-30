import { useMemo, useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'motion/react'
import { useSearchParams } from 'react-router'
import {
  Search,
  SlidersHorizontal,
  X,
  RotateCcw,
  ChevronDown,
  PackageSearch,
  Sparkles,
  Clock3,
  Tag,
  Check
} from 'lucide-react'

import ProductCard from '../components/ProductCard'
import { products } from '../data'
import Pagination from '../components/common/Pagination'
import Testimonials from '../components/common/Testimonials'


const categories = [
  'All',
  'Fruits & Vegetables',
  'Dairy & Eggs',
  'Bakery & Bread',
  'Meat & Seafood',
  'Pantry Staples',
  'Snacks & Beverages',
  'Household',
  'Personal Care'
]

const sortOptions = [
  { value: 'popular', label: 'Most Popular' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'low', label: 'Price: Low to High' },
  { value: 'high', label: 'Price: High to Low' },
  { value: 'discount', label: 'Biggest Discount' }
]

const MAX_PRICE = Math.max(...products.map(product => product.price))

/* =========================================================
   SHOP PAGE
========================================================= */

export function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()

  const urlCategory = searchParams.get('category') || 'All'

  const [cat, setCat] = useState(urlCategory)
  const [sort, setSort] = useState('popular')
  const [max, setMax] = useState(MAX_PRICE)
  const [q, setQ] = useState('')
  const [mobileFilter, setMobileFilter] = useState(false)
  const [discountOnly, setDiscountOnly] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  const PRODUCTS_PER_PAGE = 8

  // ==========================================
  // CATEGORY URL SYNC
  // ==========================================

  useEffect(() => {
    setCat(searchParams.get('category') || 'All')
  }, [searchParams])

  // ==========================================
  // CATEGORY CHANGE
  // ==========================================

  const handleCategoryChange = category => {
    setCat(category)

    const params = new URLSearchParams(searchParams)

    if (category === 'All') {
      params.delete('category')
    } else {
      params.set('category', category)
    }

    setSearchParams(params)
  }

  // ==========================================
  // FILTER + SEARCH + SORT
  // ==========================================

  const list = useMemo(() => {
    const search = q.trim().toLowerCase()

    const filtered = products.filter(product => {
      const matchesCategory = cat === 'All' || product.category === cat

      const matchesPrice = (product.discountPrice ?? product.price) <= max

      const matchesSearch =
        !search ||
        product.name.toLowerCase().includes(search) ||
        product.brand?.toLowerCase().includes(search) ||
        product.category?.toLowerCase().includes(search) ||
        product.tags?.some(tag => tag.toLowerCase().includes(search))

      const hasDiscount =
        product.discountPrice && product.discountPrice < product.price

      const matchesDiscount = !discountOnly || hasDiscount

      return matchesCategory && matchesPrice && matchesSearch && matchesDiscount
    })

    return [...filtered].sort((a, b) => {
      if (sort === 'low') {
        return (a.discountPrice ?? a.price) - (b.discountPrice ?? b.price)
      }

      if (sort === 'high') {
        return (b.discountPrice ?? b.price) - (a.discountPrice ?? a.price)
      }

      if (sort === 'rating') {
        return b.rating - a.rating
      }

      if (sort === 'discount') {
        const discountA =
          ((a.price - (a.discountPrice ?? a.price)) / a.price) * 100

        const discountB =
          ((b.price - (b.discountPrice ?? b.price)) / b.price) * 100

        return discountB - discountA
      }

      return b.reviews - a.reviews
    })
  }, [cat, sort, max, q, discountOnly])

  // ==========================================
  // PAGINATION
  // ==========================================

  const totalPages = Math.ceil(list.length / PRODUCTS_PER_PAGE)

  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE

  const paginatedProducts = list.slice(
    startIndex,
    startIndex + PRODUCTS_PER_PAGE
  )

  // ==========================================
  // RESET PAGE WHEN FILTER CHANGES
  // ==========================================

  useEffect(() => {
    setCurrentPage(1)
  }, [cat, sort, max, q, discountOnly])

  // ==========================================
  // RESET FILTERS
  // ==========================================

  const resetFilters = () => {
    setCat('All')
    setSort('popular')
    setMax(MAX_PRICE)
    setQ('')
    setDiscountOnly(false)
    setCurrentPage(1)

    const params = new URLSearchParams(searchParams)

    params.delete('category')

    setSearchParams(params)
  }

  // ==========================================
  // ACTIVE FILTERS
  // ==========================================

  const hasFilters =
    cat !== 'All' ||
    sort !== 'popular' ||
    max !== MAX_PRICE ||
    q !== '' ||
    discountOnly

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Shop – Antixor Grocery</title>
        <meta
          name="description"
          content="Shop fresh groceries, dairy, bakery, meat, seafood, snacks and household essentials at Antixor Grocery."
        />
      </Helmet>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-br from-brand-dark via-brand to-emerald-700">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-lime-300/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-10 sm:py-14">
          <div className="max-w-2xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
              <Sparkles size={14} />
              Fresh groceries for everyday life
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Shop Fresh.
              <span className="block text-lime-200">Live Better.</span>
            </h1>

            <p className="mt-3 max-w-xl text-sm leading-6 text-white/80 sm:text-base">
              Discover fresh fruits, vegetables, dairy, bakery, meat, seafood,
              snacks and everyday essentials.
            </p>
          </div>

          {/* Search */}
          <div className="mt-7 max-w-2xl">
            <div className="relative">
              <Search
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                value={q}
                onChange={e => setQ(e.target.value)}
                placeholder="Search products, brands or categories..."
                className="h-12 w-full rounded-xl border border-white/20 bg-white pl-11 pr-11 text-sm text-gray-800 shadow-xl outline-none transition placeholder:text-gray-400 focus:ring-4 focus:ring-white/20"
              />

              {q && (
                <button
                  type="button"
                  onClick={() => setQ('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1.5 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="mx-auto max-w-7xl px-4 py-6 sm:py-8">
        <div className="flex items-start gap-6">
          {/* =================================================
              DESKTOP SIDEBAR
          ================================================= */}

          <aside className="hidden w-64 shrink-0 lg:block">
            <FilterPanel
              cat={cat}
              setCat={handleCategoryChange}
              max={max}
              setMax={setMax}
              discountOnly={discountOnly}
              setDiscountOnly={setDiscountOnly}
              resetFilters={resetFilters}
              hasFilters={hasFilters}
            />
          </aside>

          {/* =================================================
              PRODUCTS
          ================================================= */}

          <section className="min-w-0 flex-1">
            {/* Top toolbar */}
            <div className="mb-5 rounded-xl border border-gray-100 bg-white p-3 shadow-sm sm:p-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-extrabold text-gray-900 sm:text-2xl">
                      All Products
                    </h2>

                    <span className="rounded-full bg-brand/10 px-2.5 py-1 text-xs font-bold text-brand">
                      {list.length}
                    </span>
                  </div>

                  <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                    Fresh products selected for your everyday needs.
                  </p>
                </div>

                <div className="flex gap-2">
                  {/* Mobile Filter */}
                  <button
                    type="button"
                    onClick={() => setMobileFilter(true)}
                    className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-semibold text-gray-700 transition hover:border-brand hover:text-brand lg:hidden"
                  >
                    <SlidersHorizontal size={15} />
                    Filters
                  </button>

                  {/* Sort */}
                  <div className="relative">
                    <select
                      value={sort}
                      onChange={e => setSort(e.target.value)}
                      className="h-10 appearance-none rounded-lg border border-gray-200 bg-white pl-3 pr-9 text-xs font-semibold text-gray-700 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/10 sm:text-sm"
                    >
                      {sortOptions.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>

                    <ChevronDown
                      size={15}
                      className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                  </div>
                </div>
              </div>

              {/* Active filters */}
              {hasFilters && (
                <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-gray-100 pt-3">
                  <span className="text-[11px] font-semibold text-gray-400">
                    Active:
                  </span>

                  {cat !== 'All' && (
                    <FilterTag label={cat} onRemove={() => setCat('All')} />
                  )}

                  {discountOnly && (
                    <FilterTag
                      label="Discounted"
                      onRemove={() => setDiscountOnly(false)}
                    />
                  )}

                  {q && (
                    <FilterTag
                      label={`Search: ${q}`}
                      onRemove={() => setQ('')}
                    />
                  )}

                  {max !== MAX_PRICE && (
                    <FilterTag
                      label={`Up to ৳${max}`}
                      onRemove={() => setMax(MAX_PRICE)}
                    />
                  )}

                  <button
                    type="button"
                    onClick={resetFilters}
                    className="ml-auto inline-flex items-center gap-1 text-[11px] font-bold text-red-500 hover:text-red-600"
                  >
                    <RotateCcw size={12} />
                    Reset
                  </button>
                </div>
              )}
            </div>

            {/* Product Grid */}
            {list.length > 0 ? (
              <>
                <motion.div
                  layout
                  className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-4"
                >
                  <AnimatePresence mode="popLayout">
                    {paginatedProducts.map(product => (
                      <motion.div
                        layout
                        key={product.id}
                        initial={{
                          opacity: 0,
                          y: 15
                        }}
                        animate={{
                          opacity: 1,
                          y: 0
                        }}
                        exit={{
                          opacity: 0,
                          scale: 0.95
                        }}
                        transition={{
                          duration: 0.25
                        }}
                      >
                        <ProductCard p={product} />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
                {totalPages > 1 && (
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                    totalItems={list.length}
                    startIndex={startIndex}
                    endIndex={Math.min(
                      startIndex + PRODUCTS_PER_PAGE,
                      list.length
                    )}
                  />
                )}
              </>
            ) : (
              <EmptyProducts onReset={resetFilters} />
            )}
          </section>
        </div>
      </div>

      {/* =====================================================
          MOBILE FILTER DRAWER
      ===================================================== */}

      <AnimatePresence>
        {mobileFilter && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileFilter(false)}
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm lg:hidden"
            />

            <motion.div
              initial={{
                x: '100%'
              }}
              animate={{
                x: 0
              }}
              exit={{
                x: '100%'
              }}
              transition={{
                type: 'spring',
                damping: 28,
                stiffness: 260
              }}
              className="fixed right-0 top-0 z-50 h-full w-[88%] max-w-sm overflow-y-auto bg-gray-50 p-4 shadow-2xl lg:hidden"
            >
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-extrabold text-gray-900">
                    Filters
                  </h3>
                  <p className="text-xs text-gray-500">Refine your products</p>
                </div>

                <button
                  type="button"
                  onClick={() => setMobileFilter(false)}
                  className="rounded-lg border border-gray-200 bg-white p-2 text-gray-500 hover:text-gray-900"
                >
                  <X size={18} />
                </button>
              </div>

              <FilterPanel
                cat={cat}
                setCat={handleCategoryChange}
                max={max}
                setMax={setMax}
                discountOnly={discountOnly}
                setDiscountOnly={setDiscountOnly}
                resetFilters={resetFilters}
                hasFilters={hasFilters}
              />

              <button
                type="button"
                onClick={() => setMobileFilter(false)}
                className="mt-5 w-full rounded-xl bg-brand py-3 text-sm font-bold text-white shadow-lg shadow-brand/20"
              >
                Show {list.length} Products
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

/* =========================================================
   FILTER PANEL
========================================================= */

function FilterPanel({
  cat,
  setCat,
  max,
  setMax,
  discountOnly,
  setDiscountOnly,
  resetFilters,
  hasFilters
}) {
  return (
    <div className="space-y-5 rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-extrabold text-gray-900">Filters</h3>
          <p className="mt-0.5 text-xs text-gray-400">Find what you need</p>
        </div>

        <SlidersHorizontal size={18} className="text-brand" />
      </div>

      {/* Categories */}
      <div>
        <div className="mb-3 flex items-center justify-between">
          <h4 className="text-sm font-bold text-gray-800">Categories</h4>

          <span className="text-[10px] text-gray-400">
            {categories.length - 1} categories
          </span>
        </div>

        <div className="space-y-1">
          {categories.map(category => {
            const active = cat === category

            return (
              <button
                type="button"
                key={category}
                onClick={() => setCat(category)}
                className={`
                  flex w-full items-center justify-between
                  rounded-lg px-3 py-2.5 text-left text-xs
                  font-medium transition-all
                  ${
                    active
                      ? 'bg-brand text-white shadow-md shadow-brand/15'
                      : 'text-gray-600 hover:bg-green-50 hover:text-brand'
                  }
                `}
              >
                <span className="line-clamp-1">{category}</span>

                {active && <Check size={14} />}
              </button>
            )
          })}
        </div>
      </div>

      {/* Price */}
      <div className="border-t border-gray-100 pt-5">
        <div className="mb-3 flex items-center justify-between">
          <h4 className="text-sm font-bold text-gray-800">Maximum Price</h4>

          <span className="rounded-full bg-green-50 px-2.5 py-1 text-xs font-bold text-brand">
            ৳{max}
          </span>
        </div>

        <input
          type="range"
          min="50"
          max={MAX_PRICE}
          step="10"
          value={max}
          onChange={e => setMax(Number(e.target.value))}
          className="w-full cursor-pointer accent-[#0f5b2f]"
        />

        <div className="mt-2 flex justify-between text-[10px] text-gray-400">
          <span>৳50</span>
          <span>৳{MAX_PRICE}</span>
        </div>
      </div>

      {/* Discount */}
      <div className="border-t border-gray-100 pt-5">
        <button
          type="button"
          onClick={() => setDiscountOnly(!discountOnly)}
          className={`
            flex w-full items-center gap-3 rounded-lg border p-3 text-left transition
            ${
              discountOnly
                ? 'border-orange/30 bg-orange/5'
                : 'border-gray-100 hover:border-orange/20'
            }
          `}
        >
          <div
            className={`
              grid h-8 w-8 shrink-0 place-items-center rounded-lg
              ${
                discountOnly
                  ? 'bg-orange text-white'
                  : 'bg-orange/10 text-orange'
              }
            `}
          >
            <Tag size={15} />
          </div>

          <div className="min-w-0">
            <p className="text-xs font-bold text-gray-800">
              Discounted Products
            </p>
            <p className="text-[10px] text-gray-400">
              Show only products on sale
            </p>
          </div>

          <div
            className={`
              ml-auto h-5 w-9 rounded-full p-0.5 transition
              ${discountOnly ? 'bg-orange' : 'bg-gray-200'}
            `}
          >
            <div
              className={`
                h-4 w-4 rounded-full bg-white shadow transition
                ${discountOnly ? 'translate-x-4' : 'translate-x-0'}
              `}
            />
          </div>
        </button>
      </div>

      {/* Reset */}
      {hasFilters && (
        <button
          type="button"
          onClick={resetFilters}
          className="flex w-full items-center justify-center gap-2 rounded-lg border border-red-100 bg-red-50 py-2.5 text-xs font-bold text-red-500 transition hover:bg-red-100"
        >
          <RotateCcw size={14} />
          Reset All Filters
        </button>
      )}
    </div>
  )
}

/* =========================================================
   FILTER TAG
========================================================= */

function FilterTag({ label, onRemove }) {
  return (
    <span className="inline-flex max-w-full items-center gap-1 rounded-full bg-green-50 px-2.5 py-1 text-[10px] font-semibold text-brand">
      <span className="max-w-40 truncate">{label}</span>

      <button
        type="button"
        onClick={onRemove}
        className="rounded-full hover:bg-brand/10"
      >
        <X size={11} />
      </button>
    </span>
  )
}

/* =========================================================
   EMPTY PRODUCTS
========================================================= */

function EmptyProducts({ onReset }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 10
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      className="rounded-2xl border border-dashed border-gray-200 bg-white px-6 py-16 text-center"
    >
      <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-green-50 text-brand">
        <PackageSearch size={30} />
      </div>

      <h3 className="mt-4 text-lg font-bold text-gray-800">
        No products found
      </h3>

      <p className="mx-auto mt-1 max-w-sm text-sm text-gray-500">
        We couldn't find any products matching your current filters. Try
        changing your search or filters.
      </p>

      <button
        type="button"
        onClick={onReset}
        className="mt-5 inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-2.5 text-xs font-bold text-white transition hover:bg-brand-dark"
      >
        <RotateCcw size={14} />
        Reset Filters
      </button>
    </motion.div>
  )
}

/* =========================================================
   DEALS PAGE
========================================================= */

export function Deals() {
  const [seconds, setSeconds] = useState(12 * 3600 + 36 * 60 + 24)

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(current => (current > 0 ? current - 1 : 0))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const secs = seconds % 60

  const deals = useMemo(() => {
    return products
      .filter(
        product =>
          product.discountPrice && product.discountPrice < product.price
      )
      .map(product => ({
        ...product,
        discountPercent: Math.round(
          ((product.price - product.discountPrice) / product.price) * 100
        )
      }))
      .sort((a, b) => b.discountPercent - a.discountPercent)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Deals of the Day – Antixor Grocery</title>
        <meta
          name="description"
          content="Explore today's grocery deals and save more on your favorite products."
        />
      </Helmet>

      {/* =================================================
          DEAL HERO
      ================================================= */}

      <section className="relative overflow-hidden bg-gradient-to-br from-brand-dark via-brand to-emerald-800 py-12 text-white sm:py-16">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-orange/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-lime-300/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-bold backdrop-blur">
            <Clock3 size={15} />
            Limited Time Offers
          </div>

          <h1 className="mt-4 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Deals of the Day
          </h1>

          <p className="mx-auto mt-2 max-w-lg text-sm text-white/75 sm:text-base">
            Save more on fresh groceries and everyday essentials before the
            deals end.
          </p>

          {/* Countdown */}
          <div className="mt-7 flex justify-center gap-2 sm:gap-3">
            {[
              ['Hours', hours],
              ['Minutes', minutes],
              ['Seconds', secs]
            ].map(([label, value]) => (
              <div
                key={label}
                className="w-[72px] rounded-xl border border-white/10 bg-white/10 p-3 backdrop-blur sm:w-24 sm:p-4"
              >
                <b className="block text-2xl font-extrabold sm:text-3xl">
                  {String(value).padStart(2, '0')}
                </b>

                <span className="text-[10px] text-white/70 sm:text-xs">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================
          DEAL INFO
      ================================================= */}

      <div className="mx-auto max-w-7xl px-4 py-8 sm:py-10">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-extrabold text-gray-900">
                Today's Offers
              </h2>

              <span className="rounded-full bg-orange/10 px-2.5 py-1 text-xs font-bold text-orange">
                {deals.length} Deals
              </span>
            </div>

            <p className="mt-1 text-sm text-gray-500">
              Grab your favorites before the offer ends.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-gray-500">
            <Tag size={15} className="text-orange" />
            Save up to{' '}
            <span className="font-bold text-orange">
              {deals.length
                ? Math.max(...deals.map(product => product.discountPercent))
                : 0}
              %
            </span>
          </div>
        </div>

        {/* Deal Grid */}
        {deals.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
          >
            {deals.map(product => (
              <motion.div
                layout
                key={product.id}
                initial={{
                  opacity: 0,
                  y: 15
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                transition={{
                  duration: 0.25
                }}
              >
                <ProductCard p={product} deal />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <EmptyProducts onReset={() => {}} />
        )}
      </div>
      <Testimonials/>
    </div>
  )
}
