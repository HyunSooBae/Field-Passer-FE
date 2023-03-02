import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import { persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
// import configureStore from "./store";
// import { rootReducer } from "./reducers";
import './index.css';
import AdminHome from './pages/Admin/Home';
import Board from './pages/Board';
import Home from './pages/Home';
import MyPage from './pages/MyPage';
import NotFound from './pages/NotFound';
import AdminMember from './pages/Admin/Member';
import AdminMemberDetail from './pages/Admin/MemberDetail';
import Login from './pages/Login';
import Join from './pages/Join';
import FindAccount from './pages/FindAccount';
import BoardForm from './pages/BoardForm';
import BoardDetails from './pages/BoardDetails';
import AdminPost from './pages/Admin/Post';
import AdminPostDetail from './pages/Admin/PostDetail';
import { Provider } from 'react-redux';
import store from './store';
import ReportAndQuestion from './pages/Admin/ReportAndQuestion';
import Help from './pages/Help';
import AdminLogin from './pages/Admin/Login';
import ReportDetail from './pages/Admin/ReportDetail';
import QuestionBox from './components/help/QuestionBox';
import Chatting from './pages/Chatting';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/help', element: <Help /> },
      { path: '/help/question', element: <QuestionBox /> },
      { path: '/login', element: <Login /> },
      { path: '/join', element: <Join /> },
      { path: '/findaccount', element: <FindAccount /> },
      { path: '/mypage', element: <MyPage /> },
      { path: '/admin', element: <AdminHome /> },
      { path: '/admin/member', element: <AdminMember /> },
      { path: '/admin/member/detail/:memberId', element: <AdminMemberDetail /> },
      { path: '/admin/post', element: <AdminPost /> },
      { path: '/admin/post/detail/:postId', element: <AdminPostDetail /> },
      { path: '/admin/service', element: <ReportAndQuestion /> },
      { path: '/admin/service/:reportId', element: <ReportDetail /> },
      { path: '/admin/login', element: <AdminLogin /> },
      { path: '/board', element: <Board /> },
      { path: '/posting', element: <BoardForm /> },
      { path: '/board/details/:id', element: <BoardDetails /> },
      { path: '/chatting/:id', element: <Chatting /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
    <RouterProvider router={router} />
    {/* </PersistGate> */}
  </Provider>,
);
