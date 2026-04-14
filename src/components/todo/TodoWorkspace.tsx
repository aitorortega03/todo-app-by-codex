import { useState } from 'react'
import { useTodos } from '../../hooks/useTodos.ts'
import {
  getVisibleTodos,
} from '../../lib/todos.ts'
import type { TodoFilter } from '../../types/todo.ts'
import { TodoComposer } from './TodoComposer.tsx'
import { TodoList } from './TodoList.tsx'
import { TodoToolbar } from './TodoToolbar.tsx'

export function TodoWorkspace() {
  const [activeFilter, setActiveFilter] = useState<TodoFilter>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const {
    todos,
    pendingCount,
    completedCount,
    addTodo,
    clearCompleted,
    editTodo,
    completeTodo,
    removeTodo,
  } = useTodos()
  const visibleTodos = getVisibleTodos(todos, activeFilter, searchQuery)

  return (
    <section className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_22rem]">
      <div className="space-y-6">
        <TodoComposer onAddTodo={addTodo} />
        <TodoToolbar
          activeFilter={activeFilter}
          completedCount={completedCount}
          onClearCompleted={clearCompleted}
          onFilterChange={setActiveFilter}
          onSearchChange={setSearchQuery}
          pendingCount={pendingCount}
          searchQuery={searchQuery}
          visibleCount={visibleTodos.length}
        />
        <TodoList
          activeFilter={activeFilter}
          hasTodos={todos.length > 0}
          onDelete={removeTodo}
          onToggle={completeTodo}
          onUpdate={editTodo}
          searchQuery={searchQuery}
          todos={visibleTodos}
        />
      </div>

      <aside className="space-y-6">
        <section className="rounded-[32px] border border-white/70 bg-[linear-gradient(180deg,#0f172a_0%,#172554_100%)] p-5 text-white shadow-[0_28px_90px_-48px_rgba(15,23,42,0.8)] md:p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-200/70">
            Focus Snapshot
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight">A quick scan should tell you what is left.</h2>
          <div className="mt-5 grid gap-3">
            <div className="rounded-[24px] border border-white/10 bg-white/6 p-4">
              <p className="text-sm text-blue-100/70">Pending tasks</p>
              <p className="mt-2 text-4xl font-semibold tracking-tight">
                {pendingCount}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-[24px] border border-white/10 bg-white/6 p-4">
                <p className="text-sm text-blue-100/70">Completed</p>
                <p className="mt-2 text-2xl font-semibold">{completedCount}</p>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-white/6 p-4">
                <p className="text-sm text-blue-100/70">Visible now</p>
                <p className="mt-2 text-2xl font-semibold">
                  {visibleTodos.length}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-[32px] border border-white/70 bg-white/80 p-5 shadow-[0_28px_90px_-48px_rgba(15,23,42,0.45)] backdrop-blur-xl md:p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
            Organization Notes
          </p>
          <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
            <p>
              Filters now let you isolate active or completed work without
              leaving the main list.
            </p>
            <p>
              Search applies to the task title and updates the visible list
              instantly as you type.
            </p>
            <p>
              Completed tasks can now be cleared in one action while we wait to
              connect persistence in the next approved phase.
            </p>
          </div>
        </section>
      </aside>
    </section>
  )
}
