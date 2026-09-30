import { useMemo, useState } from 'react'
import ProductCard from '../ProductCard'
import { products } from '../../data'

const tabs = [
  {
    label: 'All',
    value: 'All'
  },
  {
    label: 'Fruits',
    value: 'Fruits & Vegetables'
  },
  {
    label: 'Dairy',
    value: 'Dairy & Eggs'
  },
  {
    label: 'Bakery',
    value: 'Bakery & Bread'
  },
  {
    label: 'Meat & Seafood',
    value: 'Meat & Seafood'
  },
  {
    label: 'Snacks',
    value: 'Snacks & Beverages'
  }
]

export default function HomeProductCard() {
  const [tab, setTab] = useState('All')

  const list = useMemo(() => {
    const filtered =
      tab === 'All'
        ? products
        : products.filter(product => product.category === tab)

    return filtered.slice(0, 10)
  }, [tab])

  return (
    <section className="mt-10">
      {/* Header */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        {/* Title */}
        <div>
          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-brand">
            Fresh & Popular
          </p>

          <h2 className="text-2xl font-extrabold text-brand-dark sm:text-3xl">
            Popular Products
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Fresh groceries selected for your everyday needs.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex max-w-full gap-2 overflow-x-auto pb-1">
          {tabs.map(tabItem => {
            const active = tab === tabItem.value

            return (
              <button
                key={tabItem.value}
                type="button"
                onClick={() => setTab(tabItem.value)}
                className={`
                  shrink-0 rounded-full px-4 py-2 text-xs font-semibold
                  transition-all duration-200
                  ${
                    active
                      ? 'bg-brand text-white shadow-md shadow-brand/20'
                      : 'border border-gray-200 bg-white text-gray-600 hover:border-brand hover:text-brand'
                  }
                `}
              >
                {tabItem.label}
              </button>
            )
          })}
        </div>
      </div>

      {/* Products */}
      {list.length > 0 ? (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {list.map(product => (
            <ProductCard
              key={product.id}
              p={product}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-gray-200 py-16 text-center">
          <p className="text-sm font-medium text-gray-500">
            No products found in this category.
          </p>
        </div>
      )}
    </section>
  )
}

