import React from 'react';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
} from '@mui/material';
import { styled } from '@mui/system';

const Root = styled(Container)({
  display: 'flex',
  minHeight: '100vh',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#1e2134',
});

const FormContainer = styled(Grid)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#fff',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  overflow: 'hidden',
  minHeight: '80vh',
});

const LeftPane = styled(Grid)({
  background: `url('/pnj.jpg') no-repeat center center`,
  backgroundSize: 'cover',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const RightPane = styled(Grid)({
  padding: '40px',
});

const Login = () => {
  return (
    <Root>
      <FormContainer container>
        <LeftPane item xs={12} md={6} />
        <RightPane item xs={12} md={6}>
          <Typography variant="h4" component="h1" gutterBottom>
            <img src="/logo.png" alt="Logo" width="40px" style={{ marginRight: '10px', verticalAlign: 'middle' }} />
            <span style={{ verticalAlign: 'middle' }}>Book Rent</span>
          </Typography>
          <Typography variant="h6" component="h2" gutterBottom>
            Login
          </Typography>
          <Box component="form" noValidate autoComplete="off">
            <TextField
              fullWidth
              label="Email address"
              margin="normal"
              type="email"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Password"
              margin="normal"
              type="password"
              variant="outlined"
            />
            <FormControlLabel
              control={<Checkbox name="remember" color="primary" />}
              label="Remember me"
            />
            <Button fullWidth variant="contained" color="primary">
              LOGIN
            </Button>
            <Typography variant="body2" align="center" style={{ marginTop: '16px' }}>
              Haven't got an account?{' '}
              <Link href="#" color="primary">
                Sign up
              </Link>
            </Typography>
          </Box>
        </RightPane>
      </FormContainer>
    </Root>
  );
};

export default Login;
