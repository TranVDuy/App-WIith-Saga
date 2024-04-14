import React from 'react';
import { Box, Button, CircularProgress, Paper, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { authAction } from '../authSlice';


const LoginPage = () => {

  const dispatch = useAppDispatch();
  const isLogging = useAppSelector(state => state.auth.logging)

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
          <Button fullWidth variant='outlined' color='primary' onClick={handleLogin}>
           {isLogging && <CircularProgress size={20} color='primary'/> } Login
          </Button>
          <Button fullWidth variant='outlined' color='success' onClick={handleLogout}>Logout</Button>
        </Box>
      </Paper>
    </div>
  )
}

export default LoginPage;