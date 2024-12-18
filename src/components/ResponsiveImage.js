import React from 'react';

const ResponsiveImage = ({file_path, file_name, alt}) => {
    console.log(`XXL Path: ${file_path}/XXL/${file_name}`);
    console.log(`max-1440 Path: ${file_path}/max-1440/${file_name}`);
    console.log(`max-768 Path: ${file_path}/max-768/${file_name}`);
    return (
    <picture>
      {/* Изображение для экранов шириной до 768 px */}
      <source srcSet={`${file_path}/max-768/${file_name}`} media="(max-width: 768px)" alt={alt} />

      {/* Изображение для экранов шириной до 1440 px */}
      <source srcSet={`${file_path}/max-1440/${file_name}`} media="(max-width: 1440px)" alt={alt} />

      {/* Изображение для экранов шириной больше 1440px */}
      <source srcSet={`${file_path}/XXL/${file_name}`} media="(min-width: 1441px)" alt={alt} />

      {/* Фallback изображение (если браузер не поддерживает <source>) */}
      <img src={`${file_path}/max-1440/${file_name}`} alt={alt} />
    </picture>
  );
};

export default ResponsiveImage;
