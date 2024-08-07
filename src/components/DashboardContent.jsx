import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const data = [
  { name: 'Fiction', value: 54 },
  { name: 'Self Help', value: 20 },
  { name: 'Business', value: 26 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const DashboardContent = () => {
  const chartData = [
    { name: 'Mar', lastYear: 100000, thisYear: 120000 },
    { name: 'Apr', lastYear: 120000, thisYear: 130000 },
    { name: 'May', lastYear: 150000, thisYear: 170000 },
    { name: 'Jun', lastYear: 140000, thisYear: 150000 },
    { name: 'Jul', lastYear: 160000, thisYear: 180000 },
    { name: 'Aug', lastYear: 170000, thisYear: 190000 },
    { name: 'Sep', lastYear: 180000, thisYear: 200000 },
    { name: 'Oct', lastYear: 200000, thisYear: 220000 },
  ];

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" gutterBottom>Owner/Dashboard</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">This Month Statistics</Typography>
            <Typography variant="h4">ETB 9460.00 <span style={{ color: 'red' }}>1.5%</span></Typography>
            <Typography>Compared to ETB8940 last month</Typography>
            <Typography>Last Month Income ETB 25658.00</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Available Books</Typography>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie data={data} cx="50%" cy="50%" labelLine={false} label outerRadius={80} dataKey="value">
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Live Book Status</Typography>
            <table>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Book no.</th>
                  <th>Book Name</th>
                  <th>Status</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { id: 1, bookNo: 6465, name: 'Derto Gada', status: 'Rented', price: '40 Birr' },
                  { id: 2, bookNo: 6465, name: 'Fikr Eske Mekabr', status: 'Rented', price: '40 Birr' },
                  { id: 3, bookNo: 6465, name: 'The Power of Now', status: 'Rented', price: '40 Birr' },
                  { id: 4, bookNo: 5685, name: 'Derto Gada', status: 'Free', price: '0.0 Birr' },
                  { id: 5, bookNo: 5685, name: 'Derto Gada', status: 'Free', price: '0.0 Birr' },
                  { id: 6, bookNo: 1755, name: 'Derto Gada', status: 'Free', price: '0.0 Birr' },
                ].map((book) => (
                  <tr key={book.id}>
                    <td>{book.id}</td>
                    <td>{book.bookNo}</td>
                    <td>{book.name}</td>
                    <td>{book.status}</td>
                    <td>{book.price}</td>
                    <td>
                      <IconButton><EditIcon /></IconButton>
                      <IconButton><DeleteIcon /></IconButton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Earning Summary</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="thisYear" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="lastYear" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardContent;
