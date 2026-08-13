import { exhibitionSlots, teams } from '../data/siteData'

function ExhibitionSchedule() {
  const slots = exhibitionSlots.map((slot) => ({
    ...slot,
    team: teams.find((team) => team.id === slot.teamId),
  }))

  return (
    <section className="schedule-panel fade-up delay-100 mt-10">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p
            className="text-xs font-black uppercase tracking-[0.18em] text-[color:var(--primary-orange)]"
            lang="en"
          >
            Exhibition Time
          </p>
          <h2 className="mt-2 text-2xl font-black sm:text-3xl">
            팀별 전시 시간표
          </h2>
        </div>
      </div>

      <div className="schedule-list mt-5">
        {slots.map((slot, index) => (
          <article
            className="schedule-item"
            key={slot.teamId}
            style={{ animationDelay: `${160 + index * 80}ms` }}
          >
            <span className="schedule-order">0{index + 1}</span>
            <div className="min-w-0">
              <h3 className="mt-1 truncate text-xl font-black" lang="en">
                {slot.team?.name}
              </h3>
              <p className="mt-1 truncate text-sm font-bold">
                {slot.team?.tagline}
              </p>
            </div>
            <time className="schedule-time" dateTime={slot.time}>
              {slot.time}
            </time>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ExhibitionSchedule
