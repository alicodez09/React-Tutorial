import React from 'react';
import { AppBar, Toolbar, Typography, List, ListItem, ListItemText, Box } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6" component="div">
            React
          </Typography>
        </Box>
        <List sx={{ display: 'flex', flexGrow: 1, justifyContent: 'flex-end' }}>
          <ListItem sx={{ width: 'auto',cursor:"pointer" }} >
          <Typography>Home</Typography>

          </ListItem>
          <ListItem sx={{ width: 'auto',cursor:"pointer" }} >
          <Typography>About</Typography>

          </ListItem>
          <ListItem sx={{ width: 'auto',cursor:"pointer" }} >
          <Typography>Services</Typography>
          </ListItem>
          <ListItem sx={{ width: 'auto' ,cursor:"pointer"}} >
            <Typography>Contact</Typography>
          </ListItem>
        </List>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
