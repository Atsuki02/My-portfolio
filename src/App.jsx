import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useState } from "react";
import AppLayout from "./AppLayout";
import Top from "./Top";
import About from "./About";
import Work from "./Work";
import Error from "./Error";
import ScrollToTop from "./ScrollToTop";

function App() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const router = createBrowserRouter([
    {
      element: (
        <>
          <AppLayout isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
          <ScrollToTop />
        </>
      ),
      errorElement: <Error />,
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
