import { boothSteps, luckyDrawPrizes } from '../data/siteData'

function EventTicket() {
  return (
    <div className="fade-in delay-400 relative">
      <div className="event-ticket tilt-card rounded-[28px] border-2 border-[var(--lion-black)] bg-[var(--layer-white)] p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p
              className="text-sm font-black uppercase tracking-[0.18em] text-[color:var(--primary-orange)]"
              lang="en"
            >
              Main Event
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
              럭키드로우 이벤트
            </h2>
          </div>
        </div>

        <div className="mt-8 grid gap-4">
          {boothSteps.map((step, index) => (
            <div
              className="event-step flex items-center gap-4 rounded-2xl border-2 border-[var(--lion-black)] bg-[var(--base-grey)] p-4"
              key={step}
              style={{ animationDelay: `${600 + index * 120}ms` }}
            >
              <span className="grid size-11 place-items-center rounded-full bg-[var(--primary-orange)] text-sm font-black text-[color:var(--layer-white)]">
                {index + 1}
              </span>
              <p className="font-bold">{step}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl bg-[var(--lion-black)] p-5 text-[color:var(--layer-white)]">
          <p className="text-sm font-bold text-[color:var(--utility-yellow)]">
            피드백 작성자 대상
          </p>
          <p className="mt-2 text-2xl font-black">럭키드로우 기회 1회 제공</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {luckyDrawPrizes.map((prize) => (
              <span
                className="rounded-full bg-[var(--layer-white)] px-3 py-1 text-xs font-black text-[color:var(--lion-black)]"
                key={prize.name}
              >
                {prize.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventTicket
