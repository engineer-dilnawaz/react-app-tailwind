import { lazy, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import Error from "./components/Error.jsx";
// import Contact from "./components/Contact.jsx";
// import About from "./components/About.jsx";
// import Home from "./components/Home.jsx";

const About = lazy(() => wait(1000).then(() => import("./components/About")));

const Contact = lazy(() =>
  wait(1000).then(() =>
    import("./components/Contact").then((module) => ({
      default: module.Contact,
    })),
  ),
);

const Home = lazy(() => wait(1000).then(() => import("./components/Home")));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

const wait = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
