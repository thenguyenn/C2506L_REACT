import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Login from "./components/Login";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Cart from "./components/Cart";
import Layout from "./components/Layout";

function ProtectedRoute({ user, role, children }) {
  if (!user) return <Navigate to="/login" />;
  if (role && user.role !== role) return <Navigate to="/login" />;
  return children;
}

function App() {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  return (
    <Router>
      <Routes>
        {/* Route đăng nhập không cần layout */}
        <Route path="/login" element={<Login setUser={setUser} />} />

        {/* Routes có layout */}
        <Route
          path="/home"
          element={
            <ProtectedRoute user={user} role="user">
              <Layout user={user} setUser={setUser}>
                <Home />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/cart"
          element={
            <ProtectedRoute user={user} role="user">
              <Layout user={user} setUser={setUser}>
                <Cart />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute user={user} role="admin">
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;