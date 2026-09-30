import { HeartHandshake, Sprout, Truck } from "lucide-react";
import { Helmet } from "react-helmet-async";
import {motion} from 'motion/react'

export const About = () => (
  <div className="mx-auto max-w-5xl px-4 py-12">
    <Helmet>
      <title>About – Antixor Grocery</title>
    </Helmet>
    <h1 className="text-4xl font-extrabold text-brand-dark">
      Good Food Brings People Together
    </h1>
    <p className="mt-4 max-w-2xl text-gray-600">
      At Antixor Grocery, we're committed to providing you the freshest
      products, best prices and a healthier tomorrow.
    </p>
    <div className="mt-10 grid gap-6 md:grid-cols-3">
      {[
        [Sprout, 'Farm fresh', 'Sourced daily from trusted local growers.'],
        [Truck, 'Fast delivery', 'Groceries at your door within hours.'],
        [HeartHandshake, 'Fair prices', 'Everyday savings, no hidden fees.']
      ].map(([I, t, d], i) => (
        <motion.div
          key={t}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.12 }}
          className="rounded-2xl bg-leaf p-6"
        >
          <I className="text-brand" size={32} />
          <h3 className="mt-3 font-bold">{t}</h3>
          <p className="text-sm text-gray-600">{d}</p>
        </motion.div>
      ))}
    </div>
  </div>
)
