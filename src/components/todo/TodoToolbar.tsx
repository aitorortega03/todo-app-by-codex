import type { ChangeEvent } from 'react'
import type { TodoFilter } from '../../types/todo.ts'

const filterOptions: Array<{ value: TodoFilter; label: string }> = [
  { value: 'all', label: 'All' },
  { value: 'active', label: 'Active' },
  { value: 'completed', label: 'Completed' },
]

interface TodoToolbarProps {
  activeFilter: TodoFilter
  completedCount: number
  onClearCompleted: () => void
  onFilterChange: (filter: TodoFilter) => void
  onSearchChange: (value: string) => void
  pendingCount: number
  searchQuery: string
  visibleCount: number
}

export function TodoToolbar({
  activeFilter,
  completedCount,
  onClearCompleted,
  onFilterChange,
  onSearchChange,
  pendingCount,
  searchQuery,
  visibleCount,
}: TodoToolbarProps) {
  function handleSearchChange(event: ChangeEvent<HTMLInputElement>) {
    onSearchChange(event.target.value)
  }

  return (
    <section className="rounded-4xl border border-white/70 bg-white/78 p-5 shadow-[0_28px_90px_-48px_rgba(15,23,42,0.45)] backdrop-blur-xl md:p-6">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
              Organize
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
              Filter fast, search quickly, and keep the next step visible.
            </h2>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-xs font-medium text-slate-600">
            <span className="h-2 w-2 rounded-full bg-blue-500" />
            {pendingCount} pending
          </div>
        </div>

        <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_auto]">
          <label className="space-y-2">
            <span className="text-sm font-medium text-slate-700">
              Search tasks
            </span>
            <input
              className="min-h-14 w-full rounded-[20px] border border-slate-200 bg-white px-4 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-blue-300"
              onChange={handleSearchChange}
              placeholder="Search by title or keyword"
              value={searchQuery}
            />
          </label>

          <div className="flex flex-col gap-2 xl:items-end xl:justify-end">
            <span className="text-sm font-medium text-slate-700">Filter</span>
            <div
              aria-label="Task filters"
              className="flex flex-wrap gap-2"
              role="group"
            >
              {filterOptions.map((option) => (
                <button
                  aria-pressed={activeFilter === option.value}
                  className={`inline-flex rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    activeFilter === option.value
                      ? 'bg-slate-950 text-white shadow-[0_12px_24px_-18px_rgba(15,23,42,0.8)]'
                      : 'border border-slate-200 bg-slate-50 text-slate-500 hover:bg-slate-100'
                  }`}
                  key={option.value}
                  onClick={() => onFilterChange(option.value)}
                  type="button"
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 rounded-3xl border border-slate-200/80 bg-slate-50/80 p-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-3 text-sm text-slate-600">
            <span className="rounded-full bg-white px-3 py-1.5 shadow-sm">
              Showing {visibleCount} task{visibleCount === 1 ? '' : 's'}
            </span>
            <span className="rounded-full bg-white px-3 py-1.5 shadow-sm">
              {completedCount} completed
            </span>
          </div>
          <button
            className="inline-flex items-center justify-center rounded-full border border-rose-200 bg-rose-50 px-4 py-2 text-sm font-semibold text-rose-600 transition-colors hover:bg-rose-100 disabled:cursor-not-allowed disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400"
            disabled={completedCount === 0}
            onClick={onClearCompleted}
            type="button"
          >
            Clear completed
          </button>
        </div>
      </div>
    </section>
  )
}
