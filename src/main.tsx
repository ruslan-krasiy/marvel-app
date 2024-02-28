import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Layout from "./layout";
import Heroes from "./views/Heroes";
import Hero from "./views/Hero";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Heroes /> },
      { path: "hero", children: [
        {path: ":id", element: <Hero /> }]}
    ],
  },
  {
    path: "*",
    element: <Navigate to={"/"} />
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);