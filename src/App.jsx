import React, { useState } from 'react';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Board from './pages/Board';
import MyPage from './pages/MyPage';
import Admin from './pages/Admin';
import NotFound from './pages/NotFound';
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/board/*' element={<Board />} />
          <Route path='/mypage/*' element={<MyPage />} />
          <Route path='/admin/*' element={<Admin />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App
