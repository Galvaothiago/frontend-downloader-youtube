import { useState } from 'react'
import { Header } from "./Components/Header";
import { api } from "./services/api";

import styled from 'styled-components'
import { CardVideo } from './Components/CardVideo';
import { BackgroundEmpty } from './Components/BackgroundEmpty';
import { Loading } from './Components/Loading';

function App() {
  const [ infoVideo, setInfoVideo ] = useState(null)

  const [download, setDownload] = useState(null)
  const [ isLoading, setIsLoading ] = useState(false)

  const getInfoAboutVideo = async (url) => {
    try {
      const info = await api.post('/youtube', {
        url
      })

      const infoFormated = [info.data].map(info => ({
        title: info.title,
        url: info.url,
        img: info.thumbnail,
        views: new Intl.NumberFormat().format(info.viewCount),
        quality: info.quality,
        lengthSeconds: info.lengthSeconds

      }))

      setInfoVideo(infoFormated)
      
    } catch (error) {
      alert('something went wrong', error.message)
    }
  }

  const downloadVideo = async (url) => {
    try {
      setIsLoading(true)
      const res = await api.get('/download', {
        params: { url },
        responseType: 'Blob'
      })

      setDownload(res.request.responseURL)
      setIsLoading(false)

      setTimeout(() => {
        setDownload(null)
      }, 4000)
    } catch (error) {
      alert('something went wrong', error.message)
      setIsLoading(false)
    }
  }

  return (
    <Container>
      <Header onGetInfo={getInfoAboutVideo} />
      <Dashboard>
          { infoVideo ? <CardVideo info={infoVideo} onDown={downloadVideo}/> : <BackgroundEmpty /> }
          { isLoading && <Loading content="We are preparing your download..."/>}
          { download && <iframe title={infoVideo.title} style={ { display: 'none' }} src={download}></iframe> }
      </Dashboard>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
`

const Dashboard = styled.main`
  width: 100%;
  padding: 1.5rem;

  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;
  
`
export default App;
