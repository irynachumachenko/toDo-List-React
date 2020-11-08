import React from 'react'
import Button from '@material-ui/core/Button'
import './todo-stats.scss'
import { clearCompleted } from '@/redux/actions'
import { connect } from 'react-redux'
import { getTodosLength, getDealsLeftCount } from '@/redux/selectors'

function TodoStats (props) {
  const { dealsCount, dealsLeft } = props

  return (
    <div className="todo-stats todo-info">
      <h3 className="prime-title">Stats</h3>
      <div className="todo-stats__field">
        <span className="todo-stats__label">Deals:</span>
        <span className="todo-stats__value">{ dealsCount }</span>
      </div>
      <div className="todo-stats__field">
        <span className="todo-stats__label">Deals left:</span>
        <span className="todo-stats__value">{ dealsLeft }</span>
      </div>
      <Button
        className="todo-stats__btn todo-info__btn"
        onClick={ clearCompleted }
      >
        clear completed
      </Button>
    </div>
  )
}

export default connect(state => ({
  dealsCount: getTodosLength(state),
  dealsLeft: getDealsLeftCount(state)
}), { clearCompleted })(TodoStats)
