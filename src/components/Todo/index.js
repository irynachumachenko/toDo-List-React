import React from 'react'
import TodoHeader from '../TodoHeader'
import TodoItem from '../TodoItem'
import TodoFilters from '../TodoFilters'
import TodoProgress from '../TodoProgress'
import TodoStats from '../TodoStats'
import { connect } from 'react-redux'
import { getTodosState } from '@/redux/selectors'
import './todo.scss'

function Todo(props) {
  const { todos } = props

  const TodoList = (
    <ul>
      {todos.map(todo =>
        todo.isVisible ? (
          <TodoItem
            key={todo.id}
            todo={todo}
          />
        ) : null
      )}
    </ul>
  )

  return (
    <div className="todo">
      <div className="todo__head">
        <img className="todo__logo" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="react logo" />
        <h1 className="todo__title">Todo list created with React.js</h1>
      </div>
      <TodoHeader />
      <section className="todo__body">{TodoList}</section>
      <TodoFilters />
      <TodoProgress />
      <TodoStats />
    </div>
  )
}

export default connect(state => ({
  todos: getTodosState(state)
}))(Todo)
