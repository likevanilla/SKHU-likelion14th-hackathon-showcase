import { useState } from 'react'

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

  return (
    <main className="min-h-screen overflow-hidden bg-[var(--base-grey)] text-[color:var(--lion-black)]">
      <section className="relative px-5 py-5 sm:px-8 lg:min-h-screen lg:px-12">
        <div className="absolute inset-0 -z-10">
          <div className="motion-grid h-full w-full" />
          <div className="spotlight spotlight-one" />
          <div className="spotlight spotlight-two" />
        </div>

        <nav className="fade-down mx-auto flex max-w-7xl items-center justify-between">
          <span className="text-sm font-black uppercase tracking-[0.22em]" lang="en">
            LikeLion 14th
          </span>
          <a
            className="rounded-full border border-[var(--lion-black)] bg-[var(--layer-white)] px-4 py-2 text-sm font-bold transition hover:-translate-y-0.5 hover:bg-[var(--primary-orange)] hover:text-[color:var(--layer-white)]"
            href="#teams"
          >
            5팀 서비스 보기
          </a>
        </nav>

        <div className="mx-auto grid max-w-7xl items-center gap-10 py-12 sm:py-16 lg:min-h-[calc(100vh-80px)] lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-3xl">
            <p
              className="fade-up text-sm font-black uppercase tracking-[0.2em] text-[color:var(--primary-orange)]"
              lang="en"
            >
              Hackathon Booth Event
            </p>
            <h1 className="fade-up delay-100 mt-5 text-4xl font-black leading-[1.02] sm:text-6xl lg:text-8xl">
              해커톤 당일,
              <span className="block text-[color:var(--primary-orange)]">
                우리 학교 부스에서
              </span>
              만나요
            </h1>
            <p className="fade-up delay-200 mt-6 max-w-2xl text-base font-medium leading-7 sm:text-xl sm:leading-8">
              현장에서 참여할 수 있는 이벤트와 5개 팀의 서비스를 한 페이지에서
              소개합니다. 메인에서는 부스 이벤트를 먼저 알리고, 팀별 서비스는
              카드로 눌러 자세히 볼 수 있게 구성했습니다.
            </p>

            <div className="fade-up delay-300 mt-9 flex flex-wrap gap-3">
              <a
                className="rounded-full bg-[var(--lion-black)] px-6 py-3 text-sm font-black text-[color:var(--layer-white)] transition hover:-translate-y-1 hover:bg-[var(--primary-orange)]"
                href="#event"
              >
                이벤트 확인하기
              </a>
              <a
                className="rounded-full border border-[var(--lion-black)] bg-[var(--layer-white)] px-6 py-3 text-sm font-black transition hover:-translate-y-1 hover:bg-[var(--utility-yellow)]"
                href="#teams"
              >
                참가팀 둘러보기
              </a>
            </div>
          </div>

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
                <span
                  className="pulse-badge rounded-full bg-[var(--utility-yellow)] px-4 py-2 text-sm font-black"
                  lang="en"
                >
                  D-Day
                </span>
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
        </div>
      </section>

      <section
        className="border-y-2 border-[var(--lion-black)] bg-[var(--layer-white)] px-5 py-14 sm:px-8 sm:py-16 lg:px-12"
        id="event"
      >
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p
              className="text-sm font-black uppercase tracking-[0.2em] text-[color:var(--primary-orange)]"
              lang="en"
            >
              Booth Promotion
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">메인 홍보 영역</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {eventCards.map((title) => (
              <article
                className="group rounded-lg border-2 border-[var(--lion-black)] bg-[var(--base-grey)] p-5 transition duration-300 hover:-translate-y-2 hover:bg-[var(--utility-yellow)]"
                key={title}
              >
                <h3 className="text-xl font-black">{title}</h3>
                <p className="mt-4 text-sm font-medium leading-6">
                  구체적인 부스 이벤트 정보가 정해지면 이 영역에 바로 넣을 수
                  있습니다.
                </p>
                <span className="mt-6 block h-1 w-10 rounded-full bg-[var(--primary-orange)] transition group-hover:w-20" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="bg-[var(--lion-black)] px-5 py-16 text-[color:var(--layer-white)] sm:px-8 sm:py-20 lg:px-12"
        id="teams"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p
                className="text-sm font-black uppercase tracking-[0.2em] text-[color:var(--utility-yellow)]"
                lang="en"
              >
                Team Services
              </p>
              <h2 className="mt-3 text-3xl font-black sm:text-4xl">5팀 서비스 소개</h2>
            </div>
            <p className="max-w-xl text-sm font-medium leading-6">
              카드가 부채꼴로 펼쳐져 있다가 hover 또는 탭하면 선택한 카드가
              위로 뽑혀 올라옵니다.
            </p>
          </div>

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
                    <span className="block text-3xl font-black">
                      <span lang="en">{teams[outgoingMobileIndex].name}</span>
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
              <button
                className="mobile-nav-button"
                onClick={showPreviousTeam}
                type="button"
              >
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
              <button
                className="mobile-nav-button"
                onClick={showNextTeam}
                type="button"
              >
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
                    <span className="block text-2xl font-black sm:text-3xl">
                      <span lang="en">{team.name}</span>
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
        </div>
      </section>

      {selectedTeam && (
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
                <h2 className="mt-3 text-4xl font-black">
                  <span lang="en">{selectedTeam.name}</span>
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
      )}
    </main>
  )
}

export default App
