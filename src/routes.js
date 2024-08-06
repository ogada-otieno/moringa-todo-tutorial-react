import App from './App';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import SingleTodo from './pages/SingleTodo';

const routers = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
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
        path: '/register',
        element: <Register />,
      },
      {
        path: '/todo/:id',
        element: <SingleTodo />,
      },
    ],
  },
];

export default routers;
