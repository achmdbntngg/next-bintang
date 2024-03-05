/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { use } from "react";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import Image from "next/image";
import { ArrowDownTrayIcon, PlayCircleIcon } from "@heroicons/react/20/solid";

const Hero = () => {
  return (
    <div className="h-[100vh] bg-[url('/images/banner.jpg')] mt-[5vh] bg-cover bg-center">
      <Particle />
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
        <div>
          <h1 className="text-[35px] md:text-[50px] text-white font-bold">
            HI, I'M <span className="text-green-400">ACHMAD BINTANG</span>
          </h1>

          <TextEffect />
          <p className="mt-[1.5rem] text-[18px] text-[#ffffff] ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
            aperiam ex eaque molestias velit officiis et delectus, vero
            voluptatum obcaecati a impedit itaque voluptate? Labore deleniti
            nihil consectetur eius culpa.
          </p>
          <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
            <button className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#48DE7E] text-black flex items-center space-x-2 ">
              <p>Download CV</p>
              <ArrowDownTrayIcon className="w-[1.6rem] h-1.7rem] text-black" />
            </button>
            <button className="flex items-center space-x-2">
              <PlayCircleIcon className="w-[4rem] hover:text-yellow-400 transition-all duration-200 text-green-400 " />
              <p className="text-[20px] font-semibold text-white">
                Watch The Video
              </p>
            </button>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          className="w-[500px] hidden relative lg:flex items-center rounded-full h-[400px] ">
          <Image
            src="/images/ui1.png"
            alt="user"
            width={500}
            height={500}
            className="object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
