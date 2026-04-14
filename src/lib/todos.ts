import type { Todo, TodoFilter, TodoId } from '../types/todo.ts'

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

export function clearCompletedTodos(todos: Todo[]) {
  return todos.filter((todo) => !todo.completed)
}

export function getPendingTodoCount(todos: Todo[]) {
  return todos.filter((todo) => !todo.completed).length
}

export function getCompletedTodoCount(todos: Todo[]) {
  return todos.filter((todo) => todo.completed).length
}

export function filterTodos(todos: Todo[], filter: TodoFilter) {
  switch (filter) {
    case 'active':
      return todos.filter((todo) => !todo.completed)
    case 'completed':
      return todos.filter((todo) => todo.completed)
    case 'all':
    default:
      return todos
  }
}

export function searchTodos(todos: Todo[], query: string) {
  const normalizedQuery = normalizeTodoTitle(query).toLocaleLowerCase()

  if (normalizedQuery.length === 0) {
    return todos
  }

  return todos.filter((todo) =>
    todo.title.toLocaleLowerCase().includes(normalizedQuery),
  )
}

export function getVisibleTodos(
  todos: Todo[],
  filter: TodoFilter,
  query: string,
) {
  return searchTodos(filterTodos(todos, filter), query)
}
