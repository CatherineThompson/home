import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import GithubIcon from '../svg-icons/GithubIcon'
import Link from '@material-ui/core/Link'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'

const useStyles = makeStyles(theme => ({
  container: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: theme.spacing(8)
  },
  actionsContainer: {
    padding: theme.spacing(1)
  }
}))

const Toolbar = () => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <div className={classes.actionsContainer}>
        <Link href='https://github.com/CatherineThompson/home' target='_blank'>
          <Tooltip title='GitHub repo' enterDelay={500} color='primary' >
            <IconButton>
              <GithubIcon />
            </IconButton>
          </Tooltip>
        </Link>
      </div>
    </div>
  )
}

export default Toolbar