import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Nav from './components/Nav';
import Profile from './components/Profile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav/>
    <Profile/>
  </React.StrictMode>
);


