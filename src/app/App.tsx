import { AppShell } from '../components/layout/AppShell.tsx'
import { AppProviders } from './providers/AppProviders.tsx'

function App() {
  return (
    <AppProviders>
      <AppShell>
        <section className="rounded-[28px] border border-slate-200/70 bg-white/80 p-6 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.35)] backdrop-blur md:p-8">
          <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-blue-700">
            Phase 1
          </span>
          <h1 className="mt-5 max-w-xl text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
            The foundation for a polished React todo app is ready.
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
            The Vite starter has been removed, Tailwind is active, and the
            project now has a clean app structure prepared for the next phases:
            visual system, task state, filters, persistence, and testing.
          </p>
        </section>
      </AppShell>
    </AppProviders>
  )
}

export default App
