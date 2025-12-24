import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button
} from '@mui/material';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    onLogin(email);
    navigate('/dashboard');
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#f5f5f5"
    >
      <Paper
        elevation={6}
        sx={{
          p: 4,
          borderRadius: 2,
          width: 350,
        }}
      >
        <Typography
          variant="h5"
          align="center"
          gutterBottom
          sx={{ color: '#333', mb: 3 }}
        >
          Đăng Nhập
        </Typography>

        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          margin="normal"
        />

        <TextField
          label="Mật khẩu"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin="normal"
        />

        <Button
          variant="contained"
          fullWidth
          sx={{
            mt: 2,
            py: 1.5,
            fontWeight: 'bold',
            backgroundColor: '#667eea',
            '&:hover': {
              backgroundColor: '#5a67d8',
            },
          }}
          onClick={handleLogin}
        >
          Đăng Nhập
        </Button>
      </Paper>
    </Box>
  );
}

export default Login;