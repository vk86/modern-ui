//import React from 'react';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import MainPage from './Main';
//import LoginPage from './LoginPage';
//import ConfigPage from './ConfigPage';

//function App() {
//  return <MainPage />;
//}

//function App() {
 // return (
  //  <Router>
   //   <Routes>
    //    <Route path="/" element={<LoginPage onLogin={() => window.location.href = "/config"} />} />
     //   <Route path="/config" element={<ConfigPage onSave={() => window.location.href = "/main"} />} />
     //   <Route path="/main" element={<MainPage />} />
     // </Routes>
    //</Router>
  //);
//}


import React, { useState } from 'react';
import LoginPage from './LoginPage';
import ConfigPage from './ConfigPage';
import './App.css';

function App() {
  const [showConfig, setShowConfig] = useState(false);

  return (
    <div className="app-container">
      <LoginPage onLogin={() => setShowConfig(true)} />
      {showConfig && (
        <div className="overlay">
          <ConfigPage onSave={() => setShowConfig(false)} />
        </div>
      )}
    </div>
  );
}


export default App;