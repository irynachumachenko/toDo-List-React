import {
  ADD_TODO,
  REMOVE_TODO,
  EDIT_TODO,
  CHECK_TODO,
  FILTER_TODOS,
  SWITCH_COMPLETE,
  CLEAR_COMPLETED
} from './actionTypes'

export const addTodo = todo => ({
  type: ADD_TODO,
  payload: { todo }
})

export const removeTodo = id => ({
  type: REMOVE_TODO,
  payload: { id }
})

export const editTodo = (id, text) => ({
  type: EDIT_TODO,
  payload: { id, text }
})

export const checkTodo = id => ({
  type: CHECK_TODO,
  payload: { id }
})

export const filterTodos = filter => ({
  type: FILTER_TODOS,
  payload: { filter }
})

export const switchComplete = isUncompleted => ({
  type: SWITCH_COMPLETE,
  payload: { isUncompleted }
})

export const clearCompleted = () => ({
  type: CLEAR_COMPLETED
})