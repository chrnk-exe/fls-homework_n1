import React from 'react'
import classes from './PhoneticItem.module.css'

const PhoneticItem = ({info}) => {
  return (
    <div className={classes.PhoneticItem}>
        Audio: <audio controls src={info.audio}></audio>
        {info.text
        ? <p>Transcription: {info.text}</p>
        : null}
    </div>
  )
}

export default PhoneticItem