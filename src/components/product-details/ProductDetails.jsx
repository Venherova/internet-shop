import PropTypes from 'prop-types';
import { useState } from 'react';

import Rating from '../rating/Rating';

import './ProductDetails.css';

function ProductDetails({ product }) {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  return (
    <div className="container">
      <div className="product_image-container">
        {product.images.map((imageId, index) => (
          <img
            key={`${imageId}-${index}`}
            src={`/assets/images/products/${imageId}.png`}
            alt={product.title}
          />
        ))}
      </div>

      <div className="product-info-container">
        <div className="product_title">
          <h3>{product.title}</h3>
        </div>
        <Rating rating={product.rating} />

        <div className="product_price">
          {product.discountedPrice ? (
            <>
              <span className="price">${product.discountedPrice}</span>
              <span className="price discounted">${product.price}</span>
              <span className="discount">
                -{(((product.price - product.discountedPrice) / product.price) * 100).toFixed(0)}%
              </span>
            </>
          ) : (
            <span className="price">${product.price}</span>
          )}
        </div>

        <div className="product_description">
          <span>{product.description}</span>
        </div>

        <div className="product_colors">
          <h4>Select Colors</h4>
          <div>
            {product.colors.map((color, index) => (
              <button
                key={index}
                className="color-button"
                style={{ backgroundColor: color }}
                onClick={() => handleColorSelect(color)}
                aria-label={`Select ${color}`}
                aria-pressed={selectedColor === color}
                type="button"
              />
            ))}
          </div>
        </div>
        <div className="product_size">
          <h4>Choose Size</h4>
          <div>
            {['Small', 'Medium', 'Large'].map((size, index) => (
              <button
                key={index}
                className={`size-button ${selectedSize === size ? 'selected' : ''}`}
                onClick={() => handleSizeSelect(size)}
                aria-label={`Select ${size}`}
                aria-pressed={selectedSize === size}
                type="button"
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        <div className="product_quantity">
          <div className="quantity-selector">
            <button
              className="quantity-btn decrement"
              onClick={decrementQuantity}
              disabled={quantity === 1}
              type="button"
            >
              -
            </button>
            <div className="quantity-display">{quantity}</div>
            <button className="quantity-btn increment" onClick={incrementQuantity} type="button">
              +
            </button>
          </div>
          <div className="add-to-cart">
            <button className="add-to-cart-btn" type="button">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

ProductDetails.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    thumb: PropTypes.string,
    price: PropTypes.number.isRequired,
    discountedPrice: PropTypes.number,
    discount: PropTypes.number,
    rating: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.string),
    colors: PropTypes.arrayOf(PropTypes.string),
    sizes: PropTypes.arrayOf(PropTypes.string),
    count: PropTypes.number,
    quantity: PropTypes.number,
    isNew: PropTypes.bool,
    isSale: PropTypes.bool,
  }).isRequired,
};

export default ProductDetails;
