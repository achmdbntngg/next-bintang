import {
  CodeBracketSquareIcon,
  GlobeAltIcon,
  PaintBrushIcon,
} from "@heroicons/react/20/solid";
import React from "react";

const Services = () => {
  return (
    <div className="bg-[#121121] pt-[4rem] md:pt-[8rem] pb-[5rem]">
      <p className="heading">
        My <span className="text-green-300">Services</span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white ">
        <div className="bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem] ">
          <CodeBracketSquareIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
          <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
            Frontend
          </h1>
          <p className="text-[15px] text-[#d3fae8] font-mono">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque quia
            quam magnam? Rem aperiam nostrum quia incidunt voluptates quos
            culpa, nesciunt doloribus quaerat quod dolore quidem consectetur
            odio eligendi voluptate.
          </p>
        </div>

        <div className="bg-yellow-600 hover:sclae-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem] ">
          <PaintBrushIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
          <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
            Graphic Design
          </h1>
          <p className="text-[15px] text-[#d3fae8] font-mono">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque quia
            quam magnam? Rem aperiam nostrum quia incidunt voluptates quos
            culpa, nesciunt doloribus quaerat quod dolore quidem consectetur
            odio eligendi voluptate.
          </p>
        </div>

        <div className="bg-green-500 hover:sclae-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem] ">
          <GlobeAltIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
          <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
            Web Developer
          </h1>
          <p className="text-[15px] text-[#d3fae8] font-mono">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque quia
            quam magnam? Rem aperiam nostrum quia incidunt voluptates quos
            culpa, nesciunt doloribus quaerat quod dolore quidem consectetur
            odio eligendi voluptate.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
