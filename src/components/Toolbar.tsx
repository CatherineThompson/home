import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import GithubIcon from '../svg-icons/GithubIcon'
import Link from '@material-ui/core/Link'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end'
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