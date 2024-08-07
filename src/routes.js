import App from "./App";
import Calendar from "./pages/Calender";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SingleTodo from "./pages/SingleTodo";
import Todos from "./pages/Todos";

const routers = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/todos",
        element: <Todos />,
      },
      {
        path: "/calender",
        element: <Calendar />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/todo/:id",
        element: <SingleTodo />,
      },
    ],
  },
];

export default routers;
