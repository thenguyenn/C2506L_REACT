import { useNavigate } from 'react-router-dom';

function Dashboard({ email, onLogout }) {
  const navigate = useNavigate();

  return (
    <div>
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '15px 30px',
          background: 'linear-gradient(135deg, #667eea 0%, #605b64ff 100%)',
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
        <h1 style={{ color: '#333', marginBottom: '10px' }}>
          Chào mừng bạn đến Dashboard!
        </h1>
        <p style={{ color: '#666', fontSize: '16px' }}>
          Email đăng nhập: <strong>{email}</strong>
        </p>
      </main>
    </div>
  );
}

export default Dashboard;