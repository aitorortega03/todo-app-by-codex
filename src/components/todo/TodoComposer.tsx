import { useState } from 'react'
import type { ChangeEvent } from 'react'

interface TodoComposerProps {
  onAddTodo: (title: string) => { ok: boolean; error?: string }
}

export function TodoComposer({ onAddTodo }: TodoComposerProps) {
  const [draft, setDraft] = useState('')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const inputId = 'new-todo-title'
  const messageId = 'new-todo-feedback'

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const result = onAddTodo(draft)

    if (!result.ok) {
      setErrorMessage(result.error ?? 'Unable to add the task.')
      return
    }

    setDraft('')
    setErrorMessage(null)
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setDraft(event.target.value)

    if (errorMessage) {
      setErrorMessage(null)
    }
  }

  return (
    <section className="rounded-4xl border border-white/70 bg-white/80 p-5 shadow-[0_28px_90px_-48px_rgba(15,23,42,0.45)] backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-slate-900/70 dark:shadow-[0_28px_90px_-48px_rgba(2,8,23,0.85)] md:p-6">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400 dark:text-slate-500">
              Capture
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 transition-colors duration-300 dark:text-white md:text-3xl">
              Add what matters before it slips away.
            </h2>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-2 text-xs font-medium text-emerald-700 transition-colors duration-300 dark:bg-emerald-500/10 dark:text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Fast add is now active
          </div>
        </div>

        <form
          aria-describedby={messageId}
          className="grid gap-3 md:grid-cols-[minmax(0,1fr)_auto]"
          onSubmit={handleSubmit}
        >
          <label className="space-y-2" htmlFor={inputId}>
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
              New task
            </span>
            <input
              aria-describedby={messageId}
              aria-invalid={errorMessage ? 'true' : 'false'}
              className="min-h-16 w-full rounded-3xl border border-slate-200 bg-slate-50/80 px-5 text-sm text-slate-900 shadow-inner transition-colors placeholder:text-slate-400 focus:border-blue-300 dark:border-white/10 dark:bg-slate-950/40 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-sky-400"
              id={inputId}
              name="todo-title"
              onChange={handleChange}
              placeholder="Write your next task here..."
              value={draft}
            />
          </label>
          <div className="flex items-end">
            <button
              className="inline-flex min-h-16 w-full items-center justify-center rounded-3xl bg-slate-950 px-6 text-sm font-semibold text-white shadow-[0_18px_32px_-24px_rgba(15,23,42,0.9)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-slate-800 disabled:translate-y-0 disabled:cursor-not-allowed disabled:bg-slate-300 dark:bg-sky-400 dark:text-slate-950 dark:hover:bg-sky-300 dark:disabled:bg-slate-700 dark:disabled:text-slate-400 md:w-auto"
              disabled={draft.trim().length === 0}
              type="submit"
            >
              Add Task
            </button>
          </div>
        </form>

        <p
          aria-live="polite"
          id={messageId}
          className={`min-h-6 text-sm ${errorMessage ? 'text-rose-600 dark:text-rose-400' : 'text-slate-400 dark:text-slate-500'}`}
          role={errorMessage ? 'alert' : undefined}
        >
          {errorMessage ??
            'Press Enter to add quickly, or use the button on the right.'}
        </p>
      </div>
    </section>
  )
}
