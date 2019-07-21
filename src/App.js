import React, { useState }  from 'react'
import './App.css'
import styled from 'styled-components'
import Video from './components/video'

const App = () => {
  
  const [video, setVideo] = useState('')

  return (
    <BoxVideo>
      <div className="header">
        <input type="text" onChange={(e) => setVideo(e.target.value)} value={video} placeholder="URL Vídeo" />
      </div>
      <AreaVideo url={ video } />
    </BoxVideo>
  )
}

const BoxVideo = styled.div`
  height: 100%;
  font-family: 'Roboto', sans-serif;

  .header{
    height: 60px;
    background-color: #000000;
    display: flex;
    align-items: center;
    padding: 0 20px;
    justify-content: space-between;

    input{
      display: block;
      height: 40px;
      border: 0;
      padding: 0 20px;
      font-family: inherit;
      width: 100%;


      &[type="file"]{
        width: 150px;
      }
    }
  }
`

const AreaVideo = styled(Video)`
  height: calc(100% - 60px);
  width: 100%;
  display: block;
`

export default App


