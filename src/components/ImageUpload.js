import React, { useState } from 'react';
import axios from 'axios';

function ImageUpload() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [uploadStatus, setUploadStatus] = useState('');

    const handleFileSelect = (event) => {
        const file = event.target.files[0];
        if (file && file.type.substr(0, 5) === 'image') {
            setSelectedFile(file);

            // Create a preview URL for the selected image
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewUrl(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setSelectedFile(null);
            setPreviewUrl(null);
            setUploadStatus('Please select an image file.');
        }
    };

    const handleUpload = async () => {
        if (!selectedFile) {
            setUploadStatus('Please select a file first!');
            return;
        }

        const formData = new FormData();
        formData.append('image', selectedFile);

        try {
            setUploadStatus('Uploading...');
            const response = await axios.post('https://cyb-be.vercel.app/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setUploadStatus('File uploaded successfully!');
        } catch (error) {
            setUploadStatus('Error uploading file.');
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <h1>Image Upload</h1>
            <input
                type="file"
                onChange={handleFileSelect}
                accept="image/*"
            />
            {previewUrl && (
                <div>
                    <h3>Preview:</h3>
                    <img src={previewUrl} alt="Preview" style={{ maxWidth: '300px' }} />
                </div>
            )}
            <button onClick={handleUpload} disabled={!selectedFile}>
                Upload
            </button>
            <p>{uploadStatus}</p>
        </div>
    );
}

export default ImageUpload;