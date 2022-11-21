import "./App.css";
import Home from "./pages/Home";
import Render from "./pages/Render";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import ClientApi from "./utils/ClientApi";
import ErrorPage from "./pages/ErrorPage";
import DataPages from "./dataPages/DataPages";
import { useEffect } from "react";

const pages = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/render/:id",
        element: <Render />,
        loader: async ({ params }) => {
          return [
            await ClientApi(`${params.id}-api`),
             DataPages[params.id].title,
             DataPages[params.id].subtitle,
             DataPages[params.id].description,
             DataPages[params.id].source,
          ];
        },
        errorElement: <ErrorPage />,
        name: DataPages.temperature.title,
      },
    ],
  },
]);

function App() {
  useEffect(() => {
    // loading bar
    const ele = document.getElementById('ipl-progress-indicator')
      if(ele){
        ele.classList.add('available')
        setTimeout(() => {
          ele.outerHTML = ''
        }, 2000)
      }
  }, []);
  return (
    <>
      <RouterProvider router={pages} />
    </>
  );
}

export default App;
