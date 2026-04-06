import { CircleDot, Play } from "lucide-react";
import React from "react";
import bannerImg from "../../../assets/banner.png"

const Hero = () => {
  return (
    <div className="space-y-5 md:flex w-[83%] mx-auto mt-10 ">
      <div className="w-[83%] mx-auto mt-15 ">
        <div className="space-y-3">
          <div className="flex ">
            <span className="flex bg-[#E1E7FF] px-2 gap-2 rounded-2xl py-1  ">
              <CircleDot className="text-[#4F39F6]  " />
              <h2 className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent text-[14px]">
                New: AI-Powered Tools Available
              </h2>
            </span>
          </div>

          <h1 className="text-4xl font-bold">
            Supercharge Your <br /> <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent text-[14px]text">Digital Workflow</span>
          </h1>
          <p className="text-[#888888] text-[11px]">
            Access premium AI tools, design assets, templates, and productivity{" "}
            <br />
            software—all in one place. Start creating faster today. <br />
            Explore Products
          </p>
        </div>
        <div className="flex gap-5 mt-4">
          <button className="rounded-2xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] px-3 py-1 text-white hover:-translate-y-2 duration-500 cursor-pointer">
            <p>Explore Products</p>
          </button>
          <button className="flex justify-center items-center gap-2 rounded-2xl  btn btn-outline bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent px-3 py-1 border-2 border-[#4F39F6] hover:-translate-y-2 duration-500">
            {" "}
            <Play className="text-[#4F39F6]  " /> <p> Watch Demo</p>
          </button>
        </div>
      </div>
      <div>
        <img src={bannerImg} alt="" />
      </div>

    </div>
  );
};

export default Hero;
