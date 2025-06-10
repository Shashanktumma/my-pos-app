import React, { useState } from 'react';
import { Box, Input, Table, Button } from '@mui/joy';
import mockData from './api_payload.json';

const CustomerPage = () => {
  const [search, setSearch] = useState('');
  const filteredCustomers = mockData.customers.filter((customer) =>
    customer.mobile.includes(search)
  );

  return (
    <Box>
      <Input
        placeholder="Search customers..."
        startDecorator={<span>🔍</span>}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ marginBottom: '20px' }}
      />
      <Button
        variant="solid"
        color="success"
        sx={{ float: 'right', mb: 2,mt:4 }}
      >
        Add New Customer
      </Button>
      <Table sx={{ background: '#fff', borderRadius: '8px' ,m:2,}}>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Mobile Number</th>
            <th>Address</th>
            <th>Orders</th>
          </tr>
        </thead>
        <tbody>
          {filteredCustomers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.name}</td>
              <td>{customer.mobile}</td>
              <td>{customer.address}</td>
              <td>{customer.orders}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Box>
  );
};

export default CustomerPage;