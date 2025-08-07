import React from 'react';
import './Gallery.css';
import './Gallery2.css';

function Gallery2() {
  const photos = [
    { src: '/images/pro6.jpg', caption: 'Team Collaboration', rotation: '6deg', top: '30%', left: '70%' },
    { src: '/images/pro4.jpg', caption: 'Networking Event', rotation: '4deg', top: '20%', left: '35%' },
    { src: '/images/pro1.jpg', caption: 'Conference Panel', rotation: '-8deg', top: '60%', left: '15%' },
    { src: '/images/pro5.jpg', caption: 'Award Moment', rotation: '-3deg', top: '45%', left: '60%' },
    { src: '/images/pro3.jpg', caption: 'Public Talk 2023', rotation: '-5deg', top: '5%', left: '10%' },
    { src: '/images/pro2.jpg', caption: 'Workshop Host', rotation: '5deg', top: '75%', left: '50%' },
  ];

  return (
    <div className="collage-wrapper2">
      <div className="collage-area2">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="collage-photo2"
            style={{
              transform: `rotate(${photo.rotation})`,
              top: photo.top,
              left: photo.left,
            }}
          >
            <img src={photo.src} alt={photo.caption} />
            <span className="photo-caption2">{photo.caption}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery2;
