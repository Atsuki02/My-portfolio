// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import Top from "./Top";
// import Works from "./Works";
// import About from "./About";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Top />,
//   },
//   {
//     path: "/works",
//     element: <Works />,
//   },
//   { path: "/about", element: <About /> },
// ]);

// function App() {
//   return <RouterProvider router={router} />;
// }

// export default App;

import { useEffect } from "react";
import { useState } from "react";
import Top from "./Top.jsx";
import About from "./About.jsx";
import Works from "./Works.jsx";
import PreLoader from "./preLoader.jsx";
import NavMenu from "./NavMenu.jsx";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {isLoading ? (
        <PreLoader isLoading={isLoading} />
      ) : (
        <>
          {isOpenMenu ? (
            <NavMenu isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
          ) : null}
          <Top isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
          <About />
          <Works />
        </>
      )}
    </>
  );
  // return <PreLoader />;
}

export default App;
