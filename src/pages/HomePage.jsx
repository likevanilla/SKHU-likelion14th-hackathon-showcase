import { Link } from 'react-router-dom'
import EventTicket from '../components/EventTicket'
import ExhibitionSchedule from '../components/ExhibitionSchedule'
import StrokeText from '../components/StrokeText'

function HomePage() {
  return (
    <section className="home-page-layout page-panel grid min-h-[calc(100vh-88px)] items-center gap-10 py-12 sm:py-16">
      <div className="home-hero-copy max-w-3xl">
        <p
          className="fade-up text-sm font-black uppercase tracking-[0.2em] text-[color:var(--primary-orange)]"
          lang="en"
        >
          Hackathon Booth Event
        </p>
        <h1 className="hero-stroke-title mt-5 font-black">
          <StrokeText
            className="hero-stroke-line"
            drawDuration={1.2}
            fillColor="var(--lion-black)"
            fillDelay={0.1}
            fontFamily="var(--font-title-ko)"
            fontSize={96}
            fontWeight={900}
            letterSpacing={-1}
            stagger={0.035}
            startDelay={0.48}
            strokeColor="var(--lion-black)"
            strokeWidth={1.6}
            style={{ '--stroke-text-height': 'clamp(48px, 13vw, 124px)' }}
            text="해커톤 당일,"
          />
          <StrokeText
            className="hero-stroke-line hero-stroke-line--wide"
            drawDuration={1.2}
            fillColor="var(--primary-orange)"
            fillDelay={0.12}
            fontFamily="var(--font-title-ko)"
            fontSize={96}
            fontWeight={900}
            letterSpacing={-1}
            stagger={0.035}
            startDelay={0.54}
            strokeColor="var(--primary-orange)"
            strokeWidth={1.6}
            style={{ '--stroke-text-height': 'clamp(48px, 13vw, 124px)' }}
            text="성공회대 부스에서"
          />
          <span className="stroke-inline">
            <StrokeText
              className="hero-stroke-line hero-stroke-line--short"
              drawDuration={1.2}
              fillColor="var(--lion-black)"
              fillDelay={0.14}
              fontFamily="var(--font-title-ko)"
              fontSize={96}
              fontWeight={900}
              letterSpacing={-1}
              stagger={0.035}
              startDelay={0.6}
              strokeColor="var(--lion-black)"
              strokeWidth={1.6}
              style={{ '--stroke-text-height': 'clamp(48px, 13vw, 124px)' }}
              text="만나요"
            />
            <span className="stroke-emoji" aria-hidden="true">
              🙌
            </span>
          </span>
        </h1>

        <div className="fade-up delay-300 mt-9 flex flex-wrap gap-3">
          <Link
            className="rounded-full bg-[var(--lion-black)] px-6 py-3 text-sm font-black text-[color:var(--layer-white)] transition hover:-translate-y-1 hover:bg-[var(--primary-orange)]"
            to="/event"
          >
            이벤트 확인하기
          </Link>
          <Link
            className="rounded-full border border-[var(--lion-black)] bg-[var(--layer-white)] px-6 py-3 text-sm font-black transition hover:-translate-y-1 hover:bg-[var(--utility-yellow)]"
            to="/teams"
          >
            참가팀 둘러보기
          </Link>
        </div>
      </div>

      <EventTicket />

      <div className="home-schedule-wrap">
        <ExhibitionSchedule />
      </div>
    </section>
  )
}

export default HomePage
