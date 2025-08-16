import { useState } from 'react'
import './App.css'
import PhotoGallery from './components/PhotoGallery'
import PanoramaViewer from './components/PanoramaViewer'

function App() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <div className="app">
      <header className="header">
        <h1>ONUR KIRDÖK PANORAMA GALLERY</h1>
      </header>

      <main className="main-container">
        <div className="gallery-container">
          <PhotoGallery onImageSelect={setSelectedImage} selectedImage={selectedImage} />
        </div>

        <div className="viewer-container">
          <PanoramaViewer selectedImage={selectedImage} />
        </div>
      </main>
    </div>
  )
}

export default App
