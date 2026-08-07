import { Link, Navigate, useParams } from 'react-router-dom'
import { detailLabels, teams } from '../data/siteData'

function TeamDetailPage() {
  const { teamId } = useParams()
  const selectedTeam = teams.find((team) => team.id === teamId)

  if (!selectedTeam) {
    return <Navigate replace to="/teams" />
  }

  return (
    <section className="page-panel grid min-h-[calc(100vh-88px)] content-center py-12 sm:py-16">
      <div className="w-full max-w-3xl rounded-[28px] border-2 border-[var(--lion-black)] bg-[var(--layer-white)] p-6 text-[color:var(--lion-black)] sm:p-8">
        <Link
          className="inline-flex rounded-full border-2 border-[var(--lion-black)] bg-[var(--base-grey)] px-4 py-2 text-sm font-black transition hover:-translate-y-1 hover:bg-[var(--utility-yellow)]"
          to="/teams"
        >
          서비스 소개로 돌아가기
        </Link>

        <div className="mt-8 flex items-start justify-between gap-6">
          <div>
            <p
              className="text-sm font-black uppercase tracking-[0.18em] text-[color:var(--primary-orange)]"
              lang="en"
            >
              Service Detail
            </p>
            <h1 className="mt-3 text-4xl font-black" lang="en">
              {selectedTeam.name}
            </h1>
          </div>
          <div className="grid size-16 place-items-center rounded-full border-2 border-[var(--lion-black)] bg-[var(--primary-orange)]">
            <span className="size-7 rounded-full bg-[var(--utility-yellow)]" />
          </div>
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
      </div>
    </section>
  )
}

export default TeamDetailPage
