import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); 
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const fakeUsers = [
      {
        email: "user",
        password: "user1234",
        role: "user",
      },
      {
        email: "admin",
        password: "admin1234",
        role: "admin",
      },
    ];

    const foundUser = fakeUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (foundUser) {
      localStorage.setItem("user", JSON.stringify(foundUser));
      setUser(foundUser);
      if (foundUser.role === "user") {
        navigate("/home");
      } else if (foundUser.role === "admin") {
        navigate("/dashboard");
      }
      setError("");
    } else {
      setError("Sai email hoặc password!");
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      bgcolor="#f5f5f5"
    >
      <Box
        component="form"
        onSubmit={handleLogin}
        sx={{
          p: 4,
          borderRadius: 2,
          boxShadow: 3,
          bgcolor: "white",
          width: 350,
        }}
      >
        <Typography variant="h5" align="center" gutterBottom>
          Đăng nhập
        </Typography>

        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={!!error} 
        />

        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={!!error}
          helperText={error} 
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
}

export default Login;