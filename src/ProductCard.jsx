import React, { useState, useContext } from 'react';
import { Box, Typography, Button } from '@mui/joy';
import { CartContext } from './CartContext';

const ProductCard = ({ product, category }) => {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);
  const [size] = useState('large');

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    if (newQuantity > 0) {
      addToCart(product, size, newQuantity - (quantity > 0 ? quantity : 0));
    }
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      if (newQuantity > 0) {
        addToCart(product, size, newQuantity - quantity);
      }
    }
  };

  return (
    <Box
      sx={{
        background: '#fff',
        borderRadius: '10px',
        padding: '15px',
        textAlign: 'center',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        width: '220px',
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'scale(1.02)',
        },
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{ width: '100%', height: '140px', objectFit: 'cover', borderRadius: '8px' }}
      />
      <Typography
        level="body1"
        sx={{
          mt: 1.5,
          fontWeight: 600,
          fontSize: '16px',
          color: '#333',
          fontFamily: 'Roboto, sans-serif',
        }}
      >
        {product.name}
      </Typography>
      <Typography
        level="body2"
        sx={{
          color: '#ff5722',
          fontWeight: 600,
          fontSize: '14px',
          mt: 0.5,
          fontFamily: 'Roboto, sans-serif',
        }}
      >
        ${product.price.toFixed(2)}
      </Typography>
      {quantity === 0 ? (
        <Button
          onClick={handleIncrement}
          sx={{
            mt: 1.5,
            width: '100%',
            borderRadius: '10px',
            backgroundColor: '#ff5722',
            color: '#fff',
            fontSize: '14px',
            fontFamily: 'Roboto, sans-serif',
            fontWeight: 500,
            padding: '8px 0',
            '&:hover': {
              backgroundColor: '#e64a19',
            },
          }}
        >
          Add to Cart
        </Button>
      ) : (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 1.5, gap: 1.5 }}>
          <Button
            onClick={handleDecrement}
            disabled={quantity === 0}
            sx={{
              minWidth: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: quantity === 0 ? '#e0e0e0' : '#ff5722',
              color: '#fff',
              fontSize: '18px',
              fontFamily: 'Roboto, sans-serif',
              '&:hover': {
                backgroundColor: quantity === 0 ? '#e0e0e0' : '#e64a19',
              },
            }}
          >
            -
          </Button>
          <Typography
            sx={{
              fontSize: '16px',
              fontWeight: 500,
              color: '#333',
              fontFamily: 'Roboto, sans-serif',
            }}
          >
            {quantity}
          </Typography>
          <Button
            onClick={handleIncrement}
            sx={{
              minWidth: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: '#ff5722',
              color: '#fff',
              fontSize: '18px',
              fontFamily: 'Roboto, sans-serif',
              '&:hover': {
                backgroundColor: '#e64a19',
              },
            }}
          >
            +
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default ProductCard;