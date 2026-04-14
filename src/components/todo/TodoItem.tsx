import { useEffect, useRef, useState } from 'react'
import type { KeyboardEvent } from 'react'
import type { Todo } from '../../types/todo.ts'

interface TodoItemProps {
  todo: Todo
  onDelete: (id: string) => void
  onToggle: (id: string) => void
  onUpdate: (id: string, title: string) => { ok: boolean; error?: string }
}

export function TodoItem({
  todo,
  onDelete,
  onToggle,
  onUpdate,
}: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [draft, setDraft] = useState(todo.title)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isEditing) {
      inputRef.current?.focus()
      inputRef.current?.select()
    }
  }, [isEditing])

  function handleStartEditing() {
    setDraft(todo.title)
    setErrorMessage(null)
    setIsEditing(true)
  }

  function handleSave() {
    const result = onUpdate(todo.id, draft)

    if (!result.ok) {
      setErrorMessage(result.error ?? 'Unable to save the task.')
      return
    }

    setIsEditing(false)
  }

  function handleCancel() {
    setDraft(todo.title)
    setErrorMessage(null)
    setIsEditing(false)
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      event.preventDefault()
      handleSave()
    }

    if (event.key === 'Escape') {
      event.preventDefault()
      handleCancel()
    }
  }

  return (
    <li>
      <article className="rounded-[24px] border border-slate-200/80 bg-white p-4 shadow-[0_20px_40px_-34px_rgba(15,23,42,0.4)] transition-transform duration-200 hover:-translate-y-0.5">
        <div className="flex items-start gap-3">
          <button
            aria-label={
              todo.completed
                ? `Mark ${todo.title} as pending`
                : `Mark ${todo.title} as completed`
            }
            className={`mt-1.5 h-5 w-5 rounded-full border-2 transition-colors ${
              todo.completed
                ? 'border-emerald-500 bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.15)]'
                : 'border-slate-300 bg-white hover:border-slate-400'
            }`}
            onClick={() => onToggle(todo.id)}
            type="button"
          >
            <span className="sr-only">
              {todo.completed ? 'Completed task' : 'Pending task'}
            </span>
          </button>

          <div className="min-w-0 flex-1">
            {isEditing ? (
              <div className="space-y-3">
                <label className="block space-y-2">
                  <span className="text-sm font-medium text-slate-700">
                    Edit task
                  </span>
                  <input
                    aria-invalid={errorMessage ? 'true' : 'false'}
                    className="min-h-12 w-full rounded-[18px] border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 focus:border-blue-300"
                    onChange={(event) => {
                      setDraft(event.target.value)

                      if (errorMessage) {
                        setErrorMessage(null)
                      }
                    }}
                    onKeyDown={handleKeyDown}
                    ref={inputRef}
                    value={draft}
                  />
                </label>
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    className="rounded-full bg-slate-950 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-slate-800"
                    onClick={handleSave}
                    type="button"
                  >
                    Save
                  </button>
                  <button
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-600 transition-colors hover:bg-slate-50"
                    onClick={handleCancel}
                    type="button"
                  >
                    Cancel
                  </button>
                  <p
                    aria-live="polite"
                    className={`text-xs ${errorMessage ? 'text-rose-600' : 'text-slate-400'}`}
                    role={errorMessage ? 'alert' : undefined}
                  >
                    {errorMessage ?? 'Press Enter to save or Escape to cancel.'}
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div className="space-y-1">
                  <h3
                    className={`text-base font-semibold transition-colors ${
                      todo.completed
                        ? 'text-slate-400 line-through'
                        : 'text-slate-900'
                    }`}
                  >
                    {todo.title}
                  </h3>
                  <p className="text-sm text-slate-500">
                    {todo.completed
                      ? 'Completed just now. You can reopen it any time.'
                      : 'Open task ready for your next action.'}
                  </p>
                </div>
                <div className="flex gap-2 text-xs font-medium">
                  <button
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-slate-600 transition-colors hover:bg-slate-100"
                    onClick={handleStartEditing}
                    type="button"
                  >
                    Edit
                  </button>
                  <button
                    className="rounded-full border border-rose-200 bg-rose-50 px-3 py-1.5 text-rose-600 transition-colors hover:bg-rose-100"
                    onClick={() => onDelete(todo.id)}
                    type="button"
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </article>
    </li>
  )
}
