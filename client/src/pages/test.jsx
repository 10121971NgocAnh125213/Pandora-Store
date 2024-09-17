import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../../until/userContext';

export default function Login() {
  const userData = [
    {
      id: 1,
      username: 'dinhtuankiet2730@gmail.com',
      password: '12345',
      name: 'Đinh Tuấn Kiệt',
    },
    {
      id: 2,
      username: 'user1@gmail.com',
      password: '12345',
      name: 'Nguyễn Văn A',
    },
    {
      id: 3,
      username: 'user2@gmail.com',
      password: '12345',
      name: 'Lê Thị Bình',
    },
    {
      id: 4,
      username: 'user3@gmail.com',
      password: '12345',
      name: 'Trần Thị C',
    },
    {
      id: 5,
      username: 'dinhviethung@gmail.com',
      password: '12345',
      name: 'Đinh Việt Hùng',
    },
  ];

  const { setUser } = useUser();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Kiểm tra xem có thông tin người dùng đã lưu trong localStorage không
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, [setUser]);

  const handleLogin = () => {
    if (!username.endsWith('@gmail.com')) {
      setMessage('Tên đăng nhập phải có dạng @gmail.com');
      return;
    }

    const user = userData.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      // Lưu thông tin người dùng vào localStorage
      localStorage.setItem('user', JSON.stringify({
        id: user.id,
        name: user.name,
        username: user.username,
      }));

      setUser({ id: user.id, name: user.name, username: user.username });
      alert(`Xin chào, ${user.name}!`);
      navigate('/');
    } else {
      setMessage('Thông tin tài khoản hoặc mật khẩu không chính xác!');
    }
  };

  return (
    <div className="modal-form">
      <div className="form-login">
        <h2 className="login__heading">Đăng nhập</h2>
        <p className="login__text">
          Nếu đã từng mua hàng trên Website trước đây, bạn có thể dùng tính năng{' '}
          <a href="#">"Lấy mật khẩu"</a> để có thể truy cập vào tài khoản bằng email nhé.
        </p>

        <input
          type="text"
          id="username"
          placeholder="Email/SĐT của bạn"
          className="login__input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          id="password"
          placeholder="Mật khẩu"
          className="login__input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
{message && <p style={{ marginBottom: '15px', color: 'red' }} className="login__message">{message}</p>}

        <div className="btn btn--login" onClick={handleLogin}>
          Đăng nhập
        </div>

        <div className="login-separate">
          <span></span>
          Hoặc
          <span></span>
        </div>
        <div className="btn btn--fb">
          <p>Đăng nhập với Facebook</p>
          <img src="https://www.coolmate.me/images/facebook.svg" alt="" />
        </div>
        <div className="btn btn--google">
          <p>Đăng nhập với Google</p>
          <img src="https://www.coolmate.me/images/google.svg" alt="" />
        </div>

        <div className="form-option">
          <Link to="/DangKy">
            <span className="form-option__login">Đăng ký tài khoản mới</span>
          </Link>
          <span>Quên mật khẩu</span>
        </div>
      </div>
    </div>
  );
}