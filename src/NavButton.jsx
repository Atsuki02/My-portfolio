function NavButton({ isOpenMenu, setIsOpenMenu }) {
  return (
    <>
      <div
        className="fixed right-0 z-10 m-6 flex h-16 w-16 cursor-pointer flex-col items-center justify-center space-y-2 rounded-[50%] bg-orange-500 text-right transition-all duration-100"
        onClick={() => setIsOpenMenu(!isOpenMenu)}
      >
        <div
          className={
            isOpenMenu
              ? "h-[0.2rem] w-7 translate-y-[0.6rem]  rotate-45 bg-white transition-all duration-100"
              : "h-[0.2rem] w-7 bg-white "
          }
        />
        <div
          className={
            isOpenMenu
              ? "opacity-0 transition-all duration-100"
              : "h-[0.2rem] w-7 bg-white"
          }
        />
        <div
          className={
            isOpenMenu
              ? "h-[0.2rem] w-7 -translate-y-[0.6rem] -rotate-45 bg-white transition-all duration-100"
              : "h-[0.2rem] w-7 bg-white"
          }
        />
      </div>
    </>
  );
}

export default NavButton;
