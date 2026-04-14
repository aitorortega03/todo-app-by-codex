import type { PropsWithChildren } from 'react'

export function AppShell({ children }: PropsWithChildren) {
  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-8 text-slate-900 md:px-6 md:py-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-[34rem] max-w-6xl rounded-b-[3rem] bg-[radial-gradient(circle_at_top,rgba(77,124,255,0.18),transparent_55%)]"
      />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <header className="flex flex-col gap-6 rounded-[32px] border border-white/65 bg-white/72 px-5 py-5 shadow-[0_32px_90px_-48px_rgba(15,23,42,0.45)] backdrop-blur-xl md:px-8 md:py-7">
          <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/85 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-slate-500 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Modern Todo App
              </div>
              <div className="space-y-3">
                <h1 className="max-w-3xl text-balance text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
                  Your day, clearly under control.
                </h1>
                <p className="max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
                  A calm, structured workspace for capturing tasks, spotting
                  priorities fast, and keeping momentum without visual noise.
                </p>
              </div>
            </div>
            <div className="rounded-[28px] border border-slate-200/80 bg-slate-950 px-4 py-4 text-white shadow-[0_18px_50px_-30px_rgba(15,23,42,0.8)] md:max-w-[17rem]">
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-slate-400">
                Theme Preview
              </p>
              <div
                aria-label="Theme selector preview"
                className="mt-4 inline-flex rounded-full border border-white/10 bg-white/5 p-1"
                role="group"
              >
                <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-950 shadow-sm">
                  Light
                </span>
                <span className="rounded-full px-4 py-2 text-xs font-semibold text-slate-400">
                  Dark
                </span>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-300">
                The real theme toggle and persistence will arrive in a later
                phase. This slot locks the visual hierarchy now.
              </p>
            </div>
          </div>
        </header>
        {children}
      </div>
    </main>
  )
}
