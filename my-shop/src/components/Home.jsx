import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CircularProgress,
  Box,
  Button,
  Modal,
  Alert
} from '@mui/material';

function Home({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [addedToCart, setAddedToCart] = useState(null);

  async function fetchProducts() {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedToCart(product.id);
    setTimeout(() => setAddedToCart(null), 2000);
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom align="center">
        Danh sách sản phẩm
      </Typography>

      {/* Thông báo thêm vào giỏ hàng */}
      {addedToCart && (
        <Alert severity="success" sx={{ mb: 2 }}>
          Đã thêm sản phẩm vào giỏ hàng!
        </Alert>
      )}

      {/* Danh sách sản phẩm */}
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id} sx={{ display: 'flex' }}>
            <Card sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.title}
                sx={{ objectFit: 'contain', p: 2 }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom noWrap>
                  {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.category}
                </Typography>
                <Typography variant="subtitle1" color="primary" sx={{ mt: 1 }}>
                  ${product.price}
                </Typography>
              </CardContent>
              <Box p={2} display="flex" gap={1}>
                <Button
                  variant="contained"
                  color="success"
                  fullWidth
                  onClick={() => handleAddToCart(product)}
                >
                  Thêm vào giỏ
                </Button>
                <Button
                  variant="outlined"
                  fullWidth
                  onClick={() => setSelectedProduct(product)}
                >
                  Xem chi tiết
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Modal chi tiết sản phẩm */}
      <Modal
        open={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        aria-labelledby="product-detail-title"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            maxWidth: 600,
            width: '90%',
          }}
        >
          {selectedProduct && (
            <>
              <Typography id="product-detail-title" variant="h5" gutterBottom>
                {selectedProduct.title}
              </Typography>
              <Box display="flex" justifyContent="center" mb={2}>
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  style={{ maxHeight: 250, objectFit: 'contain' }}
                />
              </Box>
              <Typography variant="body1" gutterBottom>
                {selectedProduct.description}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Category: {selectedProduct.category}
              </Typography>
              <Typography variant="h6" color="primary" sx={{ mt: 2 }}>
                ${selectedProduct.price}
              </Typography>
              <Box mt={2}>
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => {
                    handleAddToCart(selectedProduct);
                    setSelectedProduct(null);
                  }}
                >
                  Thêm vào giỏ
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
}

export default Home;