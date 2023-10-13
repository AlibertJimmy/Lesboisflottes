import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom' 

import Home from './pages/Home'
import Header from './components/Header'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  </React.StrictMode>
);


