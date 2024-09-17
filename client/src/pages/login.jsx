import React, { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const userData = [
        {
            id: 1,
            username: 'meme@gmail.com',
            password: '12345',
            name: 'Nguyễn Thị Ngọc Anh',
        },
        {
            id: 2,
            username: 'user1@gmail.com',
            password: '12345',
            name: 'Nguyễn Văn A',
        },
    ];

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault(); // Ngăn hành vi mặc định của form khi submit

        if (!username.endsWith('@gmail.com')) {
            setMessage('Tên đăng nhập phải có dạng @gmail.com');
            return;
        }

        const user = userData.find(
            (user) => user.username === username && user.password === password
        );

        if (user) {
            alert(`Xin chào, ${user.name}!`);
            navigate('/');
        } else {
            setMessage('Thông tin tài khoản hoặc mật khẩu không chính xác!');
        }
    };

    return (
        <Fragment>
            <div className='body'>
                <div className="login-container">
                    <h2>Đăng nhập</h2>
                    <form action='' onSubmit={handleLogin}>
                        <div className="input-group">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder='Tên đăng nhập'
                            />
                        </div>
                        <div className="input-group">
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder='Mật khẩu'
                            />
                        </div>
                        {message && <p style={{ marginBottom: '15px', color: 'red' }} className="login__message">{message}</p>}
                        <button className='btn-login' type="submit">Đăng Nhập</button>
                        <div className='option-login'>
                            <button className='login-google'>Đăng nhập Google</button>
                            <button className='login-facebook'>Đăng nhập Facebook</button>
                        </div>
                    </form>
                    <p className='create-acc'>Chưa có tài khoản? <Link to="/signup">Đăng ký tài khoản mới</Link></p>
                </div>
            </div>
        </Fragment>
    );
}

export default Login;
