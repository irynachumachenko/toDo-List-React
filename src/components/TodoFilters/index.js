import React, { Component } from 'react'
import { Tab, Tabs } from '@material-ui/core'
import './todo-tabs.scss'
import { ALL, COMPLETED, UNCOMPLETED } from '@/redux/filterTypes'
import { connect } from 'react-redux'
import { filterTodos } from '@/redux/actions'

class TodoFilters extends Component {
  state = {
    filter: 'All',
    filters: [ALL, COMPLETED, UNCOMPLETED]
  }

  handleFilter = (event, filter) => {    
    this.setState({ filter })
    this.props.filterTodos(filter)
  }

  render () {
    const { filters, filter } = this.state

    return (
      <footer className="todo-footer">
        <Tabs
          value={ filter }
          onChange={ this.handleFilter }
          indicatorColor="primary"
          textColor="primary"
          className="todo-tabs"
          classes={{
            flexContainer: 'todo-tabs__container'
          }}
        >
          {filters.map((filter, index) =>
            <Tab
              key={ index }
              value={ filter }
              label={ filter }
              className="todo-tabs__item"
            />
          )}
      </Tabs>
      </footer>
    )
  }
}

export default connect(null, { filterTodos })(TodoFilters)
