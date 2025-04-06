import React, { useState } from 'react';
import './IBMGateway.css';
import SearchableDropdown from './SearchableDropdown'; // Reusable dropdown

const IBMGateway = () => {
  const [step, setStep] = useState('login'); // 'login' | 'config'
  const [credentials, setCredentials] = useState({ userId: '', password: '' });
  const [rtc, setRtc] = useState({ project: '', filed: '', sr: '' });
  const [rqm, setRqm] = useState({ project: '', domain: '', app: '' });

  const handleLogin = () => {
    if (credentials.userId && credentials.password) {
      setStep('config');
    }
  };

  const handleSave = () => {
    // save config logic here
    console.log('RTC:', rtc);
    console.log('RQM:', rqm);
    alert('Configuration saved!');
  };

  const dropdownOptions = ['Alpha', 'Beta', 'Gamma', 'Delta']; // mock options

  return (
    <div className="ibm-gateway-container">
      <div className="ibm-box">
        <img src="/logo192.png" alt="Logo" className="ibm-logo" />
        <h1 className="ibm-title">IBM Integration</h1>

        {step === 'login' && (
          <>
            <h2 className="section-title">Login</h2>
            <input
              type="text"
              placeholder="User ID"
              value={credentials.userId}
              onChange={(e) => setCredentials({ ...credentials, userId: e.target.value })}
            />
            <input
              type="password"
              placeholder="Password"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            />
            <button onClick={handleLogin}>Continue</button>
          </>
        )}

        {step === 'config' && (
          <>
            <div className="section">
              <h2 className="section-title">RTC Configuration</h2>
              <SearchableDropdown
                label="RTC Project"
                options={dropdownOptions}
                onSelect={(val) => setRtc({ ...rtc, project: val })}
              />
              <SearchableDropdown
                label="Filed Against"
                options={dropdownOptions}
                onSelect={(val) => setRtc({ ...rtc, filed: val })}
              />
              <SearchableDropdown
                label="Project SR"
                options={dropdownOptions}
                onSelect={(val) => setRtc({ ...rtc, sr: val })}
              />
            </div>

            <div className="section">
              <h2 className="section-title">RQM Configuration</h2>
              <SearchableDropdown
                label="RQM Project"
                options={dropdownOptions}
                onSelect={(val) => setRqm({ ...rqm, project: val })}
              />
              <SearchableDropdown
                label="Domain"
                options={dropdownOptions}
                onSelect={(val) => setRqm({ ...rqm, domain: val })}
              />
              <SearchableDropdown
                label="Application"
                options={dropdownOptions}
                onSelect={(val) => setRqm({ ...rqm, app: val })}
              />
            </div>

            <div className="buttons">
              <button className="save" onClick={handleSave}>Save</button>
            </div>
          </>
        )}

        <p className="footer-note">Proprietary and Confidential</p>
      </div>
    </div>
  );
};

export default IBMGateway;


-------------------
.ibm-gateway-container {
  height: 100%;
  min-height: 100vh;
  background: #f4f8fc;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Arial, sans-serif;
}

.ibm-box {
  background: #fff;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.05);
  width: 100%;
  max-width: 500px;
  text-align: center;
}

.ibm-logo {
  width: 60px;
  margin-bottom: 10px;
}

.ibm-title {
  color: #004b91;
  margin-bottom: 24px;
}

.section-title {
  font-size: 18px;
  margin-bottom: 12px;
  color: #333;
}

.ibm-box input {
  display: block;
  width: 100%;
  padding: 10px 12px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
}

.ibm-box button {
  background-color: #004b91;
  color: white;
  padding: 10px 24px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
  margin-top: 8px;
}

.section {
  margin-top: 30px;
  text-align: left;
}

.buttons {
  text-align: center;
  margin-top: 24px;
}

.save {
  background-color: #3f9b1b;
}

.footer-note {
  margin-top: 30px;
  font-size: 12px;
  color: #aaa;
}

  
