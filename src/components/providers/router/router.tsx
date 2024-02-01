import {createBrowserRouter, createHashRouter} from "react-router-dom";
import HomePage from "@pages/home/HomePage";
import ErrorPage from "@pages/errorPage/ErrorPage.tsx";

const routes = [
  {
    path: "*",
    element: <ErrorPage error={new Error("Страница не найдена")}/>,
  },
  {
    path: "/",
    element: <HomePage/>,
  },
]
const browserRouter = createBrowserRouter(routes)
const hashRouter = createHashRouter(routes)

const router = import.meta.env.MODE === "gh-pages" ? hashRouter : browserRouter

export default router