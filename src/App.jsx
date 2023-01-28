import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import './App.css';
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import requestAPI from './api/axios';

function App() {
  useEffect(() => {
    requestAPI();
  }, []);
  const location = useLocation();
  return (
    <div>
      <ScrollRestoration />
      {location.pathname.includes('/admin') ? null : <Header />}
      <Outlet />
    </div>
  );
}

export default App;
