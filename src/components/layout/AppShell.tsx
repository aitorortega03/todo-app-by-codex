import type { PropsWithChildren } from 'react'

export function AppShell({ children }: PropsWithChildren) {
  return (
    <main className="min-h-screen px-4 py-10 text-slate-900 md:px-6 md:py-14">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <header className="space-y-3">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-slate-500">
            Modern Todo App
          </p>
          <div className="space-y-3">
            <h2 className="text-balance text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              Clean structure first, product experience next.
            </h2>
            <p className="max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
              This phase only prepares the project foundation so we can build
              the real task experience in controlled steps.
            </p>
          </div>
        </header>
        {children}
      </div>
    </main>
  )
}
