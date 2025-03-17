import React, { useState } from 'react';
import './css/ImageFullView.css';

const ImageFullView = ({ name, thumbnail, fullImage }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='thumbnail-container'>
      <img
        src={thumbnail}
        alt={name}
        className="thumbnail-image"
        onClick={() => setIsOpen(true)}
      />

      {isOpen && (
        <div className="fullscreen-overlay" onClick={() => setIsOpen(false)}>
            <div class="fullscreen-container">
                <img src={fullImage} alt={name} className="fullscreen-image" />
            </div>
        </div>
      )}
    </div>
  );
};

export default ImageFullView;
