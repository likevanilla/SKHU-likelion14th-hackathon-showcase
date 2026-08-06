import { useState } from 'react'
import StrokeText from './components/StrokeText'

const pages = [
  { id: 'intro', label: '소개' },
  { id: 'event', label: '이벤트' },
  { id: 'teams', label: '팀 소개' },
]

const teams = [
  {
    name: 'Team 1',
    tagline: '서비스 소개 준비 중',
    description: '문제 정의, 핵심 기능, 데모 링크를 연결할 자리입니다.',
  },
  {
    name: 'Team 2',
    tagline: '서비스 소개 준비 중',
    description: '팀별 컬러와 스크린샷은 추후 상세 소개 화면에서 확장할 수 있습니다.',
  },
  {
    name: 'Team 3',
    tagline: '서비스 소개 준비 중',
    description: '해커톤 당일 관람객이 빠르게 이해할 수 있는 요약을 넣을 예정입니다.',
  },
  {
    name: 'Team 4',
    tagline: '서비스 소개 준비 중',
    description: '문제, 솔루션, 사용 흐름을 카드 단위로 소개할 수 있습니다.',
  },
  {
    name: 'Team 5',
    tagline: '서비스 소개 준비 중',
    description: '서비스 링크와 발표 자료를 함께 보여줄 수 있습니다.',
  },
]

const boothSteps = ['부스 방문', '팀 서비스 체험', '인증 미션 완료']
const eventCards = ['참여 방법', '이벤트 혜택', '현장 안내']
const detailLabels = ['문제 정의', '핵심 기능', '데모 링크']
const fanCards = [
  {
    x: 'clamp(-220px, -26vw, -96px)',
    y: '38px',
    pullX: '-38px',
    pullY: '-84px',
    rotate: '-24deg',
    z: 1,
  },
  {
    x: 'clamp(-110px, -13vw, -48px)',
    y: '14px',
    pullX: '-20px',
    pullY: '-90px',
    rotate: '-12deg',
    z: 2,
  },
  {
    x: '0px',
    y: '0px',
    pullX: '0px',
    pullY: '-92px',
    rotate: '0deg',
    z: 3,
  },
  {
    x: 'clamp(48px, 13vw, 110px)',
    y: '14px',
    pullX: '20px',
    pullY: '-90px',
    rotate: '12deg',
    z: 4,
  },
  {
    x: 'clamp(96px, 26vw, 220px)',
    y: '38px',
    pullX: '38px',
    pullY: '-84px',
    rotate: '24deg',
    z: 5,
  },
]

function App() {
  const [activePage, setActivePage] = useState('intro')
  const [selectedTeam, setSelectedTeam] = useState(null)
  const [activeCard, setActiveCard] = useState(null)
  const [mobileTeamIndex, setMobileTeamIndex] = useState(0)
  const [outgoingMobileIndex, setOutgoingMobileIndex] = useState(null)
  const [mobileDirection, setMobileDirection] = useState('next')

  const mobileTeam = teams[mobileTeamIndex]
  const isMobileCardActive = activeCard === mobileTeamIndex

  const changeMobileTeam = (nextIndex, direction) => {
    if (nextIndex === mobileTeamIndex) return

    setActiveCard(null)
    setOutgoingMobileIndex(mobileTeamIndex)
    setMobileDirection(direction)
    setMobileTeamIndex(nextIndex)
  }

  const showPreviousTeam = () => {
    const nextIndex =
      mobileTeamIndex === 0 ? teams.length - 1 : mobileTeamIndex - 1
    changeMobileTeam(nextIndex, 'prev')
  }

  const showNextTeam = () => {
    const nextIndex =
      mobileTeamIndex === teams.length - 1 ? 0 : mobileTeamIndex + 1
    changeMobileTeam(nextIndex, 'next')
  }

  const showPage = (pageId) => {
    setActivePage(pageId)
    setActiveCard(null)
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[var(--base-grey)] text-[color:var(--lion-black)]">
      <section className="relative isolate min-h-screen overflow-hidden px-5 py-5 sm:px-8 lg:px-12">
        <div className="absolute inset-0 z-0">
          <div className="motion-grid h-full w-full" />
          <div className="spotlight spotlight-one" />
          <div className="spotlight spotlight-two" />
        </div>

        <nav className="fade-down relative z-10 mx-auto flex max-w-7xl flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <span className="whitespace-nowrap text-xs font-black uppercase tracking-[0.16em] sm:text-sm sm:tracking-[0.22em]" lang="en">
            LikeLion 14th
          </span>
          <div className="grid w-full grid-cols-3 rounded-full border-2 border-[var(--lion-black)] bg-[var(--layer-white)] p-1 sm:flex sm:w-auto">
            {pages.map((page) => (
              <button
                className={`spa-tab ${activePage === page.id ? 'is-active' : ''}`}
                key={page.id}
                onClick={() => showPage(page.id)}
                type="button"
              >
                {page.label}
              </button>
            ))}
          </div>
        </nav>

        <div className="relative z-10 mx-auto max-w-7xl">
          {activePage === 'intro' && (
            <section className="page-panel grid min-h-[calc(100vh-88px)] items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="max-w-3xl">
                <p
                  className="fade-up text-sm font-black uppercase tracking-[0.2em] text-[color:var(--primary-orange)]"
                  lang="en"
                >
                  Hackathon Booth Event
                </p>
                <h1 className="hero-stroke-title fade-up delay-100 mt-5 font-black">
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
                    strokeColor="var(--primary-orange)"
                    strokeWidth={1.6}
                    style={{ '--stroke-text-height': 'clamp(48px, 13vw, 124px)' }}
                    text="우리 학교 부스에서"
                  />
                  <StrokeText
                    className="hero-stroke-line"
                    drawDuration={1.2}
                    fillColor="var(--lion-black)"
                    fillDelay={0.14}
                    fontFamily="var(--font-title-ko)"
                    fontSize={96}
                    fontWeight={900}
                    letterSpacing={-1}
                    stagger={0.035}
                    strokeColor="var(--lion-black)"
                    strokeWidth={1.6}
                    style={{ '--stroke-text-height': 'clamp(48px, 13vw, 124px)' }}
                    text="만나요"
                  />
                </h1>
                <p className="fade-up delay-200 mt-6 max-w-2xl text-base font-medium leading-7 sm:text-xl sm:leading-8">
                  현장에서 참여할 수 있는 이벤트와 5개 팀의 서비스를 한 페이지에서
                  소개합니다. 상단 탭으로 부스 이벤트와 팀별 서비스를 빠르게
                  확인할 수 있습니다.
                </p>

                <div className="fade-up delay-300 mt-9 flex flex-wrap gap-3">
                  <button
                    className="rounded-full bg-[var(--lion-black)] px-6 py-3 text-sm font-black text-[color:var(--layer-white)] transition hover:-translate-y-1 hover:bg-[var(--primary-orange)]"
                    onClick={() => showPage('event')}
                    type="button"
                  >
                    이벤트 확인하기
                  </button>
                  <button
                    className="rounded-full border border-[var(--lion-black)] bg-[var(--layer-white)] px-6 py-3 text-sm font-black transition hover:-translate-y-1 hover:bg-[var(--utility-yellow)]"
                    onClick={() => showPage('teams')}
                    type="button"
                  >
                    참가팀 둘러보기
                  </button>
                </div>
              </div>

              <EventTicket />
            </section>
          )}

          {activePage === 'event' && (
            <section className="page-panel grid min-h-[calc(100vh-88px)] content-center gap-8 py-12 sm:py-16 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p
                  className="text-sm font-black uppercase tracking-[0.2em] text-[color:var(--primary-orange)]"
                  lang="en"
                >
                  Booth Promotion
                </p>
                <h1 className="mt-3 text-4xl font-black sm:text-6xl">
                  메인 홍보 영역
                </h1>
                <p className="mt-5 max-w-xl text-base font-medium leading-7">
                  해커톤 당일 부스에서 진행할 이벤트 정보를 가장 먼저 보여주는
                  화면입니다. 참여 방법, 혜택, 현장 안내를 한눈에 정리합니다.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {eventCards.map((title) => (
                  <article
                    className="group rounded-lg border-2 border-[var(--lion-black)] bg-[var(--layer-white)] p-5 transition duration-300 hover:-translate-y-2 hover:bg-[var(--utility-yellow)]"
                    key={title}
                  >
                    <h2 className="text-xl font-black">{title}</h2>
                    <p className="mt-4 text-sm font-medium leading-6">
                      구체적인 부스 이벤트 정보가 정해지면 이 영역에 바로 넣을 수
                      있습니다.
                    </p>
                    <span className="mt-6 block h-1 w-10 rounded-full bg-[var(--primary-orange)] transition group-hover:w-20" />
                  </article>
                ))}
              </div>
            </section>
          )}

          {activePage === 'teams' && (
            <section className="page-panel relative min-h-[calc(100vh-88px)] py-12 text-[color:var(--layer-white)] sm:py-16">
              <div className="relative z-10">
                <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                  <div>
                    <p
                      className="text-sm font-black uppercase tracking-[0.2em] text-[color:var(--utility-yellow)]"
                      lang="en"
                    >
                      Team Services
                    </p>
                    <h1 className="mt-3 text-3xl font-black sm:text-5xl">
                      5팀 서비스 소개
                    </h1>
                  </div>
                  <p className="max-w-xl text-sm font-medium leading-6">
                    모바일에서는 한 장씩 넘기는 카드 덱으로, 넓은 화면에서는
                    부채꼴 카드로 5개 팀 서비스를 소개합니다.
                  </p>
                </div>

                <TeamCards
                  activeCard={activeCard}
                  changeMobileTeam={changeMobileTeam}
                  isMobileCardActive={isMobileCardActive}
                  mobileDirection={mobileDirection}
                  mobileTeam={mobileTeam}
                  mobileTeamIndex={mobileTeamIndex}
                  outgoingMobileIndex={outgoingMobileIndex}
                  setActiveCard={setActiveCard}
                  setOutgoingMobileIndex={setOutgoingMobileIndex}
                  setSelectedTeam={setSelectedTeam}
                  showNextTeam={showNextTeam}
                  showPreviousTeam={showPreviousTeam}
                />
              </div>
            </section>
          )}
        </div>
      </section>

      {selectedTeam && (
        <TeamModal
          selectedTeam={selectedTeam}
          setSelectedTeam={setSelectedTeam}
        />
      )}
    </main>
  )
}

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
              부스 방문 인증 이벤트
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
            경품 / 진행 시간 / 장소
          </p>
          <p className="mt-2 text-2xl font-black">곧 업데이트 예정</p>
        </div>
      </div>
    </div>
  )
}

function TeamCards({
  activeCard,
  changeMobileTeam,
  isMobileCardActive,
  mobileDirection,
  mobileTeam,
  mobileTeamIndex,
  outgoingMobileIndex,
  setActiveCard,
  setOutgoingMobileIndex,
  setSelectedTeam,
  showNextTeam,
  showPreviousTeam,
}) {
  return (
    <>
      <div className="mobile-card-deck mt-12 sm:hidden">
        <div className="mobile-card-stage">
          {outgoingMobileIndex !== null && (
            <article
              className={`mobile-draw-card is-exiting is-${mobileDirection}`}
              onAnimationEnd={() => setOutgoingMobileIndex(null)}
            >
              <span className="card-corner">0{outgoingMobileIndex + 1}</span>
              <span className="card-suit" lang="en">LIKELION</span>
              <span className="card-mark" />
              <span className="mt-auto block">
                <span className="block text-3xl font-black" lang="en">
                  {teams[outgoingMobileIndex].name}
                </span>
                <span className="mt-3 block text-sm font-bold leading-6">
                  {teams[outgoingMobileIndex].tagline}
                </span>
                <span className="mt-5 inline-block rounded-full bg-[var(--primary-orange)] px-4 py-2 text-xs font-black text-[color:var(--layer-white)]">
                  자세히 보기
                </span>
              </span>
            </article>
          )}
          <article
            className={`mobile-draw-card is-entering is-${mobileDirection} ${
              isMobileCardActive ? 'is-active' : ''
            }`}
            key={mobileTeam.name}
            onClick={() => setActiveCard(isMobileCardActive ? null : mobileTeamIndex)}
          >
            <span className="card-corner">0{mobileTeamIndex + 1}</span>
            <span className="card-suit" lang="en">LIKELION</span>
            <span className="card-mark" />
            <span className="mt-auto block">
              <span className="block text-3xl font-black" lang="en">
                {mobileTeam.name}
              </span>
              <span className="mt-3 block text-sm font-bold leading-6">
                {mobileTeam.tagline}
              </span>
              <button
                className="mt-5 rounded-full bg-[var(--primary-orange)] px-4 py-2 text-xs font-black text-[color:var(--layer-white)]"
                onClick={(event) => {
                  event.stopPropagation()
                  setSelectedTeam(mobileTeam)
                }}
                type="button"
              >
                자세히 보기
              </button>
            </span>
          </article>
        </div>

        <div className="mt-6 flex items-center justify-between gap-3">
          <button className="mobile-nav-button" onClick={showPreviousTeam} type="button">
            이전
          </button>
          <div className="flex gap-2">
            {teams.map((team, index) => (
              <button
                aria-label={`${team.name} 보기`}
                className={`mobile-team-dot ${mobileTeamIndex === index ? 'is-selected' : ''}`}
                key={team.name}
                onClick={() =>
                  changeMobileTeam(
                    index,
                    index > mobileTeamIndex ? 'next' : 'prev',
                  )
                }
                type="button"
              />
            ))}
          </div>
          <button className="mobile-nav-button" onClick={showNextTeam} type="button">
            다음
          </button>
        </div>
      </div>

      <div className="fan-draw-stage mt-14 hidden sm:mt-16 sm:block">
        {teams.map((team, index) => {
          const position = fanCards[index]
          const isActive = activeCard === index

          return (
            <article
              className={`draw-card ${isActive ? 'is-active' : ''}`}
              key={team.name}
              onBlur={() => setActiveCard(null)}
              onClick={() => setActiveCard(isActive ? null : index)}
              onFocus={() => setActiveCard(index)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  setActiveCard(isActive ? null : index)
                }
              }}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
              role="button"
              style={{
                '--fan-x': position.x,
                '--fan-y': position.y,
                '--pull-x': position.pullX,
                '--pull-y': position.pullY,
                '--fan-rotate': position.rotate,
                '--fan-z': position.z,
              }}
              tabIndex={0}
            >
              <span className="card-corner">0{index + 1}</span>
              <span className="card-suit" lang="en">LIKELION</span>
              <span className="card-mark" />
              <span className="mt-auto block">
                <span className="block text-2xl font-black sm:text-3xl" lang="en">
                  {team.name}
                </span>
                <span className="mt-3 block text-sm font-bold leading-6">
                  {team.tagline}
                </span>
                <button
                  className="mt-5 rounded-full bg-[var(--primary-orange)] px-4 py-2 text-xs font-black text-[color:var(--layer-white)]"
                  onClick={(event) => {
                    event.stopPropagation()
                    setSelectedTeam(team)
                  }}
                  type="button"
                >
                  자세히 보기
                </button>
              </span>
            </article>
          )
        })}
      </div>
    </>
  )
}

function TeamModal({ selectedTeam, setSelectedTeam }) {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-[var(--lion-black)] px-5">
      <section className="modal-enter w-full max-w-2xl rounded-[28px] border-2 border-[var(--lion-black)] bg-[var(--layer-white)] p-6 text-[color:var(--lion-black)] sm:p-8">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p
              className="text-sm font-black uppercase tracking-[0.18em] text-[color:var(--primary-orange)]"
              lang="en"
            >
              Service Detail
            </p>
            <h2 className="mt-3 text-4xl font-black" lang="en">
              {selectedTeam.name}
            </h2>
          </div>
          <button
            className="grid size-11 place-items-center rounded-full border-2 border-[var(--lion-black)] text-xl font-black transition hover:rotate-90 hover:bg-[var(--primary-orange)] hover:text-[color:var(--layer-white)]"
            onClick={() => setSelectedTeam(null)}
            type="button"
          >
            x
          </button>
        </div>
        <p className="mt-8 text-lg font-medium leading-8">
          {selectedTeam.description}
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {detailLabels.map((label) => (
            <div
              className="rounded-lg border-2 border-[var(--lion-black)] bg-[var(--base-grey)] p-4"
              key={label}
            >
              <p className="text-sm font-black text-[color:var(--primary-orange)]">
                {label}
              </p>
              <p className="mt-2 text-sm font-medium">준비 중</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default App
