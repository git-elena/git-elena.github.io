import React, { useState } from 'react';
import './css/ImageFullView.css';

const ImageFullView = ({ name, thumbnail, fullImage, hideMenu }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    hideMenu(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    hideMenu(false);
  };

  return (
    <div className='thumbnail-container'>
      <img
        src={thumbnail}
        alt={name}
        className="thumbnail-image"
        onClick={() => handleOpen()}
      />

      {isOpen && (
        <div className="fullscreen-overlay" onClick={() => handleClose()}>
            <div class="fullscreen-container">
                <img src={fullImage} alt={name} className="fullscreen-image" />
            </div>
        </div>
      )}
    </div>
  );
};

export default ImageFullView;
