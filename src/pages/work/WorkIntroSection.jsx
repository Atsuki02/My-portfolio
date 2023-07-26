import FirstView from "../../FirstView";
import ScrollIcon from "../../ScrollIcon";
import Title from "../../Title";

function WorkIntroSection() {
  return (
    <>
      <section className="flex h-screen w-full flex-col items-center justify-start bg-white p-8 text-center text-black">
        <div className="flex h-screen flex-col items-center justify-center text-center text-xl">
          <FirstView line1="MY" line2="PORTFOLIO" line3="" />
        </div>
        <ScrollIcon scrollTo="#portfolio" />
      </section>
      <section className="w-full bg-slate-100 px-4 pt-20 text-sm lg:px-14 lg:pt-32 lg:text-lg">
        <Title messege="Take a look at" title="My Work" />
      </section>
    </>
  );
}

export default WorkIntroSection;
