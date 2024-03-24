import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Top from "./pages/top/Top";
import About from "./pages/about/About";
import Work from "./pages/work/Work";
import ScrollToTop from "./pages/ui/ScrollToTop";
import Error from "./pages/ui/Error";
import { AppLayout } from "./pages/ui/AppLayout.jsx";

function App() {
  const router = createBrowserRouter([
    {
      element: (
        <>
          <AppLayout />
          <ScrollToTop />
        </>
      ),
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Top />,
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
