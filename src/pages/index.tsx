import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Video from "../core/Video";

export default function Home() {

  const videos = [
    new Video('como desenvolver js', '1'),
    new Video('como ficar rico', '2'),
  ]

  function videoLike(video: Video) {

  }

  return (
    <div className={`
    flex justify-center items-center h-screen
    bg-gradient-to-r from-gray-800 to-black
    text-white
    `}>
      <Layout titulo="Lista de Vídeos">
        <Tabela videos={videos} videoLike={videoLike}></Tabela>
      </Layout>
    </div>
  )
}
