import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router";

// Pages
import Home from "./pages/Home";
import History from "./pages/History.tsx";
import Skills from "./pages/Skills.tsx";
import Projects from "./pages/Projects.tsx";
import Contact from "./pages/Contact.tsx";

import App from "./App.tsx";

// router creation

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/histoire",
        element: <History />,
      },
      {
        path: "/compétences",
        element: <Skills />,
      },
      {
        path: "/projets",
        element: <Projects />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
],
);

// rendering

const rootElement = document.getElementById("root");

if (rootElement != null) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
