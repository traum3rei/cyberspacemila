import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ImageGallery.css'; // We'll create this file for styling

function ImageGallery() {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [fullscreenImage, setFullscreenImage] = useState(null);

    useEffect(() => {
        fetchImages();
    }, []);

    const fetchImages = async () => {
        try {
            setLoading(true);
            const response = await axios.get('https://cyb-be.vercel.app/api/images');
            setImages(response.data);
            setLoading(false);
        } catch (err) {
            setError('Error fetching images');
            setLoading(false);
            console.error('Error fetching images:', err);
        }
    };

    const handleImageClick = (image) => {
        setFullscreenImage(image);
    };

    const handleCloseFullscreen = () => {
        setFullscreenImage(null);
    };

    const handleDeleteImage = async (key) => {
        try {
            await axios.delete(`https://cyb-be.vercel.app/api/images/${key}`);
            setFullscreenImage(null);
            fetchImages(); // Refresh the gallery
        } catch (err) {
            console.error('Error deleting image:', err);
            alert('Failed to delete image');
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="image-gallery">
            <h2>Image Gallery</h2>
            <div className="gallery-container">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image.url}
                        alt={`Image ${index}`}
                        onClick={() => handleImageClick(image)}
                    />
                ))}
            </div>
            {fullscreenImage && (
                <div className="fullscreen-overlay" onClick={handleCloseFullscreen}>
                    <div className="fullscreen-content" onClick={(e) => e.stopPropagation()}>
                        <img src={fullscreenImage.url} alt="Fullscreen" />
                        <button onClick={() => handleDeleteImage(fullscreenImage.key)}>Delete</button>
                        <button onClick={handleCloseFullscreen}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ImageGallery;