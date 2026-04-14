const previewTasks = [
  {
    id: '01',
    title: 'Refine onboarding hero copy for better clarity',
    detail: 'Draft review at 16:00',
    done: false,
    accent: 'border-l-emerald-400',
  },
  {
    id: '02',
    title: 'Prepare component test plan for task flows',
    detail: 'Coverage target: core interactions',
    done: false,
    accent: 'border-l-blue-400',
  },
  {
    id: '03',
    title: 'Collect inspiration for dark mode polish',
    detail: 'Marked complete earlier today',
    done: true,
    accent: 'border-l-slate-300',
  },
] as const

const previewFilters = ['All', 'Active', 'Completed'] as const

export function TodoWorkspacePreview() {
  return (
    <section className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_22rem]">
      <div className="space-y-6">
        <section className="rounded-[32px] border border-white/70 bg-white/80 p-5 shadow-[0_28px_90px_-48px_rgba(15,23,42,0.45)] backdrop-blur-xl md:p-6">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                  Capture
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                  Add what matters before it slips away.
                </h2>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-xs font-medium text-slate-500">
                <span className="h-2 w-2 rounded-full bg-amber-400" />
                Interaction shell only in this phase
              </div>
            </div>

            <div className="grid gap-3 md:grid-cols-[minmax(0,1fr)_auto]">
              <label className="space-y-2">
                <span className="text-sm font-medium text-slate-700">
                  New task
                </span>
                <div className="flex min-h-16 items-center rounded-[24px] border border-slate-200 bg-slate-50/80 px-5 text-sm text-slate-400 shadow-inner">
                  Write your next task here...
                </div>
              </label>
              <div className="flex items-end">
                <div className="inline-flex min-h-16 w-full items-center justify-center rounded-[24px] bg-slate-950 px-6 text-sm font-semibold text-white shadow-[0_18px_32px_-24px_rgba(15,23,42,0.9)] md:w-auto">
                  Add Task
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-[32px] border border-white/70 bg-white/78 p-5 shadow-[0_28px_90px_-48px_rgba(15,23,42,0.45)] backdrop-blur-xl md:p-6">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                  Overview
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                  A quick scan should tell you everything.
                </h2>
              </div>
              <div className="flex flex-wrap gap-2" aria-label="Filter preview">
                {previewFilters.map((filter, index) => (
                  <span
                    key={filter}
                    className={`inline-flex rounded-full px-4 py-2 text-sm font-medium ${
                      index === 0
                        ? 'bg-slate-950 text-white shadow-[0_12px_24px_-18px_rgba(15,23,42,0.8)]'
                        : 'border border-slate-200 bg-slate-50 text-slate-500'
                    }`}
                  >
                    {filter}
                  </span>
                ))}
              </div>
            </div>

            <label className="space-y-2">
              <span className="text-sm font-medium text-slate-700">
                Search tasks
              </span>
              <div className="flex min-h-14 items-center rounded-[20px] border border-slate-200 bg-white px-4 text-sm text-slate-400 shadow-sm">
                Search by title or keyword
              </div>
            </label>

            <div className="space-y-3">
              {previewTasks.map((task) => (
                <article
                  key={task.id}
                  className={`rounded-[24px] border border-slate-200/80 bg-white p-4 shadow-[0_20px_40px_-34px_rgba(15,23,42,0.4)] ${task.accent} border-l-[6px]`}
                >
                  <div className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className={`mt-1.5 h-5 w-5 rounded-full border-2 ${
                        task.done
                          ? 'border-slate-300 bg-slate-300'
                          : 'border-slate-300 bg-white'
                      }`}
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                        <div className="space-y-1">
                          <h3
                            className={`text-base font-semibold ${
                              task.done
                                ? 'text-slate-400 line-through'
                                : 'text-slate-900'
                            }`}
                          >
                            {task.title}
                          </h3>
                          <p className="text-sm text-slate-500">{task.detail}</p>
                        </div>
                        <div className="flex gap-2 text-xs font-medium">
                          <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-slate-500">
                            Edit
                          </span>
                          <span className="rounded-full border border-rose-200 bg-rose-50 px-3 py-1.5 text-rose-500">
                            Delete
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>

      <aside className="space-y-6">
        <section className="rounded-[32px] border border-white/70 bg-[linear-gradient(180deg,#0f172a_0%,#172554_100%)] p-5 text-white shadow-[0_28px_90px_-48px_rgba(15,23,42,0.8)] md:p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-200/70">
            Focus Snapshot
          </p>
          <div className="mt-5 grid gap-3">
            <div className="rounded-[24px] border border-white/10 bg-white/6 p-4">
              <p className="text-sm text-blue-100/70">Pending tasks</p>
              <p className="mt-2 text-4xl font-semibold tracking-tight">12</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-[24px] border border-white/10 bg-white/6 p-4">
                <p className="text-sm text-blue-100/70">Completed</p>
                <p className="mt-2 text-2xl font-semibold">5</p>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-white/6 p-4">
                <p className="text-sm text-blue-100/70">Search hits</p>
                <p className="mt-2 text-2xl font-semibold">3</p>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-[32px] border border-white/70 bg-white/80 p-5 shadow-[0_28px_90px_-48px_rgba(15,23,42,0.45)] backdrop-blur-xl md:p-6">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                Bulk Action
              </p>
              <h2 className="mt-2 text-xl font-semibold tracking-tight text-slate-950">
                Clear completed
              </h2>
            </div>
            <span className="rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-rose-500">
              Ready
            </span>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            This side panel reserves space for secondary actions and summary
            data, keeping the task list itself light and readable.
          </p>
          <div className="mt-5 rounded-[22px] border border-dashed border-slate-200 bg-slate-50/80 p-4 text-sm text-slate-500">
            The real behavior will connect in the next phases.
          </div>
        </section>
      </aside>
    </section>
  )
}
