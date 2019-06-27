import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper'

const profileText = `
  I am a full-stack software engineer with an emphasis on front-end web development. 
  My daily goals include writing clean, readable, well-designed code within the functional programming paradigm. 
  This site is written with a React + Typescript stack.
`

const useStyles = makeStyles(theme => ({
  container: {
    width: '100%',
    background: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    display: 'flex', 
    justifyContent: 'center',
    marginBottom: theme.spacing(10)
  },
  textContainer: {
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(8),
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    maxWidth: 1000
  }
}))

const Profile = () => {
  const classes = useStyles()
  const link = (
    <Link href='https://github.com/CatherineThompson/home' target='_blank'>
      GitHub
    </Link>
  )
  return (
    <Paper className={classes.container} square elevation={10}>
      <div className={classes.textContainer}>
        <Typography variant='body1' color='inherit'>
          { profileText } The source code can be found on {link}. Welcome to my website!
        </Typography>
      </div>
    </Paper>
  )
}

export default Profile