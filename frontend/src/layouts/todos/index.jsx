import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

function Index() {
  const [todos, setTodos] = useState([]);

  // Get All Todos
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("http://localhost:8000/api/v1/todo/get-todos");
        console.log(result.data);
        setTodos(result.data.todos);
      } catch (err) {
        console.error("Error fetching todos:", err);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:8000/api/v1/todo/delete-todo/${id}`);
      console.log(res);
      setTodos(todos.filter((todo) => todo._id !== id));
    } catch (err) {
      console.error("Error deleting user:", err);
    }
  };

  return (
    <Container>
        <Button variant="contained" color="primary" component={Link} to="/create-todo" mt={5}>
          Create
        </Button>
      <Box mt={5} display="flex" flexDirection="column" alignItems="center">
        <TableContainer component={Paper} mt={2}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Phone</TableCell>

                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {todos.map((todo, index) => (
                <TableRow key={index}>
                  <TableCell>{todo.name}</TableCell>
                  <TableCell>{todo.email}</TableCell>
                  <TableCell>{todo.age}</TableCell>
                  <TableCell>{todo.phone}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      component={Link}
                      to={`/update-todo/${todo._id}`}
                      sx={{ mr: 1 }}
                    >
                      Update
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => handleDelete(todo._id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
}

export default Index;
