import React from 'react';
import "../../App.css";
import "../../App.css";

function Gallery2() {
  const photos = [
    { src: '/images/white.jpg', caption: '-', rotation: '6deg', top: '30%', left: '70%' },
    { src: '/images/firstday.jpg', caption: "CSIR-First Day-Internship Sep '24", rotation: '4deg', top: '20%', left: '35%' },
    { src: '/images/Networking.jpg', caption: "SISAL-Networking Event Nov '24", rotation: '-8deg', top: '60%', left: '15%' },
    { src: '/images/white.jpg', caption: '-', rotation: '-3deg', top: '45%', left: '60%' },
    { src: '/images/grad1.jpg', caption: 'VUT-Graduation April 2024', rotation: '-5deg', top: '5%', left: '10%' },
    { src: '/images/white.jpg', caption: '-', rotation: '5deg', top: '75%', left: '50%' },
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
