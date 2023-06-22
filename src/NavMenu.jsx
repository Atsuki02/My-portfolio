import { FaGithub } from "react-icons/fa";
import { RiTwitterLine } from "react-icons/ri";

function NavMenu() {
  return (
    <div className="">
      <ul className="absolute right-24 top-14 z-10 h-[20rem] w-[20rem] flex-col items-center justify-center text-right text-2xl font-bold tracking-widest text-white">
        <h1 className="mb-6 border-b-[1px] p-4 text-4xl">Category</h1>
        <li className="p-4">Top</li>
        <li className="p-4">About</li>
        <li className="p-4">Works</li>
        <div className="mr-6 mt-12 flex justify-end">
          <a href="https://github.com/Atsuki02" className="pr-5 text-4xl ">
            <FaGithub />
          </a>
          <a href="https://github.com/Atsuki02" className="text-4xl">
            <RiTwitterLine />
          </a>
        </div>
      </ul>
      <div className="absolute left-8 top-8 z-0 h-[60rem] w-[60rem] -translate-y-[500px] translate-x-[650px]  rounded-[50%] bg-orange-500 "></div>
    </div>
  );
}

export default NavMenu;
