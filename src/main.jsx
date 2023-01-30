import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
import Admin from './pages/Admin';
import Board from './pages/Board';
import Home from './pages/Home';
import MyPage from './pages/MyPage';
import NotFound from './pages/NotFound';
import AdminMember from './pages/AdminMember';
import AdminMemberDetail from './pages/AdminMemberDetail';
import Login from './pages/Login';
import Join from './pages/Join'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/join',
        element: <Join />,
      },
      {
        path: '/mypage',
        element: <MyPage />,
      },
      {
        path: '/admin',
        element: <Admin />,
      },
      {
        path: '/admin/member',
        element: <AdminMember />,
      },
      {
        path: '/admin/member/detail/:memberId',
        element: <AdminMemberDetail />,
      },
      {
        path: '/board',
        element: <Board />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
