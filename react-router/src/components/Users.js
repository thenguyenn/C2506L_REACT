import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Container,
  Box,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Chip
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function Users({ onLogout }) {
  const navigate = useNavigate();

  const users = [
    { id: 1, name: 'Nguyễn Văn A', email: 'nguyenvana@email.com', role: 'Admin' },
    { id: 2, name: 'Trần Thị B', email: 'tranthib@email.com', role: 'User' },
    { id: 3, name: 'Lê Văn C', email: 'levanc@email.com', role: 'User' },
    { id: 4, name: 'Phạm Thị D', email: 'phamthid@email.com', role: 'Manager' },
    { id: 5, name: 'Hoàng Văn E', email: 'hoangvane@email.com', role: 'User' },
  ];

  const getRoleColor = (role) => {
    switch (role) {
      case 'Admin':
        return 'error';
      case 'Manager':
        return 'warning';
      default:
        return 'default';
    }
  };

  return (
    <Box>
      <AppBar position="static" sx={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button variant="outlined" color="inherit" onClick={() => navigate('/dashboard')}>Dashboard</Button>
            <Button variant="outlined" color="inherit" onClick={() => navigate('/products')}>Quản lý sản phẩm</Button>
            <Button variant="outlined" color="inherit" onClick={() => navigate('/users')}>Quản lý người dùng</Button>
          </Box>
          <Button
            variant="contained"
            sx={{ backgroundColor: '#ff4757', '&:hover': { backgroundColor: '#e84118' } }}
            onClick={onLogout}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 5 }}>
        <Typography variant="h4" gutterBottom sx={{ color: '#333' }}>
          Quản lý Users
        </Typography>

        <Paper elevation={3} sx={{ borderRadius: 2, overflow: 'hidden' }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#2ecc71' }}>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>ID</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Tên</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Email</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Vai Trò</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Hành Động</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user, index) => (
                <TableRow
                  key={user.id}
                  sx={{ backgroundColor: index % 2 === 0 ? '#f9f9f9' : 'white' }}
                >
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <Chip
                      label={user.role}
                      color={getRoleColor(user.role)}
                      sx={{ fontWeight: 'bold' }}
                    />
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      size="small"
                      startIcon={<EditIcon />}  
                      sx={{ mr: 1, backgroundColor: '#3498db', '&:hover': { backgroundColor: '#2980b9' } }}
                    >
                      Sửa
                    </Button>
                    <Button
                      variant="contained"
                      size="small"
                      startIcon={<DeleteIcon />}
                      sx={{ backgroundColor: '#e74c3c', '&:hover': { backgroundColor: '#c0392b' } }}
                    >
                      Xóa
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Container>
    </Box>
  );
}

export default Users;