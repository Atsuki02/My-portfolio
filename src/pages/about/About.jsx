import Footer from "../ui/Footer";
import AboutMeSection from "./AboutMeSection";
import InformationSection from "./InformationSection";
import IntroSection from "./IntroSection";

function About() {
  return (
    <div id="about" className="text-black">
      <IntroSection />
      <AboutMeSection />
      <InformationSection />
      <Footer />
    </div>
  );
}

export default About;
