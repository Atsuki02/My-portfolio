import React from "react";
import { introduction } from "./Portfolio";

function About() {
  return (
    <div id="about" className="my-28 text-black sm:my-40 ">
      <section className="jusify-between flex w-full flex-col bg-slate-800 p-8 text-white sm:w-3/4 sm:p-20">
        <div>
          <h1 className="mb-4 text-left text-xl font-extrabold tracking-wider sm:mb-12 sm:text-7xl">
            ATSUKI KITADA
          </h1>
          <p className="text-xs font-extrabold sm:text-left sm:text-xl ">
            Bron in Japan, currently live in Vancouver, Canada
          </p>
          <div>
            <img src="./images/logo.png" alt="" />
          </div>
        </div>
      </section>
      <section className="mt-8 w-full text-sm sm:mt-16 sm:w-2/3 sm:px-6 sm:text-lg ">
        <h1 className="pb-6 text-center text-xl font-extrabold text-orange-500 sm:pb-16 sm:pl-8 sm:text-left sm:text-5xl">
          Introduction
        </h1>
        <div className="relative">
          <span className="absolute bottom-0 top-0 ml-4 block w-0.5 bg-slate-800 sm:ml-8"></span>
          <p className="pl-8 text-xs tracking-tighter sm:pl-16 sm:text-xl">
            My journey in web development began with a strong curiosity for
            technology and a desire to create beautiful and functional websites.
            <br /> I thrive in environments that encourage creativity,
            problem-solving, and continuous learning.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
