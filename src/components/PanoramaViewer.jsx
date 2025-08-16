import { useState, useRef, useEffect } from 'react'
import './PanoramaViewer.css'

const PanoramaViewer = ({ selectedImage }) => {
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [startY, setStartY] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [scrollTop, setScrollTop] = useState(0)
  const [scale, setScale] = useState(1)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const containerRef = useRef(null)
  const imageRef = useRef(null)

  const handleMouseDown = (e) => {
    setIsDragging(true)
    setStartX(e.pageX - containerRef.current.offsetLeft)
    setStartY(e.pageY - containerRef.current.offsetTop)
    setScrollLeft(containerRef.current.scrollLeft)
    setScrollTop(containerRef.current.scrollTop)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - containerRef.current.offsetLeft
    const y = e.pageY - containerRef.current.offsetTop
    const walkX = (x - startX) * 2
    const walkY = (y - startY) * 2
    containerRef.current.scrollLeft = scrollLeft - walkX
    containerRef.current.scrollTop = scrollTop - walkY
  }

  const handleWheel = (e) => {
    e.preventDefault()
    const delta = e.deltaY > 0 ? 0.9 : 1.1
    const newScale = Math.max(0.5, Math.min(3, scale * delta))
    setScale(newScale)
  }

  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      setIsDragging(true)
      setStartX(e.touches[0].pageX - containerRef.current.offsetLeft)
      setStartY(e.touches[0].pageY - containerRef.current.offsetTop)
      setScrollLeft(containerRef.current.scrollLeft)
      setScrollTop(containerRef.current.scrollTop)
    }
  }

  const handleTouchMove = (e) => {
    if (!isDragging || e.touches.length !== 1) return
    e.preventDefault()
    const x = e.touches[0].pageX - containerRef.current.offsetLeft
    const y = e.touches[0].pageY - containerRef.current.offsetTop
    const walkX = (x - startX) * 2
    const walkY = (y - startY) * 2
    containerRef.current.scrollLeft = scrollLeft - walkX
    containerRef.current.scrollTop = scrollTop - walkY
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  const handlePinchZoom = (e) => {
    if (e.touches.length === 2) {
      e.preventDefault()
      const touch1 = e.touches[0]
      const touch2 = e.touches[1]
      const distance = Math.sqrt(
        Math.pow(touch2.pageX - touch1.pageX, 2) +
        Math.pow(touch2.pageY - touch1.pageY, 2)
      )

      if (this.lastDistance) {
        const delta = distance / this.lastDistance
        const newScale = Math.max(0.5, Math.min(3, scale * delta))
        setScale(newScale)
      }
      this.lastDistance = distance
    } else {
      this.lastDistance = null
    }
  }

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  const resetView = () => {
    setScale(1)
    if (containerRef.current) {
      containerRef.current.scrollLeft = 0
      containerRef.current.scrollTop = 0
    }
  }

  useEffect(() => {
    if (selectedImage) {
      resetView()
    }
  }, [selectedImage])

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

  return (
    <div className="panorama-viewer">
      <div className="viewer-header">
        <h3 className="image-title">{selectedImage.name}</h3>
        <div className="viewer-controls-header">
          <button
            className="reset-btn"
            onClick={resetView}
            title="Reset View"
          >
            🔄
          </button>
          <button
            className="fullscreen-btn"
            onClick={toggleFullscreen}
            title="Toggle Fullscreen"
          >
            {isFullscreen ? '⛶' : '⛶'}
          </button>
        </div>
      </div>

      <div
        ref={containerRef}
        className="panorama-container"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onWheel={handleWheel}
        onTouchStart={handleTouchStart}
        onTouchMove={(e) => {
          handleTouchMove(e)
          handlePinchZoom(e)
        }}
        onTouchEnd={handleTouchEnd}
      >
        <img
          ref={imageRef}
          src={selectedImage.url}
          alt={selectedImage.name}
          className="panorama-image"
          style={{
            transform: `scale(${scale})`,
            transformOrigin: 'center center'
          }}
          draggable={false}
        />
      </div>

      <div className="viewer-controls">
        <div className="control-info">
          <span>🖱️ Drag to pan • 🖱️ Scroll to zoom • 📱 Touch to navigate • 🔄 Reset view</span>
        </div>
        <div className="zoom-info">
          <span>Zoom: {Math.round(scale * 100)}%</span>
        </div>
      </div>
    </div>
  )
}

export default PanoramaViewer
