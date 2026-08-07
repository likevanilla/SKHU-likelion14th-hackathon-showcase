import { NavLink, Outlet } from 'react-router-dom'
import likelionSkhuLogo from '../assets/likelionskhu.png'
import { navItems } from '../data/siteData'

function AppLayout() {
  return (
    <main className="min-h-screen overflow-hidden bg-[var(--base-grey)] text-[color:var(--lion-black)]">
      <section className="relative isolate min-h-screen overflow-hidden px-5 py-5 sm:px-8 lg:px-12">
        <div className="absolute inset-0 z-0">
          <div className="motion-grid h-full w-full" />
          <div className="spotlight spotlight-one" />
          <div className="spotlight spotlight-two" />
        </div>

        <nav className="fade-down relative z-10 mx-auto flex max-w-7xl flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <NavLink aria-label="소개 페이지로 이동" to="/">
            <img
              alt="LIKELION SKHU"
              className="h-14 w-auto object-contain sm:h-16"
              src={likelionSkhuLogo}
            />
          </NavLink>

          <div className="grid w-full grid-cols-3 rounded-full border-2 border-[var(--lion-black)] bg-[var(--layer-white)] p-1 sm:flex sm:w-auto">
            {navItems.map((item) => (
              <NavLink
                className={({ isActive }) =>
                  `spa-tab text-center ${isActive ? 'is-active' : ''}`
                }
                end={item.end}
                key={item.to}
                to={item.to}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>

        <div className="relative z-10 mx-auto max-w-7xl">
          <Outlet />
        </div>
      </section>
    </main>
  )
}

export default AppLayout
