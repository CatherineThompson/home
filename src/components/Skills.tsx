import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ReactIcon from '../svg-icons/ReactIcon'
import FlutterIcon from '../svg-icons/FlutterIcon'
import RxJSIcon from '../svg-icons/RxJSIcon'
import TypeScriptIcon from '../svg-icons/TypeScriptIcon'
import ScalaIcon from '../svg-icons/ScalaIcon'
import YarnIcon from '../svg-icons/YarnIcon'

const useStyles = makeStyles({
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
  },
  icon: {
    height: 100,
    width: 100,
    margin: 20
  }
})

const Skills = () => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <ReactIcon className={classes.icon} />
      <TypeScriptIcon className={classes.icon} />
      <RxJSIcon className={classes.icon} />
      <YarnIcon className={classes.icon} />
      <FlutterIcon className={classes.icon} />
      <ScalaIcon className={classes.icon} />
    </div>
  )
}

export default Skills