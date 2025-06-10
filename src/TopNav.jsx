import React from 'react';
import { Box, Typography, IconButton, Avatar } from '@mui/joy';

const TopNav = ({ activePage, setActivePage }) => {
  const pages = ['Home', 'Orders', 'Customers', 'Cashier', 'New Order'];

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 30px',
        background: '#fff',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        position: 'fixed',
        top: 1,
        left: 0,
        right: 0,
        zIndex: 1000,
        height: '50px',
        borderRadius: '10px',
        margin: '10px',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography level="h1" sx={{ margin: 0, fontSize: '24px', color: '#ff5722' }}>
          Easy <span style={{ color: '#000' }}>POS</span>
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', gap: '15px' }}>
        {pages.map((page) => (
          <Typography
            key={page}
            onClick={() => setActivePage(page)}
            sx={{
              textDecoration: 'none',
              color: activePage === page ? '#ff5722' : '#666',
              fontWeight: 500,
              cursor: 'pointer',
              background: activePage === page ? '#ff5722' : 'transparent',
              borderRadius: '16px',
              padding: '6px 12px',
              color: activePage === page ? '#fff' : '#666',
              fontSize: '14px',
            }}
          >
            {page}
          </Typography>
        ))}
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <IconButton>
          <span>🔔</span>
        </IconButton>
        <Avatar sx={{ width: '28px', height: '28px', background: '#000', color: '#fff' }}>
          A
        </Avatar>
      </Box>
    </Box>
  );
};

export default TopNav;