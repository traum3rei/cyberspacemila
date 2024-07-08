import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { motion } from 'framer-motion';
import P5Sketch from './components/P5Sketch';
import LettersList from './components/LettersList';
import PictureGallery from './components/PictureGallery';
import './App.css';
import ImageUpload from './components/ImageUpload';
import ImageGallery from './components/ImageGallery';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>M's<span className="blink">♥</span>Space</h1>
        </header>
        <div className="container">
          <nav className="sidebar">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="profile-section">
                <div className="profile-frame">
                  {//<img src="path/to/profile-pic.jpg" alt="Profile" className="profile-pic" />
                  }
                </div>
                <h2>M</h2>
                <p className="status">"Surfing the digital waves of love ♥"</p>
              </div>
              <ul className="nav-links">
                <li><Link to="/">Home Base</Link></li>
                <li><Link to="/letters">Love Bytes</Link></li>
                <li><Link to="/gallery">Pixel Memories</Link></li>
                <li><Link to="/image">Image Upload</Link></li>
                <li><Link to="/images">Images</Link></li>
              </ul>
            </motion.div>
          </nav>
          <main>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Routes>
                <Route path="/" element={<P5Sketch />} />
                <Route path="/letters" element={<LettersList />} />
                <Route path="/gallery" element={<PictureGallery />} />
                <Route path="/image" element={<ImageUpload />} />
                <Route path="/images" element={<ImageGallery />} />
              </Routes>
            </motion.div>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;