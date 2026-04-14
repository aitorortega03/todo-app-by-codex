import type { Todo } from '../../types/todo.ts'
import { TodoItem } from './TodoItem.tsx'

interface TodoListProps {
  todos: Todo[]
  onDelete: (id: string) => void
  onToggle: (id: string) => void
  onUpdate: (id: string, title: string) => { ok: boolean; error?: string }
}

export function TodoList({
  todos,
  onDelete,
  onToggle,
  onUpdate,
}: TodoListProps) {
  if (todos.length === 0) {
    return (
      <section className="rounded-[32px] border border-dashed border-slate-200 bg-white/70 p-6 text-center shadow-[0_20px_60px_-48px_rgba(15,23,42,0.35)] backdrop-blur">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
          Empty state
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
          Your list is ready for its first task.
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-slate-600">
          Add a task above to start building momentum. You will be able to
          filter, search, and save everything locally in the next phases.
        </p>
      </section>
    )
  }

  return (
    <section className="rounded-[32px] border border-white/70 bg-white/78 p-5 shadow-[0_28px_90px_-48px_rgba(15,23,42,0.45)] backdrop-blur-xl md:p-6">
      <div className="flex flex-col gap-5">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
            Tasks
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
            Edit inline, complete quickly, and keep the list tidy.
          </h2>
        </div>

        <ul className="space-y-3">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              onDelete={onDelete}
              onToggle={onToggle}
              onUpdate={onUpdate}
              todo={todo}
            />
          ))}
        </ul>
      </div>
    </section>
  )
}
