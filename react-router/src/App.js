import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Products from './components/Products';
import Users from './components/Users';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');

  const handleLogin = (userEmail) => {
    setEmail(userEmail);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setEmail('');
    setIsLoggedIn(false);
  };

  return (
    <Routes>
      <Route 
        path="/login" 
        element={
          isLoggedIn ? <Navigate to="/dashboard" replace /> : <Login onLogin={handleLogin} />
        } 
      />
      <Route 
        path="/dashboard" 
        element={
          isLoggedIn ? <Dashboard email={email} onLogout={handleLogout} /> : <Navigate to="/login" replace />
        } 
      />
      <Route 
        path="/products" 
        element={
          isLoggedIn ? <Products onLogout={handleLogout} /> : <Navigate to="/login" replace />
        } 
      />
      <Route 
        path="/users" 
        element={
          isLoggedIn ? <Users onLogout={handleLogout} /> : <Navigate to="/login" replace />
        } 
      />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;