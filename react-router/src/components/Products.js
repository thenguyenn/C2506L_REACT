import React from 'react';
import { useNavigate } from 'react-router-dom';

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
    <div>
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '15px 30px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        }}
      >
        <div style={{ display: 'flex', gap: '15px' }}>
          <button
            onClick={() => navigate('/dashboard')}
            style={{
              padding: '10px 20px',
              background: 'transparent',
              color: 'white',
              border: '1px solid white',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: '500',
            }}
          >
            Dashboard
          </button>
          <button
            onClick={() => navigate('/products')}
            style={{
              padding: '10px 20px',
              background: 'transparent',
              color: 'white',
              border: '1px solid white',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: '500',
            }}
          >
            Quản lý sản phẩm
          </button>
          <button
            onClick={() => navigate('/users')}
            style={{
              padding: '10px 20px',
              background: 'transparent',
              color: 'white',
              border: '1px solid white',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: '500',
            }}
          >
            Quản lý người dùng
          </button>
        </div>
        <button
          onClick={onLogout}
          style={{
            padding: '10px 20px',
            background: '#ff4757',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: '500',
          }}
        >
          Logout
        </button>
      </header>

      <main style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ color: '#333', marginBottom: '30px' }}>Quản lý Sản Phẩm</h1>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            background: 'white',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            borderRadius: '10px',
            overflow: 'hidden',
          }}
        >
          <thead>
            <tr style={{ background: '#667eea', color: 'white' }}>
              <th style={{ padding: '15px', textAlign: 'left' }}>ID</th>
              <th style={{ padding: '15px', textAlign: 'left' }}>Tên Sản Phẩm</th>
              <th style={{ padding: '15px', textAlign: 'left' }}>Giá</th>
              <th style={{ padding: '15px', textAlign: 'left' }}>Tồn Kho</th>
              <th style={{ padding: '15px', textAlign: 'left' }}>Hành Động</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr
                key={product.id}
                style={{
                  borderBottom: '1px solid #eee',
                  background: index % 2 === 0 ? '#f9f9f9' : 'white',
                }}
              >
                <td style={{ padding: '15px' }}>{product.id}</td>
                <td style={{ padding: '15px' }}>{product.name}</td>
                <td
                  style={{
                    padding: '15px',
                    color: '#667eea',
                    fontWeight: 'bold',
                  }}
                >
                  {product.price}
                </td>
                <td style={{ padding: '15px' }}>{product.stock}</td>
                <td style={{ padding: '15px' }}>
                  <button
                    style={{
                      padding: '6px 12px',
                      background: '#3498db',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      marginRight: '5px',
                    }}
                  >
                    Sửa
                  </button>
                  <button
                    style={{
                      padding: '6px 12px',
                      background: '#e74c3c',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                    }}
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default Products;