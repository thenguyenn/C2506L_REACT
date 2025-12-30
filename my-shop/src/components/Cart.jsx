import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  CardMedia, 
  Button, 
  Grid,
  Divider,
  Paper,
  IconButton
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function Cart({ cartItems, removeFromCart, updateQuantity, clearCart }) {
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(id);
    } else {
      updateQuantity(id, newQuantity);
    }
  };

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom align="center">
        Giỏ hàng của bạn
      </Typography>
      
      {cartItems.length === 0 ? (
        <Paper elevation={2} sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="h6" color="text.secondary">
            Giỏ hàng trống
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Hãy thêm sản phẩm vào giỏ hàng để tiếp tục mua sắm
          </Typography>
        </Paper>
      ) : (
        <>
          <Grid container spacing={3}>
            {cartItems.map((item) => (
              <Grid item xs={12} key={`${item.id}-${item.addedAt}`}>
                <Card>
                  <Box display="flex" p={2}>
                    <CardMedia
                      component="img"
                      sx={{ width: 120, height: 120, objectFit: 'contain' }}
                      image={item.image}
                      alt={item.title}
                    />
                    <CardContent sx={{ flex: 1 }}>
                      <Typography variant="h6" gutterBottom>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        {item.category}
                      </Typography>
                      <Typography variant="h6" color="primary">
                        ${item.price}
                      </Typography>
                    </CardContent>
                    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" p={2}>
                      <Box display="flex" alignItems="center" mb={2}>
                        <IconButton 
                          size="small" 
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        >
                          <RemoveIcon />
                        </IconButton>
                        <Typography variant="h6" sx={{ mx: 2, minWidth: 30, textAlign: 'center' }}>
                          {item.quantity}
                        </Typography>
                        <IconButton 
                          size="small" 
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        >
                          <AddIcon />
                        </IconButton>
                      </Box>
                      <Typography variant="subtitle1" fontWeight="bold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </Typography>
                      <IconButton 
                        color="error" 
                        onClick={() => removeFromCart(item.id)}
                        sx={{ mt: 1 }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
          
          <Divider sx={{ my: 3 }} />
          
          <Paper elevation={2} sx={{ p: 3 }}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
              <Typography variant="h5">
                Tổng cộng: ${totalPrice.toFixed(2)}
              </Typography>
              <Box>
                <Button 
                  variant="outlined" 
                  color="error" 
                  onClick={clearCart}
                  sx={{ mr: 2 }}
                >
                  Xóa tất cả
                </Button>
                <Button variant="contained" color="primary" size="large">
                  Thanh toán
                </Button>
              </Box>
            </Box>
            <Typography variant="body2" color="text.secondary">
              Tổng số sản phẩm: {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
            </Typography>
          </Paper>
        </>
      )}
    </Box>
  );
}

export default Cart;