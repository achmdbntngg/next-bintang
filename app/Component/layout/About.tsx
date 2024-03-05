import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
        <div>
          <h1 className="text-[20px] font-bold uppercase text-[#55e6a5] md-[1rem]">
            ABOUT ME
          </h1>
          <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white">
            Transforming <span className="text-green-400">Vision</span>
          </h2>
          <div className="mb-[3rem] flex items-center md:space-x-10">
            <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
            <p className="text-[19px] text-slate-300 w-[80%]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
              nisi ab molestias ex cum, vero nesciunt quaerat neque aliquam
              dolor distinctio veritatis culpa voluptatibus corporis. Earum
              architecto voluptate reprehenderit saepe.
            </p>
          </div>
          <button className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#48DE7E] text-black flex items-center space-x-2 ">
            <p>Download CV</p>
            <ArrowDownTrayIcon className="w-[1.6rem] h-1.7rem] text-black" />
          </button>
        </div>
        <div
          type-aos="fade-left"
          className="lg:w-[500px] mx-auto md:mx-0 mt-[1rem] lg:mt-0 lg:h-[500px]  relative">
          <Image
            src="/images/about1.jpg"
            alt="user"
            width={300}
            height={300}
            objectFit="contain"
            className="relative z-[11] w-[100%]"
          />
          <div className="absolute w-[110%] mx-auto md:mx-0 mt-0  h-[110%] z-[10] bg-slate-300 top-[-1.2rem] right-[-1.2rem] bottom-[-1rem] left-[-1.2rem] "></div>
        </div>
      </div>
    </div>
  );
};

export default About;
