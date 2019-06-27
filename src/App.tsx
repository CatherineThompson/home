import React from 'react'
import './App.css'
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles'
import Profile from './components/Profile'
import Toolbar from './components/Toolbar'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#870d4c'
    },
    secondary: {
      main: '#01579b'
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Toolbar />
      <Profile />
    </ThemeProvider>
  )
}

export default App
