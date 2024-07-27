// frontend/src/components/CreateUserModal.js
import React, { useState } from 'react';
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

const CreateUserModal = ({ open, onClose, onSave }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');

  const handleSave = () => {
    onSave({ name, email, age, phone });
    setName('');
    setEmail('');
    setAge('');
    setPhone('');
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <h2>Create User</h2>
        <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth margin="normal" />
        <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth margin="normal" />
        <TextField label="Age" value={age} onChange={(e) => setAge(e.target.value)} fullWidth margin="normal" />
        <TextField label="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} fullWidth margin="normal" />
        <Button variant="contained" color="primary" onClick={handleSave} fullWidth>Create</Button>
      </Box>
    </Modal>
  );
};

export default CreateUserModal;
