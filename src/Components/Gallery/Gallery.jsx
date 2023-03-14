
import React, { useState } from 'react';
import './Gallery.scss';

const Gallery = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [reverse, setReverse] = useState(false);

    const handleNext = () => {
        setReverse((prevReverse) => !prevReverse);
        setActiveIndex((prevIndex) => prevIndex + (reverse ? -1 : 1));
    };

    const handlePrev = () => {
        setReverse((prevReverse) => !prevReverse);
        setActiveIndex((prevIndex) => prevIndex + (reverse ? 1 : -1));
    };

    const pictures = [
        {
            src: './images/boat.jpg',
            alt: 'Picture 1',			
        },
        {
            src: './images/bridge.jpg',
            alt: 'Picture 2',
		
        },
        {
            src: './images/varna-castle.jpg',
            alt: 'Picture 3',			
        },
        {
            src: './images/varna-bulgaria.jpg',
            alt: 'Picture 4',			
        },
        {
            src: './images/varna-stone.jpg',
            alt: 'Picture 5',			
        },
		
    ];

    return (
        <div className='gallery'>
            <div className='title-container'>
                <h2>Галерия</h2>
            </div>
            <div className='picture-container'>
                {pictures
                    .slice(activeIndex, activeIndex + 3)
                    .map((picture, index) => (
                        <img
                            key={index}
                            className='picture'
                            src={picture.src}
                            alt={picture.alt}
                        />
                    ))}
            </div>
            <div className='arrows'>
                <button
                    onClick={handlePrev}
                    disabled={activeIndex === 0}>
                    <img className='button-arrow' src='/images/arrow1.svg' alt='arrow'></img>
                </button>
                <button
                    onClick={handleNext}
                    disabled={activeIndex >= pictures.length - 3}>
                    <img className='button-arrow' src='/images/arrow2.svg' alt='arrow'></img>
                </button>
            </div>
        </div>
    );
};

export default Gallery;
