import React, { useState } from 'react';
import './SearchableDropdown.css';

const SearchableDropdown = ({ label, options = [], onSelect }) => {
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(false);

  const filtered = options.filter((opt) =>
    opt.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (value) => {
    onSelect(value);
    setSearch(value);
    setOpen(false);
  };

  return (
    <div className="dropdown-wrapper" onBlur={() => setTimeout(() => setOpen(false), 100)}>
      <input
        type="text"
        placeholder={label}
        value={search}
        onFocus={() => setOpen(true)}
        onChange={(e) => {
          setSearch(e.target.value);
          setOpen(true);
        }}
        className="dropdown-input"
      />
      {open && filtered.length > 0 && (
        <ul className="dropdown-list">
          {filtered.map((item, idx) => (
            <li key={idx} onClick={() => handleSelect(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchableDropdown;