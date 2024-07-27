// frontend/src/components/UpdateUserModal.js
import React, { useState, useEffect } from 'react';
import { Modal, Box, TextField, Button } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const UpdateUserModal = ({ open, onClose, user, onSave }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setAge(user.age);
      setPhone(user.phone);
    }
  }, [user]);

  const handleSave = () => {
    onSave({ ...user, name, email, age, phone });
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <h2>Update User</h2>
        <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth margin="normal" />
        <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth margin="normal" />
        <TextField label="Age" value={age} onChange={(e) => setAge(e.target.value)} fullWidth margin="normal" />
        <TextField label="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} fullWidth margin="normal" />
        <Button variant="contained" color="primary" onClick={handleSave} fullWidth>Update</Button>
      </Box>
    </Modal>
  );
};

export default UpdateUserModal;
