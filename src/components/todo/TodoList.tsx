import type { Todo, TodoFilter } from '../../types/todo.ts'
import { TodoItem } from './TodoItem.tsx'

interface TodoListProps {
  activeFilter: TodoFilter
  hasTodos: boolean
  todos: Todo[]
  onDelete: (id: string) => void
  onToggle: (id: string) => void
  onUpdate: (id: string, title: string) => { ok: boolean; error?: string }
  searchQuery: string
}

export function TodoList({
  activeFilter,
  hasTodos,
  todos,
  onDelete,
  onToggle,
  onUpdate,
  searchQuery,
}: TodoListProps) {
  if (todos.length === 0) {
    const hasSearch = searchQuery.trim().length > 0
    const isFiltered = activeFilter !== 'all'

    return (
      <section className="rounded-4xl border border-dashed border-slate-200 bg-white/70 p-6 text-center shadow-[0_20px_60px_-48px_rgba(15,23,42,0.35)] backdrop-blur transition-colors duration-300 dark:border-white/10 dark:bg-slate-900/60 dark:shadow-[0_20px_60px_-48px_rgba(2,8,23,0.85)]">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400 dark:text-slate-500">
          {hasTodos ? 'No matches' : 'Empty state'}
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 transition-colors duration-300 dark:text-white">
          {hasTodos
            ? 'No tasks match your current view.'
            : 'Your list is ready for its first task.'}
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-slate-600 transition-colors duration-300 dark:text-slate-300">
          {hasTodos
            ? `Try ${
                hasSearch && isFiltered
                  ? 'changing the search text or switching filters'
                  : hasSearch
                    ? 'clearing the search text'
                    : 'switching filters'
              } to bring tasks back into view.`
            : 'Add a task above to start building momentum. You will be able to save everything locally in the next phases.'}
        </p>
      </section>
    )
  }

  return (
    <section className="rounded-4xl border border-white/70 bg-white/78 p-5 shadow-[0_28px_90px_-48px_rgba(15,23,42,0.45)] backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-slate-900/70 dark:shadow-[0_28px_90px_-48px_rgba(2,8,23,0.85)] md:p-6">
      <div className="flex flex-col gap-5">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400 dark:text-slate-500">
            Tasks
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950 transition-colors duration-300 dark:text-white">
            Stay focused on the tasks that matter right now.
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
