import React from 'react';
import { useState, useEffect } from 'react'
import Ad from './Ad';

export default function Promo({ adsData }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % adsData.length);
        }, 10000);
        return () => {
            clearInterval(interval);
        }
    }, [adsData.length]);

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    }

    return (
        <div className="promo">
            <Ad {...adsData[currentIndex]} />
            <div className="overlay">
                <div className="dot-selector">
                    {adsData.map((ad, index) => (
                        <div key={index} className="dot" style={{ opacity: index === currentIndex ? 1.0 : 0.4 }} onClick={() => handleDotClick(index)}></div>
                    ))}
                </div>
            </div>
        </div>
    )
}