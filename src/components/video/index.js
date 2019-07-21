import React from 'react'

const Video = ({url, ...props}) => {
  return(
    <video { ...props } src={url} controls />
  )
}

export default Video