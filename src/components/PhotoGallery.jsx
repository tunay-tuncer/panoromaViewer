import { useState } from 'react'
import PropTypes from 'prop-types'
import './PhotoGallery.css'

import img1 from '../assets/mutfakPanoroma.png'
import img2 from '../assets/altKatPanoroma.png'
import img3 from '../assets/ustKatAnaYatakOdasiPanoroma.png'
import img4 from '../assets/ustKatKucukYatakOdasiYesilPanoroma.png'


const PhotoGallery = ({ onImageSelect, selectedImage }) => {
    // Actual 360° panorama images - these are equirectangular panorama images
    const [images] = useState([
        {
            id: 1,
            name: 'Mutfak',
            url: img1,
            thumbnail: img1
        },
        {
            id: 2,
            name: 'Alt Kat Yatak Odası',
            url: img2,
            thumbnail: img2
        },
        {
            id: 3,
            name: 'Üst Kat Ana Yatak Odası',
            url: img3,
            thumbnail: img3
        },
        {
            id: 4,
            name: "Üst Kat Küçük Yatak Odası",
            url: img4,
            thumbnail: img4
        }
    ])

    const handleImageClick = (image) => {
        onImageSelect(image)
    }

    return (
        <div className="photo-gallery">
            <h2 className="gallery-title">360° Panorama Gallery</h2>
            <div className="gallery-grid">
                {images.map((image) => (
                    <div
                        key={image.id}
                        className={`gallery-item ${selectedImage?.id === image.id ? 'selected' : ''}`}
                        onClick={() => handleImageClick(image)}
                    >
                        <div className="image-container">
                            <img
                                src={image.thumbnail}
                                alt={image.name}
                                className="gallery-thumbnail"
                                loading="lazy"
                            />
                            <div className="image-overlay">
                                <span className="image-name">{image.name}</span>
                                <span className="panorama-badge">360°</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div className="selected-info">
                    <p>Selected: <strong>{selectedImage.name}</strong></p>
                    <p className="panorama-info">🔄 Full 360° panorama view available</p>
                </div>
            )}
        </div>
    )
}

// PropTypes for type checking
PhotoGallery.propTypes = {
    onImageSelect: PropTypes.func.isRequired,
    selectedImage: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired
    })
}

export default PhotoGallery
