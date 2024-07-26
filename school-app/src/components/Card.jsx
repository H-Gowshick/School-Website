import React from 'react';

const Card = ({ title, content, image }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {image && <img src={image} alt={title} className="w-full h-48 object-cover" />}
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Card;