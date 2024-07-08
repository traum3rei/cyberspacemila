import React from 'react';
import { motion } from 'framer-motion';

const pictures = [
    { id: 1, src: 'path/to/image1.jpg', description: 'Our first virtual date' },
    { id: 2, src: 'path/to/image2.jpg', description: 'Dancing in the digital rain' },
    // Add more pictures here
];

function PictureGallery() {
    return (
        <div className="picture-gallery">
            <h2>These made me think of you</h2>
            <div className="gallery-grid">
                {pictures.map((picture) => (
                    <motion.div
                        key={picture.id}
                        className="picture-item"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <img src={picture.src} alt={picture.description} />
                        <p className="glow">{picture.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default PictureGallery;