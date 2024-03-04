import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Heroes from "./views/Heroes";
import Hero from "./views/Hero";
import Layout from "./components/layout/layout";
import ProvideAppContext from "./context";
import Favorits from "./views/Favorits";

const router = createBrowserRouter([
  {
    path: "/heroes",
    element: <Layout />,
    children: [
      { index: true, element: <Heroes /> },
      { path: "favorits", element: <Favorits /> },
      { path: ":id", element: <Hero /> }
    ],
  },
  {
    path: "*",
    element: <Navigate to={"/heroes"} />
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProvideAppContext>
      <RouterProvider router={router} />
    </ProvideAppContext>
  </React.StrictMode>
);