import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Grid1 from "./pages/Grid1/Grid1.tsx";
import Grid2 from "./pages/Grid2/Grid2.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/grid1/",
    element: <Grid1 />,
  },
  {
    path: "/grid2/",
    element: <Grid2 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
