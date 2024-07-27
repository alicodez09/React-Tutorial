import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Typography, TextField, Button, Grid } from "@mui/material";

function UpdateTodo() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      if (id) {
        try {
          const result = await axios.get(
            `http://localhost:8000/api/v1/todo/get-todo/${id}`
          );
          console.log(result.data,"test")
          setName(result.data.todo.name);
          setEmail(result.data.todo.email);
          setAge(result.data.todo.age);
          setPhone(result.data.todo.phone);

        } catch (err) {
          console.error("Error fetching user:", err);
        }
      } else {
        console.error("User ID is undefined");
      }
    };

    fetchUser();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (id) {
      try {
        const result = await axios.put(
          `http://localhost:8000/api/v1/todo/update-todo/${id}`,
          { name, email, age,phone }
        );
        console.log(result);
        navigate("/");
      } catch (err) {
        console.error("Error updating user:", err);
        alert("Error updating user data. Please try again later.");
      }
    } else {
      console.error("User ID is undefined");
    }
  };


  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h4" align="center" gutterBottom>
            Update User
          </Typography>
          <form onSubmit={handleUpdate}>
            <TextField
              fullWidth
              id="name"
              label="Name"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              margin="normal"
            />
            <TextField
              fullWidth
              id="email"
              label="Email"
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
            />
            <TextField
              fullWidth
              id="age"
              label="Age"
              type="number"
              placeholder="Enter age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              margin="normal"
            />
            <TextField
              fullWidth
              id="phone"
              label="Phone"
              type="text"
              placeholder="Enter Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              margin="normal"
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              Update
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
}

export default UpdateTodo;
