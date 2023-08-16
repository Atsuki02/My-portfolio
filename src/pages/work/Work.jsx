import PortfolioSection from "./PortfolioSection";
import Footer from "../ui/Footer";
import WorkIntroSection from "./WorkIntroSection";

function Work() {
  return (
    <div id="work" className="font-main text-black ">
      <WorkIntroSection />
      <PortfolioSection />
      <Footer />
    </div>
  );
}

export default Work;
