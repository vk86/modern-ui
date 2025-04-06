import React from 'react';
import './MainPage.css';
import ApplicationSearch from './ApplicationSearch';

const MainPage = () => {
  return (
    <div className="main-container">
      <header className="top-bar">
        <div className="brand">
          <img src="/logo192.png" alt="Logo" className="logo" />
          <span className="title">ChatBOT</span>
        </div>
        <div className="user-info">
          <span>Sam Template</span>
          <div className="avatar">ST</div>
        </div>
      </header>

      <div className="content">
        <aside className="sidebar">
          <div className="auth-status success">✅ Authenticated with Rally</div>

          <div className="tool-section">
            <p className="section-title">Tool</p>
            <button className="tool-button selected">🔧 Rally 1.0</button>
            <button className="tool-button">🔧 Rally 2.0</button>
            <button className="tool-button">🔧 Rally 3.0</button>
            <button className="tool-button small">... Show More</button>
          </div>

          <ApplicationSearch />

          <p className="section-subtitle">Recently Used Applications</p>
          <ul className="recent-list">
            <li>📁 Demo Project</li>
            <li>📁 Claims Project</li>
            <li>📁 Reliability Cloud Engineering</li>
          </ul>
        </aside>

        <main className="chat-area">
          <h2>Hello! How can I assist you today?</h2>
          <div className="chat-input-box">
            <input type="text" placeholder="Enter your request..." />
            <button className="send-btn">🟢</button>
          </div>
        </main>
      </div>

      <footer className="footer">Proprietary and Confidential</footer>
    </div>
  );
};

export default MainPage;