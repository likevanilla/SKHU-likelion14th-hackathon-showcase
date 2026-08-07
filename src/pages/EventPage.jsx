import StrokeText from '../components/StrokeText'
import { eventCards, luckyDrawPrizes } from '../data/siteData'

function EventPage() {
  return (
    <section className="page-panel grid min-h-[calc(100vh-88px)] content-center gap-8 py-12 sm:py-16 lg:grid-cols-[0.8fr_1.2fr]">
      <div>
        <p
          className="text-sm font-black uppercase tracking-[0.2em] text-[color:var(--primary-orange)]"
          lang="en"
        >
          Booth Promotion
        </p>
        <h1 className="page-stroke-title page-stroke-title--event mt-3 font-black">
          <StrokeText
            className="page-stroke-line"
            drawDuration={1.1}
            fillColor="var(--lucky-green)"
            fillDelay={0.1}
            fontFamily="var(--font-title-ko)"
            fontSize={72}
            fontWeight={900}
            letterSpacing={-1}
            stagger={0.04}
            startDelay={0.42}
            strokeColor="var(--lucky-green)"
            strokeWidth={1.5}
            text="럭키드로우"
          />
          <span className="stroke-emoji stroke-emoji--event" aria-hidden="true">
            🍀
          </span>
          <StrokeText
            className="page-stroke-line"
            drawDuration={1.1}
            fillColor="var(--lion-black)"
            fillDelay={0.12}
            fontFamily="var(--font-title-ko)"
            fontSize={72}
            fontWeight={900}
            letterSpacing={-1}
            stagger={0.04}
            startDelay={0.48}
            strokeColor="var(--lion-black)"
            strokeWidth={1.5}
            text="이벤트"
          />
        </h1>
      </div>
      <div className="grid gap-4">
        <section className="event-guide-panel">
          {eventCards.map((card) => (
            <article className="event-guide-item" key={card.title}>
              <span className="event-guide-marker" />
              <div>
                <h2 className="text-xl font-black">{card.title}</h2>
                <p className="mt-2 text-sm font-medium leading-6">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </section>

        <section className="rounded-lg border-2 border-[var(--lion-black)] bg-[var(--lion-black)] p-5 text-[color:var(--layer-white)]">
          <p
            className="text-xs font-black uppercase tracking-[0.18em] text-[color:var(--utility-yellow)]"
            lang="en"
          >
            Lucky Draw Prizes
          </p>
          <h2 className="mt-2 text-2xl font-black">상품 안내</h2>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {luckyDrawPrizes.map((prize) => (
              <article
                className="prize-card"
                key={prize.name}
              >
                <div className="prize-image-frame">
                  {prize.imageSrc ? (
                    <img
                      alt={prize.imageAlt}
                      className="h-full w-full object-cover"
                      src={prize.imageSrc}
                    />
                  ) : (
                    <span className="prize-image-placeholder">
                      이미지
                    </span>
                  )}
                </div>
                <h3 className="prize-name">{prize.name}</h3>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  )
}

export default EventPage
