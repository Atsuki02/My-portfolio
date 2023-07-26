import FirstView from "../ui/FirstView";
import ScrollIcon from "../ui/ScrollIcon";

const IntroSection = () => {
  return (
    <section className="flex h-screen w-full flex-col items-center justify-start bg-white p-8 text-center text-black">
      <div className="flex h-screen flex-col items-center justify-center text-center text-xl">
        <FirstView line1="WHO" line2="AM" line3="I" />
      </div>
      <ScrollIcon scrollTo="#aboutMe" />
    </section>
  );
};

export default IntroSection;
