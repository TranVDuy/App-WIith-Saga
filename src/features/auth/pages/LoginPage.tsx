import React from 'react';
import { Box, Button, Paper, Typography } from '@mui/material';
import { useAppDispatch } from 'app/hooks';
import { authAction } from '../authSlice';


const LoginPage = () => {

  const dispatch = useAppDispatch();

  const handleLogin = () => {
    dispatch(authAction.login({
      userName: "Duyy",
      password: "123"
    }));
  };

  const handleLogout = () => {
    dispatch(authAction.logout());
  }
  
  return (
    <div>
      <Paper>
        <Typography variant="h5" component="h1">Student Management</Typography>
        <Box mt={4}>
          <Button fullWidth variant='outlined' color='primary' onClick={handleLogin}>Login</Button>
          <Button fullWidth variant='outlined' color='success' onClick={handleLogout}>Logout</Button>
        </Box>
      </Paper>
    </div>
  )
}

export default LoginPage;