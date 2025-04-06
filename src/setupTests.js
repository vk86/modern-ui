.dropdown-input {
  border: 1px solid #ced4da;
  border-radius: 0.375rem;
  height: 38px;
  background-color: #fff;
  box-shadow: inset 0 1px 2px rgba(0,0,0,.075);
}

.dropdown-wrapper {
  position: relative;
  width: 100%;
  margin-bottom: 16px;
}

.dropdown-input {
  width: 100%;
  padding: 8px 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
  font-weight: normal; /* ensure it's not bold */
  background-color: white;
  outline: none;
}

.dropdown-list {
  list-style: none; /* removes bullet */
  margin: 6px 0 0;
  padding: 0;
  background: white;
  border: 1px solid #ddd;
  border-radius: 6px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: absolute;
  width: 100%;
  z-index: 10;
  max-height: 180px;
  overflow-y: auto;
}

.dropdown-list li {
  padding: 8px 10px;
  cursor: pointer;
  font-size: 14px;
  font-weight: normal; /* no bold */
  color: #333;
}

.dropdown-list li:hover {
  background-color: #f0f0f0;
}


