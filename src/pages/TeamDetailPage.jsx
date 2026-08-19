import { Link, Navigate, useParams } from 'react-router-dom'
import likelionSkhuLogo from '../assets/logo.svg'
import { detailLabels, teams } from '../data/siteData'

const urlPattern = /^https?:\/\/\S+$/
const bulletPattern = /^-\s+/

function renderTextBlock(text, key) {
  const [title, ...bodyLines] = text.replace(bulletPattern, '').split('\n')
  const body = bodyLines.join('\n').trim()

  if (bulletPattern.test(text)) {
    return (
      <li className="service-detail-list-item" key={key}>
        <strong>{title}</strong>
        {body && <p>{body}</p>}
      </li>
    )
  }

  return (
    <p className="service-detail-paragraph" key={key}>
      {text}
    </p>
  )
}

function DetailSectionBody({ section }) {
  const body = section.body.trim()

  if (urlPattern.test(body)) {
    return (
      <a
        className="service-detail-link mt-4"
        href={body}
        rel="noreferrer"
        target="_blank"
      >
        {body}
      </a>
    )
  }

  const blocks = body.split(/\n\s*\n/).filter(Boolean)
  const hasBulletList = blocks.some((block) => bulletPattern.test(block))

  if (hasBulletList) {
    return (
      <ul className="service-detail-list mt-4">
        {blocks.map((block, index) => renderTextBlock(block, index))}
      </ul>
    )
  }

  return (
    <div className="mt-4">
      {blocks.map((block, index) => renderTextBlock(block, index))}
    </div>
  )
}

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
  const serviceImages =
    selectedTeam.imageGallery ??
    (selectedTeam.imageSrc
      ? [
          {
            src: selectedTeam.imageSrc,
            alt: selectedTeam.imageAlt,
            orientation: selectedTeam.imageOrientation,
          },
        ]
      : [])

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
            <div className="service-title-lockup mt-4">
              <h1 className="text-5xl font-black leading-none sm:text-6xl lg:text-7xl" lang="en">
                {selectedTeam.name}
              </h1>
              <div className="service-logo-lockup" aria-label={selectedTeam.logoAlt}>
                <div className="service-logo-frame">
                  <img
                    alt={selectedTeam.logoAlt}
                    className="service-logo-image"
                    decoding="async"
                    loading="lazy"
                    src={selectedTeam.logoSrc ?? likelionSkhuLogo}
                  />
                </div>
              </div>
            </div>
            <p className="mt-5 max-w-3xl text-xl font-black leading-8 sm:text-2xl">
              {selectedTeam.tagline}
            </p>
            <p className="mt-6 max-w-4xl text-base font-medium leading-8 sm:text-lg">
              {selectedTeam.description}
            </p>
          </div>

        </header>

        <figure
          className={`service-image-gallery mt-10 ${
            serviceImages.length > 0 ? 'has-images' : ''
          }`}
        >
          {serviceImages.length > 0 ? (
            serviceImages.map((image) => (
              <div
                className={`service-image-band has-service-image ${
                  image.orientation === 'wide' ? 'is-wide' : ''
                }`}
                key={image.src}
              >
                <img
                  alt={image.alt}
                  className="service-image"
                  decoding="async"
                  loading="lazy"
                  src={image.src}
                />
              </div>
            ))
          ) : (
            <div className="service-image-band">
              <div className="service-image-placeholder">
                <img
                  alt=""
                  aria-hidden="true"
                  className="h-16 w-auto object-contain opacity-90 sm:h-20"
                  decoding="async"
                  loading="lazy"
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
                <DetailSectionBody section={section} />
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamDetailPage
