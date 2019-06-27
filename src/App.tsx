import React from 'react'
import './App.css'
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles'
import Intro from './components/Intro'
import Toolbar from './components/Toolbar'
import Profile from './components/Profile'
import Skills from './components/Skills'

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
      <Intro />
      <Profile />
      <Skills />
    </ThemeProvider>
  )
}

export default App
