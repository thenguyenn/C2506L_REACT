import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";

function Menu({ user, setUser, cartItems = [] }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  if (!user) return null;

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Shop
        </Typography>
        <Box display="flex" alignItems="center" gap={1}>
          {user.role === "user" && (
            <>
              <Button color="inherit" onClick={() => navigate("/home")}>
                Sản phẩm
              </Button>
              <Button 
                color="inherit" 
                onClick={() => navigate("/cart")}
                startIcon={
                  <Badge badgeContent={cartItems.length} color="error">
                    <ShoppingCartIcon />
                  </Badge>
                }
              >
                Giỏ hàng
              </Button>
            </>
          )}
          {user.role === "admin" && (
            <Button color="inherit" onClick={() => navigate("/dashboard")}>
              Quản lý
            </Button>
          )}
          <Typography variant="body2" sx={{ mx: 2 }}>
            Xin chào, {user.role === "admin" ? "Admin" : "User"}
          </Typography>
          <Button color="inherit" onClick={handleLogout}>
            Đăng xuất
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Menu;