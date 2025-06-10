import React, { useState } from 'react';
import { Box, Stack, Chip, Typography } from '@mui/joy';
import ProductCard from './ProductCard';
import CartSidebar from './CartSidebar';
import mockData from './api_payload.json';

const NewOrderPage = ({ activeTab }) => {
  const [categoryFilter, setCategoryFilter] = useState('All');

  // Define category list from mockData.categories
  const categoryList = activeTab === 'Coffee'
    ? [{ id: 'all', name: 'All' }, ...(mockData.categories?.Coffee?.filters || [])]
    : [{ id: 'all', name: 'All' }, ...(mockData.categories?.Food?.filters || [])];

  // Get products based on activeTab
  const products = activeTab === 'Coffee' ? mockData.products?.coffee || [] : mockData.products?.food || [];

  // Filter products based on categoryFilter
  const filteredProducts = categoryFilter === 'All' || categoryFilter === 'all'
    ? products
    : products.filter((product) => product.filter === categoryFilter);

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Box
        sx={{
          flex: 1,
          marginLeft:"10px", // Space for Sidebar (100px on larger screens)
          marginRight:2, // Space for CartSidebar (320px on larger screens)
          marginTop: '90px', // Space below TopNav
          padding:"0px",
          background: '#fff',
          borderRadius: '10px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        }}
      >
        {/* Category Filters */}
        <Stack direction="row" spacing={1} mt={2} ml={3} mb={3} sx={{ flexWrap: 'wrap', gap: 1 }}>
          {categoryList.map((cat) => (
            <Chip
              key={cat.id}
              variant={categoryFilter === cat.id ? 'solid' : 'outlined'}
              color="neutral"
              onClick={() => setCategoryFilter(cat.id)}
              sx={{
                borderRadius: '50px',
                fontFamily: 'Roboto, sans-serif',
                fontSize: { xs: '12px', sm: '14px' },
                padding: { xs: '5px 10px', sm: '5px 10px' },
                backgroundColor: categoryFilter === cat.id ? '#ff5722' : 'transparent',
                color: categoryFilter === cat.id ? '#fff' : '#666',
                '&:hover': {
                  backgroundColor: categoryFilter === cat.id ? '#e64a19' : '#f5f5f5',
                },
              }}
            >
              {cat.name}
            </Chip>
          ))}
        </Stack>

        {/* Product Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(auto-fit, 215px)', // Smaller cards on mobile
              sm: 'repeat(auto-fit, 215px)', // Default card width on larger screens
            },
            justifyContent: 'center',
            ml:"50px",
            mb:"30px",
            gap:10,
            maxWidth: '70%',
          }}
        >
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} category={activeTab} />
            ))
          ) : (
            <Box sx={{ gridColumn: 'span 4', textAlign: 'center', py: 3 }}>
              <Typography level="body1" color="textSecondary">
                No products found for this category.
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
      <CartSidebar />
    </Box>
  );
};

export default NewOrderPage;