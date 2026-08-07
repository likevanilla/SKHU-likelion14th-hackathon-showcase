import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import AppLayout from './components/AppLayout'

const HomePage = lazy(() => import('./pages/HomePage'))
const EventPage = lazy(() => import('./pages/EventPage'))
const TeamsPage = lazy(() => import('./pages/TeamsPage'))
const TeamDetailPage = lazy(() => import('./pages/TeamDetailPage'))

function App() {
  return (
    <Suspense
      fallback={
        <div className="grid min-h-screen place-items-center bg-[var(--base-grey)] text-sm font-black text-[color:var(--lion-black)]">
          불러오는 중
        </div>
      }
    >
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route element={<EventPage />} path="event" />
          <Route element={<TeamsPage />} path="teams" />
          <Route element={<TeamDetailPage />} path="teams/:teamId" />
          <Route element={<Navigate replace to="/" />} path="*" />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
