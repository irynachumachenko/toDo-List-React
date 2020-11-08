import React from 'react'
import { CircularProgress, Button } from '@material-ui/core/'
import './todo-progress.scss'
import { switchComplete } from '@/redux/actions'
import { connect } from 'react-redux'
import { getDealsLeftCount, getTodosLength } from '@/redux/selectors'

function TodoProgress(props) {
  const { dealsLeft, dealsCount, switchComplete } = props

  const doneTodos = dealsCount - dealsLeft
  const percentage = doneTodos ? doneTodos * 100 / dealsCount : 0
  const percent = +percentage.toFixed(1)

  const isUncompleted = dealsLeft || !dealsCount

  return (
    <div className="todo-progress todo-info">
      <h2 className="prime-title">Progress</h2>
      <div className="todo-progressbar">
        <div className={ `todo-progressbar__text ${ isUncompleted ? '' : 'is-completed' }` }>{ percent } %</div>
        <CircularProgress
          value={ percent }
          variant="static"
          size={ 80 }
          thickness={ 5 }
          className="todo-progressbar__circle"
          color={ isUncompleted ? 'primary' : 'secondary' }
        />
      </div>
      <Button
        color="primary"
        className="todo-controls__btn todo-info__btn"
        onClick={ () => switchComplete(!!isUncompleted) }
      >
        { isUncompleted ? 'complete all' : 'uncomplete all'}
      </Button>
    </div>
  )
}

export default connect(state => ({
  dealsLeft: getDealsLeftCount(state),
  dealsCount: getTodosLength(state)
}), { switchComplete })(TodoProgress)
