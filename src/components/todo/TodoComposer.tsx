import { useState } from 'react'
import type { ChangeEvent } from 'react'

interface TodoComposerProps {
  onAddTodo: (title: string) => { ok: boolean; error?: string }
}

export function TodoComposer({ onAddTodo }: TodoComposerProps) {
  const [draft, setDraft] = useState('')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

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
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-2 text-xs font-medium text-emerald-700">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Fast add is now active
          </div>
        </div>

        <form
          className="grid gap-3 md:grid-cols-[minmax(0,1fr)_auto]"
          onSubmit={handleSubmit}
        >
          <label className="space-y-2">
            <span className="text-sm font-medium text-slate-700">New task</span>
            <input
              aria-invalid={errorMessage ? 'true' : 'false'}
              className="min-h-16 w-full rounded-[24px] border border-slate-200 bg-slate-50/80 px-5 text-sm text-slate-900 shadow-inner transition-colors placeholder:text-slate-400 focus:border-blue-300"
              name="todo-title"
              onChange={handleChange}
              placeholder="Write your next task here..."
              value={draft}
            />
          </label>
          <div className="flex items-end">
            <button
              className="inline-flex min-h-16 w-full items-center justify-center rounded-[24px] bg-slate-950 px-6 text-sm font-semibold text-white shadow-[0_18px_32px_-24px_rgba(15,23,42,0.9)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-slate-800 disabled:translate-y-0 disabled:cursor-not-allowed disabled:bg-slate-300 md:w-auto"
              disabled={draft.trim().length === 0}
              type="submit"
            >
              Add Task
            </button>
          </div>
        </form>

        <p
          aria-live="polite"
          className={`min-h-6 text-sm ${errorMessage ? 'text-rose-600' : 'text-slate-400'}`}
          role={errorMessage ? 'alert' : undefined}
        >
          {errorMessage ??
            'Press Enter to add quickly, or use the button on the right.'}
        </p>
      </div>
    </section>
  )
}
