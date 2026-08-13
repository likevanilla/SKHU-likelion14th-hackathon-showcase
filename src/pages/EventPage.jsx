import { useEffect, useState } from 'react'
import StrokeText from '../components/StrokeText'
import { eventCards, luckyDrawPrizes } from '../data/siteData'

function EventPage() {
  const [selectedPrize, setSelectedPrize] = useState(null)

  useEffect(() => {
    if (!selectedPrize) return undefined

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setSelectedPrize(null)
      }
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [selectedPrize])

  return (
    <>
      <section className="event-page-layout page-panel grid min-h-[calc(100vh-88px)] content-center gap-8 py-12 sm:py-16 lg:grid-cols-[0.78fr_1.22fr]">
        <div>
          <p
            className="text-sm font-black uppercase tracking-[0.2em] text-[color:var(--primary-orange)]"
            lang="en"
          >
            Booth Promotion
          </p>
          <h1 className="page-stroke-title page-stroke-title--event mt-3 font-black">
            <span className="stroke-inline">
              <StrokeText
                className="page-stroke-line page-stroke-line--lucky"
                drawDuration={1.1}
                fillColor="var(--lucky-green)"
                fillDelay={0.1}
                fillMode="fade"
                fontFamily="var(--font-title-ko)"
                fontSize={72}
                fontWeight={900}
                letterSpacing={0}
                stagger={0.04}
                startDelay={0.42}
                strokeColor="var(--lucky-green)"
                strokeWidth={0.9}
                text="럭키드로우"
              />
              <span className="stroke-emoji stroke-emoji--event" aria-hidden="true">
                🍀
              </span>
            </span>
            <StrokeText
              className="page-stroke-line"
              drawDuration={1.1}
              fillColor="var(--lion-black)"
              fillDelay={0.12}
              fillMode="fade"
              fontFamily="var(--font-title-ko)"
              fontSize={72}
              fontWeight={900}
              letterSpacing={0}
              stagger={0.04}
              startDelay={0.48}
              strokeColor="var(--lion-black)"
              strokeWidth={0.9}
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

          <section className="event-prize-panel rounded-lg border-2 border-[var(--lion-black)] bg-[var(--lion-black)] p-5 text-[color:var(--layer-white)]">
            <p
              className="text-xs font-black uppercase tracking-[0.18em] text-[color:var(--utility-yellow)]"
              lang="en"
            >
              Lucky Draw Prizes
            </p>
            <h2 className="mt-2 text-2xl font-black">상품 안내</h2>
            <div className="event-prize-grid mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {luckyDrawPrizes.map((prize) => (
                <button
                  aria-label={`${prize.name} 상품 크게 보기`}
                  className="prize-card"
                  key={prize.name}
                  onClick={() => setSelectedPrize(prize)}
                  type="button"
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
                </button>
              ))}
            </div>
          </section>
        </div>
      </section>

      {selectedPrize && (
        <div
          aria-modal="true"
          className="prize-modal-backdrop"
          onClick={() => setSelectedPrize(null)}
          role="dialog"
        >
          <div
            className="prize-modal-panel modal-enter"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              aria-label="상품 큰 화면 닫기"
              className="prize-modal-close"
              onClick={() => setSelectedPrize(null)}
              type="button"
            >
              닫기
            </button>

            <div className="prize-modal-image">
              {selectedPrize.imageSrc ? (
                <img
                  alt={selectedPrize.imageAlt}
                  className="h-full w-full object-contain"
                  src={selectedPrize.imageSrc}
                />
              ) : (
                <div className="prize-modal-placeholder">
                  <span className="text-sm font-black uppercase tracking-[0.2em] text-[color:var(--primary-orange)]" lang="en">
                    Lucky Draw Prize
                  </span>
                  <span className="mt-3 text-4xl font-black sm:text-6xl">
                    {selectedPrize.name}
                  </span>
                  <span className="mt-4 text-sm font-bold">
                    이미지 준비 중
                  </span>
                </div>
              )}
            </div>

            <h2 className="mt-5 text-center text-2xl font-black sm:text-3xl">
              {selectedPrize.name}
            </h2>
          </div>
        </div>
      )}
    </>
  )
}

export default EventPage
