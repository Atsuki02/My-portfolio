import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useState } from "react";
import Top from "./pages/top/Top";
import About from "./pages/about/About";
import Work from "./pages/work/Work";
import AppLayout from "./pages/ui/AppLayout";
import ScrollToTop from "./pages/ui/ScrollToTop";
import Error from "./pages/ui/Error";

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
