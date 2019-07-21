import React from 'react'

const Video = ({url, ...props}) => {
  return(
    <video { ...props } src={url} placeHolder="URL Vídeo" controls />
  )
}

export default Video