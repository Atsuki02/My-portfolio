import { Outlet } from "react-router-dom";
import NavButton from "./NavButton";
import NavMenu from "./NavMenu";

function AppLayout({ isOpenMenu, setIsOpenMenu }) {
  return (
    <div className="w-full overflow-hidden bg-white ">
      <NavButton isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
      {isOpenMenu ? (
        <NavMenu isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
      ) : null}
      <Outlet />
    </div>
  );
}

export default AppLayout;
