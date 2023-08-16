function NavButton({ isOpenMenu, setIsOpenMenu }) {
  return (
    <>
      <div
        className="fixed right-0 z-30 m-3 flex h-12 w-12 cursor-pointer flex-col items-center justify-center space-y-1 rounded-[50%] bg-orange-500 text-right text-white sm:m-4 sm:h-16 sm:w-16 sm:space-y-2"
        onClick={() => setIsOpenMenu(!isOpenMenu)}
      >
        <div
          className={
            isOpenMenu
              ? "h-[0.2rem] w-5 rotate-45 bg-white transition-all duration-100 sm:h-[0.2rem] sm:w-7 sm:translate-y-[0.6rem]"
              : "h-[0.2rem] w-5 bg-white sm:h-[0.2rem] sm:w-7"
          }
        />
        <div
          className={
            isOpenMenu
              ? "w-[22px] opacity-0 transition-all duration-100"
              : "h-[0.2rem] w-5 bg-white sm:h-[0.2rem] sm:w-7"
          }
        />
        <div
          className={
            isOpenMenu
              ? "h-[0.2rem] w-5 -rotate-45 bg-white transition-all duration-100 sm:h-[0.2rem] sm:w-7 sm:-translate-y-[0.6rem]"
              : "h-[0.2rem] w-5 bg-white sm:h-[0.2rem] sm:w-7"
          }
        />
      </div>
    </>
  );
}

export default NavButton;
