import { Outlet } from "react-router-dom";
import NavButton from "./NavButton";
import NavMenu from "./NavMenu";
import { useEffect, useState } from "react";
import PreLoader from "./PreLoader.jsx";

function AppLayout() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading ? (
        <PreLoader />
      ) : (
        <div className='w-full overflow-hidden bg-white '>
          <NavButton isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
          {isOpenMenu && (
            <NavMenu isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
          )}
          <Outlet />
        </div>
      )}
    </>
  );
}

export { AppLayout };
