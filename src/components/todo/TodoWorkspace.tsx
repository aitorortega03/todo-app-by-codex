import { useTodos } from '../../hooks/useTodos.ts'
import { TodoComposer } from './TodoComposer.tsx'
import { TodoList } from './TodoList.tsx'

export function TodoWorkspace() {
  const { todos, addTodo, editTodo, completeTodo, removeTodo } = useTodos()

  return (
    <section className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_22rem]">
      <div className="space-y-6">
        <TodoComposer onAddTodo={addTodo} />
        <TodoList
          onDelete={removeTodo}
          onToggle={completeTodo}
          onUpdate={editTodo}
          todos={todos}
        />
      </div>

      <aside className="space-y-6">
        <section className="rounded-[32px] border border-white/70 bg-[linear-gradient(180deg,#0f172a_0%,#172554_100%)] p-5 text-white shadow-[0_28px_90px_-48px_rgba(15,23,42,0.8)] md:p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-200/70">
            Editing Flow
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight">
            Keep actions close to the task.
          </h2>
          <p className="mt-4 text-sm leading-7 text-blue-100/80">
            This phase focuses on the core lifecycle: create, update, complete,
            and remove. The task row now supports inline editing without
            breaking the reading flow.
          </p>
          <div className="mt-5 grid gap-3">
            <div className="rounded-[24px] border border-white/10 bg-white/6 p-4">
              <p className="text-sm text-blue-100/70">Current status</p>
              <p className="mt-2 text-xl font-semibold">CRUD basics live</p>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-white/6 p-4">
              <p className="text-sm text-blue-100/70">Next planned layer</p>
              <p className="mt-2 text-xl font-semibold">
                Filters, search, and task summary
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-[32px] border border-white/70 bg-white/80 p-5 shadow-[0_28px_90px_-48px_rgba(15,23,42,0.45)] backdrop-blur-xl md:p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
            Interaction Notes
          </p>
          <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
            <p>
              New tasks are trimmed before saving, so accidental leading or
              trailing spaces do not pollute the list.
            </p>
            <p>
              Editing happens inline to keep context visible and avoid modal
              overhead for a small, focused product.
            </p>
            <p>
              The right panel stays intentionally light until real summaries and
              bulk actions arrive in the next approved phases.
            </p>
          </div>
        </section>
      </aside>
    </section>
  )
}
