import React, { useState } from 'react';
import SearchableDropdown from './SearchableDropdown';
import './ConfigPage.css';

const ConfigPage = ({ onSave }) => {
  const [rtc, setRtc] = useState({ project: '', filed: '', sr: '' });
  const [rqm, setRqm] = useState({ project: '', domain: '', app: '' });

  const options = ['Alpha', 'Beta', 'Gamma', 'Delta'];

  return (
    <div className="config-box">
      <img src="/logo192.png" alt="Logo" className="config-logo" />
      <h1 className="chatbot-title">ChatBOT</h1>

      <div className="section">
        <h3>RTC</h3>
        <SearchableDropdown
          label="RTC Project"
          options={options}
          onSelect={(val) => setRtc({ ...rtc, project: val })}
        />
        <SearchableDropdown
          label="Filed Against"
          options={options}
          onSelect={(val) => setRtc({ ...rtc, filed: val })}
        />
        <SearchableDropdown
          label="Project SR"
          options={options}
          onSelect={(val) => setRtc({ ...rtc, sr: val })}
        />
      </div>

      <div className="section">
        <h3>RQM</h3>
        <SearchableDropdown
          label="RQM Project"
          options={options}
          onSelect={(val) => setRqm({ ...rqm, project: val })}
        />
        <SearchableDropdown
          label="Domain"
          options={options}
          onSelect={(val) => setRqm({ ...rqm, domain: val })}
        />
        <SearchableDropdown
          label="Application"
          options={options}
          onSelect={(val) => setRqm({ ...rqm, app: val })}
        />
      </div>

      <div className="buttons">
        <button className="cancel" onClick={onSave}>Cancel</button>
        <button className="save" onClick={onSave}>Save</button>
      </div>

      <p className="footer-note">Proprietary and Confidential</p>
    </div>
  );
};

export default ConfigPage;