import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { fanCards, teams } from '../data/siteData'

function TeamCards() {
  const navigate = useNavigate()
  const [activeCard, setActiveCard] = useState(null)
  const [mobileTeamIndex, setMobileTeamIndex] = useState(0)
  const [outgoingMobileIndex, setOutgoingMobileIndex] = useState(null)
  const [mobileDirection, setMobileDirection] = useState('next')

  const mobileTeam = teams[mobileTeamIndex]

  const openTeam = (team) => {
    navigate(`/teams/${team.id}`)
  }

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
            className={`mobile-draw-card is-entering is-${mobileDirection}`}
            key={mobileTeam.name}
            onClick={() => openTeam(mobileTeam)}
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
                  openTeam(mobileTeam)
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
              onClick={() => openTeam(team)}
              onFocus={() => setActiveCard(index)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  openTeam(team)
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
              </span>
            </article>
          )
        })}
      </div>
    </>
  )
}

export default TeamCards
