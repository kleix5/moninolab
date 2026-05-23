import React from 'react';
import './ProductCard.css';

const ProductCard = ({ 
  image, 
  title, 
  price, 
  rating, 
  onAddToCart 
}) => {
  return (

    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      
      <div className="product-info">
        <h3 className="product-title">{title}</h3>
        
        <div className="product-rating">
          <span className="stars">★★★★☆</span>
          <span className="rating-text">({rating})</span>
        </div>
        
        <div className="product-footer">
          <span className="product-price">{price}</span>
          <button 
            className="btn-add-to-cart"
            onClick={onAddToCart}
          >
            В корзину
          </button>
        </div>
      </div>
    </div>

  );
};

export default ProductCard;