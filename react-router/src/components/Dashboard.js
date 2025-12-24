import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Container,
  Box
} from '@mui/material';

function Dashboard({ email, onLogout }) {
  const navigate = useNavigate();

  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          background: 'linear-gradient(135deg, #667eea 0%, #605b64ff 100%)',
          boxShadow: 2,
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              variant="outlined"
              color="inherit"
              onClick={() => navigate('/dashboard')}
            >
              Dashboard
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              onClick={() => navigate('/products')}
            >
              Quản lý sản phẩm
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              onClick={() => navigate('/users')}
            >
              Quản lý người dùng
            </Button>
          </Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#ff4757',
              '&:hover': { backgroundColor: '#e84118' },
            }}
            onClick={onLogout}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 5, maxWidth: '1200px' }}>
        <Typography variant="h4" gutterBottom sx={{ color: '#333' }}>
          Chào mừng bạn đến Dashboard!
        </Typography>
        <Typography variant="body1" sx={{ color: '#666', fontSize: '16px' }}>
          Email đăng nhập: <strong>{email}</strong>
        </Typography>
      </Container>
    </Box>
  );
}

export default Dashboard;