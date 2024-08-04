import React from 'react';
import './CardN.css';

export const CardN = ({ image, altText, date, title, description, tags, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={image} alt={altText} className="image" />
      <div className="date">{date}</div>
      <h2 className="title">{title}</h2>
      <p className="description">{description}</p>
      <div className="tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
    </div>
  );
};
