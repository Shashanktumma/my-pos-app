import React from 'react';
import { Box, Typography, Table, Sheet } from '@mui/joy';
import apiPayload from './api_payload.json';

const OrdersPage = () => {
  const orders = apiPayload.orders;

  return (
    <Box
      sx={{
        padding: '5px',
        marginLeft: '20px',
        marginRight: '320px',
        marginTop: '120px',
        background: '#fff',
        borderRadius: '10px',
        width:"97%",
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}
    >
      <Typography
        level="h3"
        sx={{
          color: '#333',
          fontFamily: 'Roboto, sans-serif',
          fontSize: '24px',
          fontWeight: 600,
          mb: 2,
        }}
      >
        Orders
      </Typography>
      <Sheet>
        <Table
          borderAxis="both"
          stripe="odd"
          sx={{
            '& th': {
              backgroundColor: '#f5f7fa',
              color: '#333',
              fontFamily: 'Roboto, sans-serif',
              fontSize: '14px',
              fontWeight: 500,
              padding: '10px',
            },
            '& td': {
              color: '#666',
              fontFamily: 'Roboto, sans-serif',
              fontSize: '14px',
              padding: '10px',
            },
          }}
        >
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Date</th>
              <th>Customer ID</th>
              <th>Category</th>
              <th>Menu</th>
              <th>Amount</th>
              <th>Orders</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>{order.id}</td>
                <td>{order.date}</td>
                <td>{order.customer_id || 'Unknown'}</td>
                <td>{order.category}</td>
                <td>{order.menu}</td>
                <td>${order.amount.toFixed(2)}</td>
                <td>{order.orders}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Sheet>
    </Box>
  );
};

export default OrdersPage;