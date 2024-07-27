import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Paper, Container } from '@mui/material';
import CreateUserModal from './CreateUserModal';
import UpdateUserModal from './UpdateUserModal';
import axios from 'axios';

const Index = () => {
  const [users, setUsers] = useState([]);
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await axios.get('http://localhost:8000/api/v1/todo/get-todos');
    setUsers(response.data.todos);
  };

  const handleCreate = async (user) => {
    await axios.post('http://localhost:8000/api/v1/todo/create-todo', user);
    fetchUsers();
    setOpenCreateModal(false);
  };

  const handleUpdate = async (user) => {
    await axios.put(`http://localhost:8000/api/v1/todo/update-todo/${user._id}`, user);
    fetchUsers();
    setOpenUpdateModal(false);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8000/api/v1/todo/delete-todo/${id}`);
    fetchUsers();
  };

  return (
    <Container>
      <Button variant="contained" color="primary" onClick={() => setOpenCreateModal(true)} style={{margin:"1rem",marginTop:"3rem"}}>
        CREATE
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow style={{background:"#1565C0"}}>
              <TableCell style={{color:"white"}}>Name</TableCell>
              <TableCell style={{color:"white"}}>Email</TableCell>
              <TableCell style={{color:"white"}}>Age</TableCell>
              <TableCell style={{color:"white"}}>Phone</TableCell>
              <TableCell style={{color:"white"}}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map(user => (
              <TableRow key={user._id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.age}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>
                  <Button variant='contained' color="primary"  sx={{ mr: 1 }}onClick={() => { setSelectedUser(user); setOpenUpdateModal(true); }}>UPDATE</Button>
                  <Button variant='contained' color="error" onClick={() => handleDelete(user._id)}>DELETE</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <CreateUserModal open={openCreateModal} onClose={() => setOpenCreateModal(false)} onSave={handleCreate} />
      {selectedUser && <UpdateUserModal open={openUpdateModal} onClose={() => setOpenUpdateModal(false)} user={selectedUser} onSave={handleUpdate} />}
    </Container>
  );
};

export default Index;
