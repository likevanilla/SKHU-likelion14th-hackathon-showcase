import { Link, Navigate, useParams } from 'react-router-dom'
import likelionSkhuLogo from '../assets/logo.svg'
import { detailLabels, teams } from '../data/siteData'

function TeamDetailPage() {
  const { teamId } = useParams()
  const selectedTeam = teams.find((team) => team.id === teamId)

  if (!selectedTeam) {
    return <Navigate replace to="/teams" />
  }

  const detailSections =
    selectedTeam.detailSections ??
    detailLabels.map((label) => ({
      title: label,
      body: '준비 중',
    }))

  return (
    <section className="page-panel min-h-[calc(100vh-88px)] py-10 text-[color:var(--lion-black)] sm:py-14">
      <div className="service-detail-shell">
        <Link
          className="inline-flex w-fit rounded-full border-2 border-[var(--lion-black)] bg-[var(--layer-white)] px-4 py-2 text-sm font-black transition hover:-translate-y-1 hover:bg-[var(--utility-yellow)]"
          to="/teams"
        >
          서비스 소개로 돌아가기
        </Link>

        <header className="service-detail-hero mt-8">
          <div className="service-detail-copy">
            <p
              className="text-sm font-black uppercase tracking-[0.18em] text-[color:var(--primary-orange)]"
              lang="en"
            >
              Service Detail
            </p>
            <h1 className="mt-4 text-5xl font-black leading-none sm:text-6xl lg:text-7xl" lang="en">
              {selectedTeam.name}
            </h1>
            <p className="mt-5 max-w-3xl text-xl font-black leading-8 sm:text-2xl">
              {selectedTeam.tagline}
            </p>
            <p className="mt-6 max-w-4xl text-base font-medium leading-8 sm:text-lg">
              {selectedTeam.description}
            </p>
          </div>

          <div className="service-logo-lockup" aria-label={selectedTeam.logoAlt}>
            <div className="service-logo-frame">
              <img
                alt={selectedTeam.logoAlt}
                className="max-h-20 max-w-36 object-contain"
                src={selectedTeam.logoSrc ?? likelionSkhuLogo}
              />
            </div>
            <span className="text-xs font-black uppercase tracking-[0.22em]" lang="en">
              Logo
            </span>
          </div>
        </header>

        <figure className="service-image-band mt-10">
          {selectedTeam.imageSrc ? (
            <img
              alt={selectedTeam.imageAlt}
              className="h-full w-full object-cover"
              src={selectedTeam.imageSrc}
            />
          ) : (
            <div className="service-image-placeholder">
              <img
                alt=""
                aria-hidden="true"
                className="h-16 w-auto object-contain opacity-90 sm:h-20"
                src={likelionSkhuLogo}
              />
              <div>
                <p className="text-sm font-black uppercase tracking-[0.2em] text-[color:var(--primary-orange)]" lang="en">
                  Service Image
                </p>
                <p className="mt-2 text-2xl font-black sm:text-4xl">
                  대표 이미지 준비 중
                </p>
              </div>
            </div>
          )}
        </figure>

        <div className="service-content-flow mt-12">
          {detailSections.map((section, index) => (
            <section className="service-content-section" key={section.title}>
              <p className="service-section-order" lang="en">
                0{index + 1}
              </p>
              <div>
                <h2 className="text-2xl font-black sm:text-3xl">
                  {section.title}
                </h2>
                <p className="mt-4 whitespace-pre-line text-base font-medium leading-8 sm:text-lg sm:leading-9">
                  {section.body}
                </p>
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamDetailPage
