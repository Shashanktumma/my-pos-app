import React from 'react';
import { Box, Typography } from '@mui/joy';
import { Coffee, LocalBar, Restaurant, Fastfood, BakeryDining, TableRestaurant } from '@mui/icons-material';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { name: 'Coffee', icon: <Coffee />, clickable: true },
    { name: 'Beverages', icon: <LocalBar />, clickable: false },
    { name: 'Food', icon: <Restaurant />, clickable: true },
    { name: 'Appetizer', icon: <Fastfood />, clickable: false },
    { name: 'Bakeries', icon: <BakeryDining />, clickable: false },
    { name: 'Table', icon: <TableRestaurant />, clickable: false },
  ];

  return (
    <Box
      sx={{
        width: '80px',
        background: '#ffffff', // Changed to white background
        padding: '20px 0',
        m:1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'fixed',
        left: '10px',
        top: '80px', // Adjusted to create a gap (TopNav height 50px + 10px margin + 20px extra gap)
        bottom: '10px',
        zIndex: 999,
        borderRadius: '10px', // Confirmed 10px border radius
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}
    >
      {tabs.map((tab) => (
        <Box
          key={tab.name}
          onClick={tab.clickable ? () => setActiveTab(tab.name) : undefined}
          sx={{
            margin: '15px 0',
            cursor: tab.clickable ? 'pointer' : 'not-allowed',
            background: activeTab === tab.name ? '#4caf50' : 'transparent',
            borderRadius: '10px',
            padding: '10px',
            width: '60px',
            height: '60px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: tab.clickable ? 1 : 0.5, // Reduce opacity for disabled tabs
            '&:hover': {
              background: tab.clickable && activeTab !== tab.name ? '#e0e0e0' : activeTab === tab.name ? '#4caf50' : 'transparent',
            },
          }}
        >
          <Box
            sx={{
              fontSize: '24px',
              color: activeTab === tab.name ? 'white' : '#666',
            }}
          >
            {tab.icon}
          </Box>
          <Typography
            level="body2"
            sx={{
              color: activeTab === tab.name ? 'white' : '#666',
              fontSize: '10px',
              textAlign: 'center',
              mt: 0.5,
              fontFamily: 'Roboto, sans-serif',
            }}
          >
            {tab.name}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Sidebar;