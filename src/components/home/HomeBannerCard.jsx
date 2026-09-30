import GButton from '../GButton'

export default function HomeBannerCard() {
  return (
    <div>
      <section className="flex flex-col items-start justify-between gap-4 rounded-2xl bg-gradient-to-r from-brand-dark to-brand p-8 text-white sm:flex-row sm:items-center">
        <div>
          <h2 className="text-2xl font-bold">Daily Fresh Deals</h2>
          <p className="opacity-80">Save more on your favorite products.</p>
          <GButton to="/deals" variant="light" className="mt-4">
            View Deals
          </GButton>
        </div>
        <div className="grid h-24 w-24 place-items-center rounded-full bg-orange text-center text-xs font-bold">
          Up to
          <br />
          <span className="text-3xl">50%</span>OFF
        </div>
      </section>
    </div>
  )
}
