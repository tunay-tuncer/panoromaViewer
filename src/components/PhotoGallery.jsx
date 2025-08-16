import { useState } from 'react'
import './PhotoGallery.css'

const PhotoGallery = ({ onImageSelect, selectedImage }) => {
    // Sample panorama images - replace with your actual images
    const [images] = useState([
        {
            id: 1,
            name: 'Mountain View',
            url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop',
            thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=100&fit=crop'
        },
        {
            id: 2,
            name: 'City Skyline',
            url: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=400&fit=crop',
            thumbnail: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=200&h=100&fit=crop'
        },
        {
            id: 3,
            name: 'Beach Sunset',
            url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=400&fit=crop',
            thumbnail: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=200&h=100&fit=crop'
        },
        {
            id: 4,
            name: 'Forest Path',
            url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop',
            thumbnail: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=200&h=100&fit=crop'
        },
        {
            id: 5,
            name: 'Desert Landscape',
            url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop',
            thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=100&fit=crop'
        },
        {
            id: 6,
            name: 'Lake View',
            url: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=400&fit=crop',
            thumbnail: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=200&h=100&fit=crop'
        }
    ])

    const handleImageClick = (image) => {
        onImageSelect(image)
    }

    return (
        <div className="photo-gallery">
            <h2 className="gallery-title">Panorama Gallery</h2>
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
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div className="selected-info">
                    <p>Selected: <strong>{selectedImage.name}</strong></p>
                </div>
            )}
        </div>
    )
}

export default PhotoGallery
