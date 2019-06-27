import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles(theme => ({
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
    flexWrap: 'wrap'
  },
  profileImgPaper: {
    borderRadius:'50%',
    height: 200,
    width: 200,
    overflow: 'hidden',
    position: 'relative',
    margin: 20
  },
  profileImg: {
    width: 286,
    position: 'absolute',
    top: -60,
    left: -36
  },
  textContainer: {
    padding: '20px 40px'
  }
}))

const Intro = () => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <Paper className={classes.profileImgPaper} elevation={10}>
        <img src='Profile.png' className={classes.profileImg} />
      </Paper>
      <div className={classes.textContainer}>
        <Typography variant='body1' gutterBottom color='textSecondary'>
          Welcome! I am
        </Typography>
        <Typography variant='h3' gutterBottom color='primary'>
          Catherine Thompson
        </Typography>
        <Typography variant='h5' gutterBottom>
          Software Developer
        </Typography>
      </div>
    </div>
  )
}

export default Intro