import { useEffect, useState } from 'react'
import { Outlet } from 'react-router'
import { AnimatePresence, motion } from 'motion/react'
import { ChevronUp } from 'lucide-react'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'


export default function Layout() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > window.innerHeight * 0.7)
    }

    handleScroll()

    window.addEventListener(
      'scroll',
      handleScroll,
      { passive: true }
    )

    return () => {
      window.removeEventListener(
        'scroll',
        handleScroll
      )
    }
  }, [])

  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />

      {/* Back To Top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            aria-label="Back to top"
            initial={{
              opacity: 0,
              scale: 0.5,
              y: 40
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0
            }}
            exit={{
              opacity: 0,
              scale: 0.5,
              y: 40
            }}
            whileHover={{
              scale: 1.12
            }}
            whileTap={{
              scale: 0.9
            }}
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              })
            }
            className="fixed bottom-5 right-5 z-50 grid h-12 w-12 place-items-center rounded-full bg-orange text-white shadow-xl"
          >
            <ChevronUp />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}

