import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles({
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  profileImgPaper: {
    borderRadius:'50%',
    height: 200,
    width: 200,
    overflow: 'hidden',
    position: 'relative',
    marginRight: 40
  },
  profileImg: {
    width: 286,
    position: 'absolute',
    top: -60,
    left: -36
  }
})

const Profile = () => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <Paper className={classes.profileImgPaper}>
        <img src='Profile.png' className={classes.profileImg} />
      </Paper>
      <div>
        <Typography variant="body1" gutterBottom color='textSecondary'>
          Welcome! This is
        </Typography>
        <Typography variant="h3" gutterBottom color='primary'>
          Catherine Thompson
        </Typography>
        <Typography variant="h5" gutterBottom>
          Software Developer
        </Typography>
      </div>
    </div>
  )
}

export default Profile