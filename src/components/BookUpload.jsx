import React from 'react';
import { Box, TextField, Button, MenuItem, Typography } from '@mui/material';
import { CloudUpload } from '@mui/icons-material';

const BookUpload = () => {
  const [bookName, setBookName] = React.useState('');
  const [quantity, setQuantity] = React.useState('');
  const [rentPrice, setRentPrice] = React.useState('');
  const [bookCover, setBookCover] = React.useState(null);

  const handleBookCoverUpload = (event) => {
    setBookCover(event.target.files[0]);
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Upload New Book
      </Typography>
      <TextField
        label="Search book by name or Author"
        variant="outlined"
        fullWidth
        select
        value={bookName}
        onChange={(e) => setBookName(e.target.value)}
        sx={{ marginBottom: 2 }}
      >
        {/* Example options, you should fetch and map your options here */}
        <MenuItem value="Book 1">Book 1</MenuItem>
        <MenuItem value="Book 2">Book 2</MenuItem>
        <MenuItem value="Add">Add</MenuItem>
      </TextField>
      <TextField
        label="Book Quantity"
        variant="outlined"
        fullWidth
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label="Rent price for 2 weeks"
        variant="outlined"
        fullWidth
        value={rentPrice}
        onChange={(e) => setRentPrice(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <Button
        variant="contained"
        component="label"
        startIcon={<CloudUpload />}
        fullWidth
        sx={{ marginBottom: 2 }}
      >
        Upload Book Cover
        <input
          type="file"
          hidden
          onChange={handleBookCoverUpload}
        />
      </Button>
      <Button
        variant="contained"
        color="primary"
        fullWidth
      >
        Submit
      </Button>
    </Box>
  );
};

export default BookUpload;
