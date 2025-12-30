import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Avatar,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";
import axios from "axios";

const drawerWidth = 240;

function Dashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("users");
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [editingUser, setEditingUser] = useState(null);
  const [editingProduct, setEditingProduct] = useState(null);
  const [userFormData, setUserFormData] = useState({});
  const [productFormData, setProductFormData] = useState({});

  // Fetch Users
  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // Fetch Products
  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    if (activeTab === "users") {
      fetchUsers();
    } else if (activeTab === "products") {
      fetchProducts();
    }
  }, [activeTab]);

  const handleDeleteUser = (userId) => {
    setUsers((prev) => prev.filter((user) => user.id !== userId));
  };

  const handleDeleteProduct = (productId) => {
    setProducts((prev) => prev.filter((product) => product.id !== productId));
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  // Handle User Edit
  const handleEditUser = (user) => {
    setEditingUser(user);
    setUserFormData({
      name: user.name,
      email: user.email,
      phone: user.phone,
      website: user.website,
    });
  };

  const handleUpdateUser = () => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === editingUser.id
          ? { ...user, ...userFormData }
          : user
      )
    );
    setEditingUser(null);
    setUserFormData({});
  };

  // Handle Product Edit
  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setProductFormData({
      title: product.title,
      price: product.price,
      category: product.category,
      description: product.description,
    });
  };

  const handleUpdateProduct = () => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === editingProduct.id
          ? { ...product, ...productFormData, price: parseFloat(productFormData.price) }
          : product
      )
    );
    setEditingProduct(null);
    setProductFormData({});
  };

  const menuItems = [
    { id: "users", label: "Quản lý người dùng", icon: <PeopleIcon /> },
    { id: "products", label: "Quản lý sản phẩm", icon: <ShoppingCartIcon /> },
  ];

  const renderUsersTable = () => {
    return (
      <Box>
        <Typography variant="h4" gutterBottom>
          Quản lý người dùng
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Website</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>{user.website}</TableCell>
                  <TableCell>
                    <IconButton
                      color="primary"
                      onClick={() => handleEditUser(user)}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      color="error"
                      onClick={() => handleDeleteUser(user.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    );
  };

  const renderProductsTable = () => {
    return (
      <Box>
        <Typography variant="h4" gutterBottom>
          Quản lý sản phẩm
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>
                    <Avatar
                      src={product.image}
                      alt={product.title}
                      sx={{ width: 50, height: 50 }}
                      variant="square"
                    />
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" noWrap sx={{ maxWidth: 200 }}>
                      {product.title}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6" color="primary">
                      ${product.price}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Chip label={product.category} size="small" />
                  </TableCell>
                  <TableCell>
                    <IconButton
                      color="primary"
                      onClick={() => handleEditProduct(product)}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      color="error"
                      onClick={() => handleDeleteProduct(product.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    );
  };

  return (
    <Box sx={{ display: "flex" }}>
      {/* Sidebar */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Box sx={{ p: 2 }}>
          <Typography variant="h6" noWrap component="div">
            <DashboardIcon sx={{ mr: 1, verticalAlign: "middle" }} />
            My Shop Admin
          </Typography>
        </Box>
        <Divider />

        <List sx={{ flexGrow: 1 }}>
          {menuItems.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton
                selected={activeTab === item.id}
                onClick={() => setActiveTab(item.id)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider />
        <ListItem disablePadding>
          <ListItemButton onClick={handleLogout}>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Đăng xuất" />
          </ListItemButton>
        </ListItem>
      </Drawer>

      {/* Main content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "background.default",
          p: 3,
        }}
      >
        {activeTab === "users" && renderUsersTable()}
        {activeTab === "products" && renderProductsTable()}
      </Box>

      {/* User Edit Dialog */}
      <Dialog
        open={!!editingUser}
        onClose={() => setEditingUser(null)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>Chỉnh sửa người dùng</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Tên"
                value={userFormData.name || ""}
                onChange={(e) =>
                  setUserFormData({ ...userFormData, name: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email"
                value={userFormData.email || ""}
                onChange={(e) =>
                  setUserFormData({ ...userFormData, email: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Số điện thoại"
                value={userFormData.phone || ""}
                onChange={(e) =>
                  setUserFormData({ ...userFormData, phone: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Website"
                value={userFormData.website || ""}
                onChange={(e) =>
                  setUserFormData({ ...userFormData, website: e.target.value })
                }
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditingUser(null)}>Hủy</Button>
          <Button onClick={handleUpdateUser} variant="contained">
            Cập nhật
          </Button>
        </DialogActions>
      </Dialog>

      {/* Product Edit Dialog */}
      <Dialog
        open={!!editingProduct}
        onClose={() => setEditingProduct(null)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>Chỉnh sửa sản phẩm</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Tên sản phẩm"
                value={productFormData.title || ""}
                onChange={(e) =>
                  setProductFormData({ ...productFormData, title: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Giá"
                type="number"
                value={productFormData.price || ""}
                onChange={(e) =>
                  setProductFormData({ ...productFormData, price: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Danh mục"
                value={productFormData.category || ""}
                onChange={(e) =>
                  setProductFormData({ ...productFormData, category: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Mô tả"
                multiline
                rows={3}
                value={productFormData.description || ""}
                onChange={(e) =>
                  setProductFormData({ ...productFormData, description: e.target.value })
                }
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditingProduct(null)}>Hủy</Button>
          <Button onClick={handleUpdateProduct} variant="contained">
            Cập nhật
          </Button>
        </DialogActions>
      </Dialog>

      {/* User Detail Dialog (View only) */}
      <Dialog
        open={!!selectedUser}
        onClose={() => setSelectedUser(null)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>Chi tiết người dùng</DialogTitle>
        <DialogContent>
          {selectedUser && (
            <Grid container spacing={2} sx={{ mt: 1 }}>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1">
                  ID: {selectedUser.id}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1">
                  Name: {selectedUser.name}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1">
                  Username: {selectedUser.username}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1">
                  Email: {selectedUser.email}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1">
                  Phone: {selectedUser.phone}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1">
                  Website: {selectedUser.website}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1">
                  Address: {selectedUser.address?.street},{" "}
                  {selectedUser.address?.city}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1">
                  Company: {selectedUser.company?.name}
                </Typography>
              </Grid>
            </Grid>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setSelectedUser(null)}>Đóng</Button>
        </DialogActions>
      </Dialog>

      {/* Product Detail Dialog (View only) */}
      <Dialog
        open={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>Chi tiết sản phẩm</DialogTitle>
        <DialogContent>
          {selectedProduct && (
            <Box>
              <Box display="flex" justifyContent="center" mb={2}>
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  style={{ maxHeight: 250, objectFit: "contain" }}
                />
              </Box>
              <Typography variant="h6" gutterBottom>
                {selectedProduct.title}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {selectedProduct.description}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Category: {selectedProduct.category}
              </Typography>
              <Typography variant="h6" color="primary" sx={{ mt: 2 }}>
                Price: ${selectedProduct.price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Rating: {selectedProduct.rating?.rate} (
                {selectedProduct.rating?.count} reviews)
              </Typography>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setSelectedProduct(null)}>Đóng</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Dashboard;
