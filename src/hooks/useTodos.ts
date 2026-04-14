import { useReducer } from 'react'
import {
  createTodo,
  deleteTodo,
  toggleTodo,
  updateTodoTitle,
  validateTodoTitle,
} from '../lib/todos.ts'
import type { Todo, TodoId } from '../types/todo.ts'

interface TodosState {
  todos: Todo[]
}

type TodosAction =
  | { type: 'add'; title: string }
  | { type: 'toggle'; id: TodoId }
  | { type: 'delete'; id: TodoId }
  | { type: 'update'; id: TodoId; title: string }

interface MutationResult {
  ok: boolean
  error?: string
}

const initialState: TodosState = {
  todos: [],
}

function todosReducer(state: TodosState, action: TodosAction): TodosState {
  switch (action.type) {
    case 'add':
      return {
        ...state,
        todos: [createTodo(action.title), ...state.todos],
      }
    case 'toggle':
      return {
        ...state,
        todos: toggleTodo(state.todos, action.id),
      }
    case 'delete':
      return {
        ...state,
        todos: deleteTodo(state.todos, action.id),
      }
    case 'update':
      return {
        ...state,
        todos: updateTodoTitle(state.todos, action.id, action.title),
      }
    default:
      return state
  }
}

export function useTodos() {
  const [state, dispatch] = useReducer(todosReducer, initialState)

  function addTodo(title: string): MutationResult {
    const error = validateTodoTitle(title)

    if (error) {
      return {
        ok: false,
        error,
      }
    }

    dispatch({ type: 'add', title })

    return { ok: true }
  }

  function editTodo(id: TodoId, title: string): MutationResult {
    const error = validateTodoTitle(title)

    if (error) {
      return {
        ok: false,
        error,
      }
    }

    dispatch({ type: 'update', id, title })

    return { ok: true }
  }

  function completeTodo(id: TodoId) {
    dispatch({ type: 'toggle', id })
  }

  function removeTodo(id: TodoId) {
    dispatch({ type: 'delete', id })
  }

  return {
    todos: state.todos,
    addTodo,
    editTodo,
    completeTodo,
    removeTodo,
  }
}
