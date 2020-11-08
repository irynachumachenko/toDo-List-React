import { ADD_TODO, REMOVE_TODO, EDIT_TODO, CHECK_TODO, FILTER_TODOS, SWITCH_COMPLETE, CLEAR_COMPLETED } from '../actionTypes'
import { ALL, COMPLETED, UNCOMPLETED } from '../filterTypes'

const initialState = {
  todos: []
}

export default function(state = initialState, action) {
  const { payload } = action
  const { todos } = state

  const mutations = {
    [ADD_TODO]() {
      const { todo } = payload

      return {
        ...state,
        todos: [...todos, todo]
      }
    },
    [REMOVE_TODO]() {
      const { id } = payload

      return {
        ...state,
        todos: todos.filter(item => item.id !== id)
      }
    },
    [EDIT_TODO]() {
      const { id, text } = payload

      return {
        ...state,
        todos: todos.map(item => item.id === id ? { ...item, text } : item)
      }
    },
    [CHECK_TODO]() {
      const { id } = payload

      return {
        ...state,
        todos: todos.map(item =>  item.id === id ? { ...item, isChecked: !item.isChecked } : item)
      }
    },
    [FILTER_TODOS]() {
      const { filter } = payload

      const filters = {
        [ALL]: () => todos.map(todo => ({ ...todo, isVisible: true })),
        [COMPLETED]: () => todos.map(todo => ({ ...todo, isVisible: todo.isChecked })),
        [UNCOMPLETED]: () => todos.map(todo => ({ ...todo, isVisible: !todo.isChecked }))
      }

      return {
        ...state,
        todos: filters[filter]()
      }
    },
    [SWITCH_COMPLETE]() {
      const { isUncompleted } = payload

      return {
        ...state,
        todos: todos.map(todo => ({...todo, isChecked: isUncompleted }))
      }
    },
    [CLEAR_COMPLETED]() {
      return {
        ...state,
        todos: todos.filter(todo => !todo.isChecked)
      }
    }
  }
  
  return mutations[action.type] ? mutations[action.type]() : state
}