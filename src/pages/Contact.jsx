import { Mail, MapPin, Phone } from "lucide-react"
import GButton from "../components/GButton"
import { Helmet } from "react-helmet-async"

export const Contact = () => (
  <div className="mx-auto grid max-w-5xl gap-8 px-4 py-12 md:grid-cols-2">
    <Helmet>
      <title>Contact – Shoppix Grocery</title>
    </Helmet>
    <div className="rounded-2xl bg-brand-dark p-8 text-white">
      <h1 className="text-3xl font-extrabold">Talk to us</h1>
      <div className="mt-6 space-y-4 text-sm">
        <p className="flex gap-2">
          <Phone size={16} />
          +880 123 456 789
        </p>
        <p className="flex gap-2">
          <Mail size={16} />
          support@antixorgrocery.com
        </p>
        <p className="flex gap-2">
          <MapPin size={16} />
          Dhaka, Bangladesh
        </p>
      </div>
    </div>
    <form
      onSubmit={e => {
        e.preventDefault()
        alert('Message sent. We reply within 24 hours.')
      }}
      className="space-y-3"
    >
      {['Name', 'Email'].map(f => (
        <input
          key={f}
          required
          placeholder={f}
          className="w-full rounded-lg border border-green-200 bg-white px-4 py-3"
        />
      ))}
      <textarea
        required
        rows="5"
        placeholder="Message"
        className="w-full rounded-lg border border-green-200 bg-white px-4 py-3"
      />
      <GButton type="submit" className="w-full">
        Send message
      </GButton>
    </form>
  </div>
)
