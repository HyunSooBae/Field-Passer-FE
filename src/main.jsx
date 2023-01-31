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
import Join from './pages/Join';
import FindAccount from './pages/FindAccount';
import BoradForm from './pages/BoradForm';
import BoardDetails from './pages/BoardDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/login', element: <Login /> },
      { path: '/join', element: <Join /> },
      { path: '/findaccount', element: <FindAccount /> },
      { path: '/mypage', element: <MyPage /> },
      { path: '/admin', element: <Admin /> },
      { path: '/admin/member', element: <AdminMember /> },
      { path: '/admin/member/detail/:memberId', element: <AdminMemberDetail /> },
      { path: '/board', element: <Board /> },
      { path: '/BoradForm', element: <BoradForm /> },
      { path: '/board/details/:id', element: <BoardDetails /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
