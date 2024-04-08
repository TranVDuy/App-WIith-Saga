import React from 'react';
import { Box, Button, Paper, Typography } from '@mui/material';


const LoginPage = () => {

  return (
    <div>
      <Paper>
        <Typography variant="h5" component="h1">Student Management</Typography>
        <Box mt={4}>
          <Button fullWidth variant='outlined' color='primary'>Login</Button>
        </Box>
      </Paper>
    </div>
  )
}

export default LoginPage;