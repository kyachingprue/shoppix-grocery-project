import { Link } from 'react-router'
import { Leaf } from 'lucide-react'
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter
} from 'react-icons/fa'

const nav = [
  ['/', 'Home'],
  ['/shop', 'Shop'],
  ['/deals', 'Deals'],
  ['/about', 'About Us'],
  ['/contact', 'Contact']
]

const Logo = ({ light }) => (
  <Link
    to="/"
    className={`flex items-center gap-1.5 font-extrabold leading-none ${
      light ? 'text-white' : 'text-brand-dark'
    }`}
  >
    <Leaf className="fill-brand text-brand" size={30} />

    <span>
      Shoppix
      <small className="block text-xs font-medium">grocery.com</small>
    </span>
  </Link>
)

export default function Footer() {
  return (
    <footer className="mt-16 bg-brand-dark text-green-50">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">

        {/* Brand */}
        <div>
          <Logo light />

          <p className="mt-3 text-sm opacity-80">
            Fresh Food · Happy Life
          </p>

          {/* Social Icons */}
          <div className="mt-4 flex gap-3">
            {[
              FaFacebookF,
              FaInstagram,
              FaYoutube,
              FaTwitter
            ].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="rounded-full bg-white/10 p-2 transition hover:bg-orange"
                aria-label="Social media"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="mb-3 font-bold">
            Quick Links
          </h4>

          {nav.map(([to, label]) => (
            <Link
              key={to}
              to={to}
              className="block py-0.5 text-sm opacity-80 hover:opacity-100"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Categories */}
        <div>
          <h4 className="mb-3 font-bold">
            Categories
          </h4>

          {[
            'Fruits & Vegetables',
            'Dairy & Eggs',
            'Bakery & Bread',
            'Snacks & Beverages'
          ].map(category => (
            <Link
              key={category}
              to="/shop"
              className="block py-0.5 text-sm opacity-80 hover:opacity-100"
            >
              {category}
            </Link>
          ))}
        </div>

        {/* Contact */}
        <div className="text-sm opacity-80">
          <h4 className="mb-3 font-bold opacity-100">
            Get in Touch
          </h4>

          <p>+880 123 456 789</p>
          <p>support@antixorgrocery.com</p>
          <p>Dhaka, Bangladesh</p>
        </div>
      </div>

      {/* Copyright */}
      <p className="border-t border-white/10 py-4 text-center text-xs opacity-70">
        © 2025 Antixor Grocery. All rights reserved.
      </p>
    </footer>
  )
}

