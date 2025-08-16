import { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { Pannellum } from 'pannellum-react'
import './PanoramaViewer.css'

const PanoramaViewer = ({ selectedImage }) => {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const pannellumRef = useRef(null)

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
    }
  }, [])

  if (!selectedImage) {
    return (
      <div className="panorama-placeholder">
        <div className="placeholder-content">
          <div className="placeholder-icon">📷</div>
          <h3>Select a Panorama</h3>
          <p>Choose an image from the gallery to start viewing</p>
        </div>
      </div>
    )
  }

  // Pannellum configuration object
  const pannellumConfig = {
    width: '100%',
    height: '100%',
    image: selectedImage.url,
    pitch: 0,
    yaw: 0,
    hfov: 110,
    autoLoad: true,
    onLoad: () => {
      console.log('panorama loaded')
    },
    onError: (err) => {
      console.error('panorama error:', err)
    },
    compass: false,
    showZoomCtrl: true,
    showFullscreenCtrl: false,
    showControls: true,
    hotSpots: [],
    style: {
      width: '100%',
      height: '100%',
      borderRadius: '0',
    }
  }

  return (
    <div className="panorama-viewer">
      <div className="viewer-header">
        <h3 className="image-title">{selectedImage.name}</h3>
        <div className="viewer-controls-header">
          <button
            className="fullscreen-btn"
            onClick={toggleFullscreen}
            title="Toggle Fullscreen"
          >
            {isFullscreen ? '⛶' : '⛶'}
          </button>
        </div>
      </div>

      <div className="panorama-container">
        <Pannellum
          ref={pannellumRef}
          {...pannellumConfig}
        />
      </div>

      <div className="viewer-controls">
        <div className="control-info">
          <span>🖱️ Drag to rotate • 🖱️ Scroll to zoom • 📱 Touch to navigate • 360° Panorama View</span>
        </div>
      </div>
    </div>
  )
}

// PropTypes for type checking
PanoramaViewer.propTypes = {
  selectedImage: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired
  })
}

export default PanoramaViewer
