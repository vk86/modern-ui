import React, { useState } from 'react';
import './ConfigPage.css';

const ConfigPage = ({ onSave }) => {
  const [rtc, setRtc] = useState({ project: '', filed: '', sr: '' });
  const [rqm, setRqm] = useState({ project: '', domain: '', app: '' });

  return (
    <div className="config-container">
      <div className="config-box">
        <img src="/logo192.png" alt="Logo" className="config-logo" />
        <h1 className="chatbot-title">ChatBOT</h1>

        <div className="section">
          <h3>RTC</h3>
          <select onChange={(e) => setRtc({ ...rtc, project: e.target.value })}>
            <option>RTC Project</option>
          </select>
          <select onChange={(e) => setRtc({ ...rtc, filed: e.target.value })}>
            <option>Filed Against</option>
          </select>
          <select onChange={(e) => setRtc({ ...rtc, sr: e.target.value })}>
            <option>Project SR</option>
          </select>
        </div>

        <div className="section">
          <h3>RQM</h3>
          <select onChange={(e) => setRqm({ ...rqm, project: e.target.value })}>
            <option>RQM Project</option>
          </select>
          <select onChange={(e) => setRqm({ ...rqm, domain: e.target.value })}>
            <option>Domain</option>
          </select>
          <select onChange={(e) => setRqm({ ...rqm, app: e.target.value })}>
            <option>Application</option>
          </select>
        </div>

        <div className="buttons">
          <button className="cancel">Cancel</button>
          <button className="save" onClick={onSave}>Save</button>
        </div>

        <p className="footer-note">Proprietary and Confidential</p>
      </div>
    </div>
  );
};

export default ConfigPage;
