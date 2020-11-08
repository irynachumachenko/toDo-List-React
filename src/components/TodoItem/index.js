import React from 'react'
import { Checkbox, Icon, Button } from '@material-ui/core/'
import { connect } from 'react-redux'
import { removeTodo, editTodo, checkTodo } from '@/redux/actions'
import './todo-item.scss'

function TodoItem (props) {
  const todoInput = React.createRef()

  const { todo, checkTodo, removeTodo, editTodo } = props
  
  const handleEdit = () => {
    const inpNode = todoInput.current

    inpNode.disabled = false
    inpNode.select()
  }

  const id = todo.id

  return (
    <li className={`todo-item ${todo.isChecked ? 'is-checked': ''}`}>
      <Checkbox
        checked={ todo.isChecked }
        onChange={ () => checkTodo(id) }
        color="secondary"
        classes={{ root: "todo-item__checkbox" }}
      />
      <input
        type="text"
        value={ todo.text }
        onChange={ e => editTodo(id, e.target.value) }
        onBlur={ e => e.target.disabled = true }
        disabled={ true }
        className="todo-item__input"
        ref={ todoInput }
      />
      <Button
        onClick={ handleEdit }
        classes={{ root: "todo-item__edit" }}
      >
        <Icon classes={{ root: "todo-item__edit-icon" }}>edit</Icon>
      </Button>
      <Button
        onClick={ () => removeTodo(id) }
        classes={{ root: "todo-item__remove" }}
      >
        <Icon classes={{ root: "todo-item__remove-icon" }}>delete_forever</Icon>
      </Button>
    </li>
  )
}

export default connect(null, {
  removeTodo,
  editTodo,
  checkTodo
})(TodoItem)
