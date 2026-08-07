import StrokeText from '../components/StrokeText'
import ExhibitionSchedule from '../components/ExhibitionSchedule'
import TeamCards from '../components/TeamCards'

function TeamsPage() {
  return (
    <section className="page-panel relative min-h-[calc(100vh-88px)] py-12 text-[color:var(--lion-black)] sm:py-16">
      <div className="relative z-10">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p
              className="text-sm font-black uppercase tracking-[0.2em] text-[color:var(--primary-orange)]"
              lang="en"
            >
              Team Services
            </p>
            <h1 className="page-stroke-title mt-3 font-black text-[color:var(--lion-black)]">
              <StrokeText
                className="page-stroke-line"
                drawDuration={1.1}
                fillColor="var(--lion-black)"
                fillDelay={0.1}
                fontFamily="var(--font-title-ko)"
                fontSize={72}
                fontWeight={900}
                letterSpacing={-1}
                stagger={0.04}
                startDelay={0.42}
                strokeColor="var(--lion-black)"
                strokeWidth={1.5}
                text="서비스 소개"
              />
            </h1>
          </div>

        </div>

        <ExhibitionSchedule />
        <TeamCards />
      </div>
    </section>
  )
}

export default TeamsPage
