import React from "react";
import SkillsSection from "./SkillsSection";
import ContactSection from "./ContactSection";
import SelfIntroduction from "./SelfIntroduction";

function InformationSection() {
  return (
    <section className="w-full bg-slate-100 px-4 py-20 text-sm lg:px-14 lg:py-32 lg:text-lg">
      <SelfIntroduction />
      <SkillsSection />
      <ContactSection />
    </section>
  );
}

export default InformationSection;
