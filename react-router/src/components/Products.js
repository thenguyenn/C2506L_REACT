import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Container,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function Products({ onLogout }) {
  const navigate = useNavigate();

  const products = [
    { id: 1, name: 'Laptop Dell XPS 13', price: '25.000.000đ', stock: 15 },
    { id: 2, name: 'iPhone 15 Pro', price: '28.000.000đ', stock: 20 },
    { id: 3, name: 'Samsung Galaxy S24', price: '22.000.000đ', stock: 12 },
    { id: 4, name: 'AirPods Pro', price: '5.500.000đ', stock: 30 },
    { id: 5, name: 'iPad Air', price: '15.000.000đ', stock: 8 },
  ];

  return (
    <Box>
      <AppBar position="static" sx={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button variant="outlined" color="inherit" onClick={() => navigate('/dashboard')}>
              Dashboard
            </Button>
            <Button variant="outlined" color="inherit" onClick={() => navigate('/products')}>
              Quản lý sản phẩm
            </Button>
            <Button variant="outlined" color="inherit" onClick={() => navigate('/users')}>
              Quản lý người dùng
            </Button>
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
          Quản lý Sản Phẩm
        </Typography>

        <Paper elevation={3} sx={{ borderRadius: 2, overflow: 'hidden' }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#667eea' }}>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>ID</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Tên Sản Phẩm</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Giá</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Tồn Kho</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Hành Động</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product, index) => (
                <TableRow
                  key={product.id}
                  sx={{ backgroundColor: index % 2 === 0 ? '#f9f9f9' : 'white' }}
                >
                  <TableCell>{product.id}</TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell sx={{ color: '#667eea', fontWeight: 'bold' }}>
                    {product.price}
                  </TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      size="small"
                      startIcon={<EditIcon />}  
                      sx={{ backgroundColor: '#3498db', mr: 1, '&:hover': { backgroundColor: '#2980b9' } }}
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

export default Products;