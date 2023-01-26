import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import './App.css';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import requestAPI from './api/axios';

function App() {
  useEffect(() => {
    requestAPI();
  }, []);
  return (
    <div>
      <ScrollRestoration />
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
