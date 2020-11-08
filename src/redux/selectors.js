export const getTodosState = state => state.todos.todos
export const getDealsLeftCount = state => getTodosState(state).filter(todo => !todo.isChecked).length
export const getTodosLength = state => getTodosState(state).length
