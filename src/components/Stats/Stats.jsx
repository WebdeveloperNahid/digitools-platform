import React from "react";

const Stats = () => {
  return (
    <div className="mt-15 ">
      <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-10 flex justify-center space-x-15">
        <div>
          <h1 className="text-2xl text-white font-semibold">50K+</h1>
          <p className="text-[#bebebe] text-[12px] pt-3 ">Active Users</p>
        </div>
        <div className="border-x-2 px-20 text-white ">
          <h1 className="text-2xl text-white font-semibold">200+</h1>
          <p className="text-[#bebebe] text-[12px] pt-3 ">Premium Tools</p>
        </div>
        <div>
          <h1 className="text-2xl text-white font-semibold">4.9</h1>
          <p className="text-[#bebebe] text-[12px] pt-3 ">Rating</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
