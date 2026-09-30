import {motion} from 'motion/react'
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  totalItems,
  startIndex,
  endIndex
}) {
  const getPages = () => {
    const pages = []

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }

      return pages
    }

    pages.push(1)

    if (currentPage > 4) {
      pages.push('left-dots')
    }

    const start = Math.max(2, currentPage - 1)
    const end = Math.min(totalPages - 1, currentPage + 1)

    for (let i = start; i <= end; i++) {
      pages.push(i)
    }

    if (currentPage < totalPages - 3) {
      pages.push('right-dots')
    }

    pages.push(totalPages)

    return pages
  }

  return (
    <div className="mt-8 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm sm:mt-10 sm:p-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Results Info */}
        <div className="text-center sm:text-left">
          <p className="text-xs font-medium text-gray-500 sm:text-sm">
            Showing{' '}
            <span className="font-bold text-gray-800">{startIndex + 1}</span> -{' '}
            <span className="font-bold text-gray-800">{endIndex}</span> of{' '}
            <span className="font-bold text-brand">{totalItems}</span> products
          </p>

          <p className="mt-0.5 text-[10px] text-gray-400">
            Page {currentPage} of {totalPages}
          </p>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-1.5">
          {/* Previous */}
          <button
            type="button"
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
            className={`
              grid h-9 min-w-9 place-items-center rounded-lg
              border text-xs font-bold transition-all
              sm:h-10 sm:min-w-10
              ${
                currentPage === 1
                  ? 'cursor-not-allowed border-gray-100 bg-gray-50 text-gray-300'
                  : 'border-gray-200 bg-white text-gray-600 hover:border-brand hover:bg-brand hover:text-white hover:shadow-md'
              }
            `}
          >
            <ChevronLeftIcon />
          </button>

          {/* Page Numbers */}
          <div className="flex items-center gap-1">
            {getPages().map((page, index) => {
              if (page === 'left-dots' || page === 'right-dots') {
                return (
                  <span
                    key={`${page}-${index}`}
                    className="grid h-9 min-w-7 place-items-center text-xs font-bold text-gray-400 sm:h-10"
                  >
                    ...
                  </span>
                )
              }

              const active = currentPage === page

              return (
                <motion.button
                  key={page}
                  type="button"
                  whileTap={{ scale: 0.92 }}
                  onClick={() => onPageChange(page)}
                  className={`
                    grid h-9 min-w-9 place-items-center rounded-lg
                    text-xs font-bold transition-all
                    sm:h-10 sm:min-w-10
                    ${
                      active
                        ? 'bg-brand text-white shadow-lg shadow-brand/20'
                        : 'border border-gray-200 bg-white text-gray-600 hover:border-brand hover:text-brand'
                    }
                  `}
                >
                  {page}
                </motion.button>
              )
            })}
          </div>

          {/* Next */}
          <button
            type="button"
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
            className={`
              grid h-9 min-w-9 place-items-center rounded-lg
              border text-xs font-bold transition-all
              sm:h-10 sm:min-w-10
              ${
                currentPage === totalPages
                  ? 'cursor-not-allowed border-gray-100 bg-gray-50 text-gray-300'
                  : 'border-gray-200 bg-white text-gray-600 hover:border-brand hover:bg-brand hover:text-white hover:shadow-md'
              }
            `}
          >
            <ChevronRightIcon />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Pagination;
