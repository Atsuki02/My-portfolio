import NavButton from "./NavButton";

function Top({ isOpenMenu, setIsOpenMenu }) {
  return (
    <div className="h-screen w-screen bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white">
      <NavButton isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
      <section className="flex h-screen flex-col items-center justify-center p-16 text-center text-xl">
        <h1 className="mb-8 text-3xl font-extrabold tracking-wider text-orange-400">
          ATSUKI KITADA
        </h1>
        <h2 className="text-xl font-bold ">
          This is a Web Engineer Portfolio site
          <span className="text-orange-400"> *</span>
        </h2>
      </section>
    </div>
  );
}

export default Top;
