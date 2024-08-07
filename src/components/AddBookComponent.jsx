import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material';

const AddBookModal = ({ open, handleClose }) => {
  const [bookName, setBookName] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [category, setCategory] = useState('');

  const handleAddBook = () => {
    // Handle the add book logic here
    console.log('Book Added:', { bookName, authorName, category });
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add Book</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Book Name"
          type="text"
          fullWidth
          value={bookName}
          onChange={(e) => setBookName(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Author Name"
          type="text"
          fullWidth
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Category"
          type="text"
          fullWidth
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleAddBook} color="primary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddBookModal;
