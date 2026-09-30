import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'

export const store = configureStore({ reducer: { cart: cartReducer } })

// keep the cart after page refresh
store.subscribe(() => {
  try {
    localStorage.setItem('cart', JSON.stringify(store.getState().cart.items))
  } catch {
    console.log("error redux toolkit")
  }
})
