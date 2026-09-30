import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import { Shop, Deals } from './pages/Shop'
import { Cart } from './pages/Other'
import Layout from './layout/Layout'
import { About } from './pages/About'
import { Contact } from './pages/Contact'


export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="deals" element={<Deals />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cart" element={<Cart />} />
      </Route>
    </Routes>
  )
}
