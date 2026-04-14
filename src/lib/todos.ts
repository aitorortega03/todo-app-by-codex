import type { Todo, TodoId } from '../types/todo.ts'

export function normalizeTodoTitle(title: string) {
  return title.replace(/\s+/g, ' ').trim()
}

export function validateTodoTitle(title: string) {
  if (normalizeTodoTitle(title).length === 0) {
    return 'Please enter a task before saving.'
  }

  return null
}

export function createTodo(title: string): Todo {
  return {
    id: crypto.randomUUID(),
    title: normalizeTodoTitle(title),
    completed: false,
    createdAt: new Date().toISOString(),
  }
}

export function toggleTodo(todos: Todo[], id: TodoId) {
  return todos.map((todo) =>
    todo.id === id
      ? {
          ...todo,
          completed: !todo.completed,
        }
      : todo,
  )
}

export function deleteTodo(todos: Todo[], id: TodoId) {
  return todos.filter((todo) => todo.id !== id)
}

export function updateTodoTitle(todos: Todo[], id: TodoId, title: string) {
  const normalizedTitle = normalizeTodoTitle(title)

  return todos.map((todo) =>
    todo.id === id
      ? {
          ...todo,
          title: normalizedTitle,
        }
      : todo,
  )
}
