import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import './App.css';
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import NavBar from './components/Admin/NavBar';
import Footer from './components/Footer';
import requestAPI from './api/axios';
import axios from 'axios';

// 임시 타입설정
declare global {
  interface Window {
    naver: any;
  }
}

function Admin() {
  return (
    <div className='grid grid-areas-admin grid-cols-admin'>
      <ScrollRestoration />
      <NavBar />
      <Outlet />
    </div>
  );
}

function User() {
  const location = useLocation();
  return (
    <div>
      <ScrollRestoration />
      <Header />
      <Outlet />
      {location.pathname.includes('chatting') ? null : <Footer />}
    </div>
  );
}

function App() {
  const location = useLocation();
  return location.pathname.includes('/admin') ? Admin() : User();
}

export default App;
