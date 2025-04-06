import React, { useState } from 'react';
import './MainPage.css';

const applicationsList = [
  'Demo Project',
  'Claims Project',
  'Reliability Cloud Engineering',
  'Retail Platform',
  'Insurance Suite',
  'Payment Gateway',
];

const ApplicationSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredApps, setFilteredApps] = useState(applicationsList);

  const handleChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    const filtered = applicationsList.filter((app) =>
      app.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredApps(filtered);
    setShowDropdown(true);
  };

  const handleSelect = (value) => {
    setSearchTerm(value);
    setShowDropdown(false);
  };

  const handleBlur = () => {
    setTimeout(() => setShowDropdown(false), 100);
  };

  return (
    <div className="application-search">
      <label>Applications</label>
      <input
        type="text"
        className="search-input"
        placeholder="Search for application"
        value={searchTerm}
        onChange={handleChange}
        onFocus={() => setShowDropdown(true)}
        onBlur={handleBlur}
      />
      {showDropdown && filteredApps.length > 0 && (
        <ul className="search-dropdown">
          {filteredApps.map((app, idx) => (
            <li key={idx} onClick={() => handleSelect(app)}>
              {app}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ApplicationSearch;