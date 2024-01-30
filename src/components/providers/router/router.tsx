import {createBrowserRouter} from "react-router-dom";
import HomePage from "@pages/home/HomePage";
import ErrorPage from "@pages/errorPage/ErrorPage.tsx";


const router = createBrowserRouter([
  {
    path: "*",
    element: <ErrorPage error={new Error("Страница не найдена")}/>,
  },
  {
    path: "/",
    element: <HomePage/>,
  },
],)

export default router