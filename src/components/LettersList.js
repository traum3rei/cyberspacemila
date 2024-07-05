import React from 'react';
import { motion } from 'framer-motion';

const letters = [
    { id: 1, title: 'Digital Whispers', content: 'Your love electrifies my circuits...' },
    { id: 2, title: 'Cyber Heartbeat', content: 'Every pixel of my being misses you...' },
    // Add more letters here
];

function LettersList() {
    return (
        <div className="letters-list">
            <h2>Love Bytes <span className="blink">♥</span></h2>
            {letters.map((letter) => (
                <motion.div
                    key={letter.id}
                    className="letter"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h3 className="glow">{letter.title}</h3>
                    <p>{letter.content}</p>
                </motion.div>
            ))}
        </div>
    );
}

export default LettersList;