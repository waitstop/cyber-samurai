import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import RouterProvider from "@providers/router/RouterProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider />
  </React.StrictMode>,
);
