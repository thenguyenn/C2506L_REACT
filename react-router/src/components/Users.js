import React from 'react';
import { useNavigate } from 'react-router-dom';

function Users({ onLogout }) {
  const navigate = useNavigate();

  const users = [
    { id: 1, name: 'Nguyễn Văn A', email: 'nguyenvana@email.com', role: 'Admin' },
    { id: 2, name: 'Trần Thị B', email: 'tranthib@email.com', role: 'User' },
    { id: 3, name: 'Lê Văn C', email: 'levanc@email.com', role: 'User' },
    { id: 4, name: 'Phạm Thị D', email: 'phamthid@email.com', role: 'Manager' },
    { id: 5, name: 'Hoàng Văn E', email: 'hoangvane@email.com', role: 'User' },
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
        <h1 style={{ color: '#333', marginBottom: '30px' }}>Quản lý Users</h1>
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
            <tr style={{ background: '#2ecc71', color: 'white' }}>
              <th style={{ padding: '15px', textAlign: 'left' }}>ID</th>
              <th style={{ padding: '15px', textAlign: 'left' }}>Tên</th>
              <th style={{ padding: '15px', textAlign: 'left' }}>Email</th>
              <th style={{ padding: '15px', textAlign: 'left' }}>Vai Trò</th>
              <th style={{ padding: '15px', textAlign: 'left' }}>Hành Động</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user.id}
                style={{
                  borderBottom: '1px solid #eee',
                  background: index % 2 === 0 ? '#f9f9f9' : 'white',
                }}
              >
                <td style={{ padding: '15px' }}>{user.id}</td>
                <td style={{ padding: '15px' }}>{user.name}</td>
                <td style={{ padding: '15px' }}>{user.email}</td>
                <td style={{ padding: '15px' }}>
                  <span
                    style={{
                      padding: '4px 12px',
                      background:
                        user.role === 'Admin'
                          ? '#e74c3c'
                          : user.role === 'Manager'
                          ? '#f39c12'
                          : '#95a5a6',
                      color: 'white',
                      borderRadius: '12px',
                      fontSize: '12px',
                      fontWeight: 'bold',
                    }}
                  >
                    {user.role}
                  </span>
                </td>
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

export default Users;