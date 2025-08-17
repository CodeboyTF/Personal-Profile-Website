import React from 'react';
import './Gallery.css';

function Gallery() {
  const photos = [
    { src: '/images/white.jpg', caption: '-', rotation: '6deg', top: '30%', left: '70%' },
    { src: '/images/white.jpg', caption: '-', rotation: '4deg', top: '20%', left: '35%' },
    { src: '/images/white.jpg', caption: '-', rotation: '-8deg', top: '60%', left: '15%' },
    { src: '/images/white.jpg', caption: '-', rotation: '-3deg', top: '45%', left: '60%' },
    { src: '/images/white.jpg', caption: '-', rotation: '-5deg', top: '5%', left: '10%' },
    { src: '/images/white.jpg', caption: '-', rotation: '5deg', top: '75%', left: '50%' },
  ];

  return (
    <div className="collage-wrapper">
      <div className="collage-area">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="collage-photo"
            style={{
              transform: `rotate(${photo.rotation})`,
              top: photo.top,
              left: photo.left,
            }}
          >
            <img src={photo.src} alt={photo.caption} />
            <span className="photo-caption">{photo.caption}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
