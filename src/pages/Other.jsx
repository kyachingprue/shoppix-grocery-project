import { Helmet } from 'react-helmet-async'
import { motion } from 'motion/react'
import {
  Minus,
  Plus,
  Trash2,
} from 'lucide-react'
import GButton from '../components/GButton'
import { useSelector, useDispatch } from 'react-redux'
import { selectItems, setQty } from '../store/cartSlice'
import { products } from '../data'


export function Cart() {
  const items = useSelector(selectItems)
  const dispatch = useDispatch()
  const rows = products.filter(p => items[p.id])
  const total = rows.reduce((a, p) => a + p.price * items[p.id], 0)
  const change = (id, qty) => dispatch(setQty({ id, qty }))
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <Helmet>
        <title>Cart – Shoppix Grocery</title>
      </Helmet>
      <h1 className="mb-6 text-2xl font-bold">Your Cart</h1>
      {!rows.length ? (
        <div className="rounded-xl bg-white p-10 text-center">
          <p className="mb-4 text-gray-500">
            Your cart is empty. Add fresh items to get started.
          </p>
          <GButton to="/shop">Browse products</GButton>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-[1fr_280px]">
          <div className="space-y-3">
            {rows.map(p => (
              <motion.div
                layout
                key={p.id}
                className="flex items-center gap-4 rounded-xl bg-white p-4"
              >
                <span className="text-4xl">{p.emoji}</span>
                <div className="flex-1">
                  <b>{p.name}</b>
                  <p className="text-xs text-gray-500">
                    {p.unit} · ${p.price.toFixed(2)}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => change(p.id, items[p.id] - 1)}>
                    <Minus size={16} />
                  </button>
                  {items[p.id]}
                  <button onClick={() => change(p.id, items[p.id] + 1)}>
                    <Plus size={16} />
                  </button>
                </div>
                <b className="w-16 text-right">
                  ${(p.price * items[p.id]).toFixed(2)}
                </b>
                <button onClick={() => change(p.id, 0)}>
                  <Trash2 size={16} className="text-red-500" />
                </button>
              </motion.div>
            ))}
          </div>
          <div className="h-fit rounded-xl bg-leaf p-5">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <b>${total.toFixed(2)}</b>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Delivery</span>
              <span>Free on first order</span>
            </div>
            <GButton
              className="mt-4 w-full"
              variant="orange"
              onClick={() =>
                alert('Demo checkout – connect your backend here.')
              }
            >
              Checkout
            </GButton>
          </div>
        </div>
      )}
    </div>
  )
}
