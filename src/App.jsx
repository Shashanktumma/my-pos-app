import React, { useState } from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import { Box } from '@mui/joy';
import Sidebar from './Sidebar';
import TopNav from './Topnav';
import CustomerPage from './CustomerPage';
import OrdersPage from './OrdersPage';
import NewOrderPage from './NewOrderPage';
import HomePage from './HomePage';
import CartProvider from './CartContext';

const App = () => {
  const [activeTab, setActiveTab] = useState('Coffee');
  const [activePage, setActivePage] = useState('Home');

  return (
    <CssVarsProvider>
      <CartProvider>
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', p: '10px' }}>
          <TopNav activePage={activePage} setActivePage={setActivePage} />
          <Box sx={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
            <Box
              sx={{
                flex: 1,
                overflowY: 'auto',
                background: '#f5f7fa',
                ml: '90px',
                borderRadius: '10px',
              }}
            >
              {activePage === 'Home' && <HomePage activeTab={activeTab} />}
              {activePage === 'Customers' && <CustomerPage />}
              {activePage === 'Orders' && <OrdersPage />}
              {activePage === 'New Order' && <NewOrderPage activeTab={activeTab} />}
            </Box>
          </Box>
        </Box>
      </CartProvider>
    </CssVarsProvider>
  );
};

export default App;