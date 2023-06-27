import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useState } from "react";
import Top from "./Top";
import Work from "./Work";
import About from "./About";
import AppLayout from "./AppLayout";

function App() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const router = createBrowserRouter([
    {
      element: (
        <AppLayout isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
      ),
      children: [
        {
          path: "/",
          element: <Top isLoading={isLoading} setIsLoading={setIsLoading} />,
        },
        { path: "/about", element: <About /> },
        {
          path: "/work",
          element: <Work />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
