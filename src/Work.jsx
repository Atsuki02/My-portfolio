import PortfolioItem from "./PortfolioItem";
import { portfolioItems } from "./Portfolio";
import ScrollIcon from "./ScrollIcon";
import FirstView from "./FirstView";
import Footer from "./Footer";
import Title from "./Title";

function Work() {
  return (
    <div id="work" className="font-main text-black ">
      <section className="flex h-screen w-full flex-col items-center justify-start bg-white p-8 text-center text-black">
        <div className="flex h-screen flex-col items-center justify-center text-center text-xl">
          <FirstView line1="MY" line2="PORTFOLIO" line3="" />
        </div>
        <ScrollIcon scrollTo="#portfolio" />
      </section>
      <section className="w-full bg-slate-100 px-4 pt-20 text-sm lg:px-14 lg:pt-32 lg:text-lg">
        <Title messege="Take a look at" title="My Work" />
      </section>
      <section id="portfolio" className="bg-slate-100 pb-16 lg:pb-32">
        {portfolioItems.map((item) => {
          return (
            <PortfolioItem
              key={item.title}
              index={item.index}
              title={item.title}
              description={item.description}
              img={item.img}
              technologies={item.technologies}
              bgColor1={item.bgColor1}
              bgColor2={item.bgColor2}
              borderColor1={item.borderColor1}
              textColor1={item.textColor1}
              buttonBgColor={item.buttonBgColor}
              borderColor2={item.borderColor2}
              bgColor3={item.bgColor3}
            />
          );
        })}
      </section>
      <Footer />
    </div>
  );
}

export default Work;
