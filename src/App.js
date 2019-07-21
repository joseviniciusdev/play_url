import React, { useState }  from 'react'
import './App.css'
import styled from 'styled-components'
import Video from './components/video'

const App = () => {
  
  const [video, setVideo] = useState('')

  return (
    <BoxVideo>
      <div className="header">
        <input type="text" onChange={(e) => setVideo(e.target.value)} value={video} />
      </div>
      <AreaVideo url={ video } />
    </BoxVideo>
  )
}

const BoxVideo = styled.div`
  height: 100%;
  font-family: Arial, Helvetica, sans-serif;

  .header{
    height: 60px;
    background-color: #000000;
    display: flex;
    align-items: center;
    padding: 0 20px;

    input{
      display: block;
      height: 40px;
      border: 0;
      padding: 0 20px;
      font-family: inherit;
      width: 100%;
    }
  }
`

const AreaVideo = styled(Video)`
  height: calc(100% - 60px);
  width: 100%;
  display: block;
`

export default App


