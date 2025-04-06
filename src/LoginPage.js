import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = ({ onLogin }) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (userId && password) {
      onLogin(); // navigate to main page
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src="/logo192.png" alt="Logo" className="login-logo" />
        <h1 className="chatbot-title">ChatBOT</h1>
        <h2 className="login-title">Login</h2>
        <input
          type="text"
          placeholder="User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Continue</button>
        <p className="footer-note">Proprietary and Confidential</p>
      </div>
    </div>
  );
};

export default LoginPage;