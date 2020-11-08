import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import '@/styles/app.scss'
import Todo from './components/Todo'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import teal from '@material-ui/core/colors/teal'
import { Provider } from 'react-redux'
import { store } from './redux/store'

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    secondary: { main: teal[500] } // Purple and green play nicely together.
  }
})

class App extends Component {
  render () {
    return (
      <div className="app">
        <MuiThemeProvider theme={theme}>
          <Todo />
        </MuiThemeProvider>
      </div>
    )
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
