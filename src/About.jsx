// components/About.js
import React from "react";

import Footer from "./Footer";
import IntroSection from "./IntroSection";
import AboutMeSection from "./AboutMeSection";
import InformationSection from "./InformationSection";

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
