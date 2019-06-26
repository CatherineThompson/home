import React from 'react'
import logo from './logo.svg'
import './App.css'
import Button from '@material-ui/core/Button'
import { ThemeProvider } from '@material-ui/styles'
import { orange } from '@material-ui/core/colors'
import {
  createMuiTheme,
  makeStyles,
  createStyles,
  Theme as AugmentedTheme
} from '@material-ui/core/styles'
import GithubIcon from './svg-icons/GithubIcon'
import Link from '@material-ui/core/Link'

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
      {/* <img src={logo} className='App-logo' alt='logo' /> */}
      <Link href='https://github.com/CatherineThompson/home' target='_blank'>
        <Button color='primary' >
          <GithubIcon style={{ marginRight: 8 }} />
           View Source Code
        </Button>
      </Link>
    </ThemeProvider>
  )
}

export default App
