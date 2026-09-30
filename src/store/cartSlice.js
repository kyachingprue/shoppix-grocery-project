import { createSlice } from '@reduxjs/toolkit'

const saved = (() => {
  try {
    return JSON.parse(localStorage.getItem('cart')) || {}
  } catch {
    return {}
  }
})()

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: saved }, // { [productId]: quantity }
  reducers: {
    add: (state, { payload: id }) => {
      state.items[id] = (state.items[id] || 0) + 1
    },
    setQty: (state, { payload: { id, qty } }) => {
      if (qty <= 0) delete state.items[id]
      else state.items[id] = qty
    },
    clearCart: state => {
      state.items = {}
    }
  }
})

export const { add, setQty, clearCart } = cartSlice.actions
export const selectItems = s => s.cart.items
export const selectCount = s =>
  Object.values(s.cart.items).reduce((a, b) => a + b, 0)
export default cartSlice.reducer
