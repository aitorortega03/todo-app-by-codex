import type { Todo } from '../types/todo.ts'

const STORAGE_KEYS = {
  todos: 'modern-todo-app.todos',
  theme: 'modern-todo-app.theme',
} as const

function isTodoRecord(value: unknown): value is Todo {
  if (typeof value !== 'object' || value === null) {
    return false
  }

  const candidate = value as Record<string, unknown>

  return (
    typeof candidate.id === 'string' &&
    typeof candidate.title === 'string' &&
    typeof candidate.completed === 'boolean' &&
    typeof candidate.createdAt === 'string'
  )
}

function isBrowser() {
  return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined'
}

export function readStoredTodos(): Todo[] {
  if (!isBrowser()) {
    return []
  }

  try {
    const rawValue = window.localStorage.getItem(STORAGE_KEYS.todos)

    if (!rawValue) {
      return []
    }

    const parsedValue = JSON.parse(rawValue) as unknown

    if (!Array.isArray(parsedValue)) {
      return []
    }

    return parsedValue.filter(isTodoRecord)
  } catch {
    return []
  }
}

export function writeStoredTodos(todos: Todo[]) {
  if (!isBrowser()) {
    return
  }

  try {
    window.localStorage.setItem(STORAGE_KEYS.todos, JSON.stringify(todos))
  } catch {
    // Ignore storage write failures so the UI remains usable.
  }
}

export function getStorageKeys() {
  return STORAGE_KEYS
}
