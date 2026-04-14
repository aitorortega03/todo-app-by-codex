import type { PropsWithChildren } from 'react'
import { useTheme } from '../../hooks/useTheme.tsx'

export function AppShell({ children }: PropsWithChildren) {
  const { setTheme, theme, toggleTheme } = useTheme()

  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-8 text-slate-900 transition-colors duration-300 dark:text-slate-100 md:px-6 md:py-12">
      <a
        className="absolute left-4 top-4 z-20 -translate-y-20 rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition-transform focus:translate-y-0 dark:bg-sky-400 dark:text-slate-950"
        href="#todo-workspace"
      >
        Skip to tasks
      </a>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-136 max-w-6xl rounded-b-[3rem] bg-[radial-gradient(circle_at_top,rgba(77,124,255,0.18),transparent_55%)] dark:bg-[radial-gradient(circle_at_top,rgba(96,165,250,0.24),transparent_58%)]"
      />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <header className="flex flex-col gap-6 rounded-4xl border border-white/65 bg-white/72 px-5 py-5 shadow-[0_32px_90px_-48px_rgba(15,23,42,0.45)] backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-slate-900/70 dark:shadow-[0_32px_90px_-48px_rgba(2,8,23,0.9)] md:px-8 md:py-7">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/85 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-slate-500 shadow-sm transition-colors duration-300 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Modern Todo App
              </div>
              <div className="space-y-3">
                <h1 className="max-w-3xl text-balance text-4xl font-semibold tracking-tight text-slate-950 transition-colors duration-300 dark:text-white md:text-6xl">
                  Your day, clearly under control.
                </h1>
                <p className="max-w-2xl text-sm leading-7 text-slate-600 transition-colors duration-300 dark:text-slate-300 md:text-base">
                  A calm, structured workspace for capturing tasks, spotting
                  priorities fast, and keeping momentum without visual noise.
                </p>
              </div>
            </div>
            <div className="rounded-[28px] border border-slate-200/80 bg-slate-950 px-4 py-4 text-white shadow-[0_18px_50px_-30px_rgba(15,23,42,0.8)] transition-colors duration-300 dark:border-white/10 dark:bg-slate-950/80 lg:max-w-[18rem]">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.24em] text-slate-400">
                    Theme
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Switch between a bright workspace and a darker late-night
                    focus mode. Your preference is saved locally.
                  </p>
                </div>
                <button
                  aria-label="Toggle color theme"
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-200 transition-colors hover:bg-white/10"
                  onClick={toggleTheme}
                  type="button"
                >
                  Toggle
                </button>
              </div>
              <p className="mt-5 text-xs font-medium uppercase tracking-[0.24em] text-slate-400">
                Current mode
              </p>
              <div
                aria-label="Theme selector"
                className="mt-4 inline-flex rounded-full border border-white/10 bg-white/5 p-1"
                role="radiogroup"
              >
                <button
                  aria-pressed={theme === 'light'}
                  aria-label="Use light theme"
                  role="radio"
                  className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
                    theme === 'light'
                      ? 'bg-white text-slate-950 shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                  onClick={() => setTheme('light')}
                  type="button"
                >
                  Light
                </button>
                <button
                  aria-pressed={theme === 'dark'}
                  aria-label="Use dark theme"
                  role="radio"
                  className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
                    theme === 'dark'
                      ? 'bg-white text-slate-950 shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                  onClick={() => setTheme('dark')}
                  type="button"
                >
                  Dark
                </button>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-300">
                Responsive spacing and smoother contrast now adapt around the
                chosen theme.
              </p>
            </div>
          </div>
        </header>
        {children}
      </div>
    </main>
  )
}
