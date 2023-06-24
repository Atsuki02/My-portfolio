import {
  RouterProvider,
  createBrowserRouter,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Top from "./Top";
import Works from "./Works";
import About from "./About";
import PreLoader from "./preLoader.jsx";
import AppLayout from "./AppLayout";
import { AnimatePresence } from "framer-motion";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  // const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const router = createBrowserRouter([
    {
      element: (
        <AppLayout isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
      ),
      children: [
        {
          path: "/",
          element: <Top />,
        },
        { path: "/about", element: <About /> },
        {
          path: "/works",
          element: <Works />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
