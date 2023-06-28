function Title({ messege, title }) {
  return (
    <>
      <div className="relative block pb-2 pl-20 text-[10px] uppercase tracking-widest before:absolute before:left-0 before:top-2  before:h-[1px] before:w-12 before:bg-black lg:before:top-3">
        {messege}
      </div>
      <div className="text-left text-lg font-medium uppercase tracking-widest lg:pb-16 lg:text-3xl">
        {title}
      </div>
    </>
  );
}

export default Title;
