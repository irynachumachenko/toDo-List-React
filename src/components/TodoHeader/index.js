import React, { Component } from 'react'
import shortid from 'shortid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'
import { addTodo } from '@/redux/actions'
import './todo-header.scss'

class TodoHeader extends Component {
  state = {
    text: ''
  }

  addTodo = e => {
    e.preventDefault()
    if (!this.state.text) return

    try {
      this.props.addTodo({
        id: shortid.generate(),
        text: this.state.text,
        isChecked: false,
        isVisible: true
      })
    
      this.setState({ text: '' })
    } catch (err) {
      console.error('Error while adding todo in list:', err.message);
    }
  }

  handleInput = e => {
    this.setState({
      text: e.target.value
    })
  }

  render () {
    return (
      <header className="todo__header">
        <form onSubmit={ this.addTodo } className="todo-form">
          <TextField
            id="main-input"
            label="Input your deal"
            className="todo-form__input"
            margin="normal"
            value={ this.state.text }
            onChange={ this.handleInput }
            InputProps={{
              autoComplete: "off"
            }}
          />
          <Button variant="contained" color="primary" className="todo-form__submit" type="submit">Add to list</Button>
        </form>
      </header>
    )
  }
}

export default connect(null, { addTodo })(TodoHeader)