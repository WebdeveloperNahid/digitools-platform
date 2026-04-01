import React from "react";
import userImg from "../../assets/user.png";
import Stroke from "../../assets/Icon (Stroke).png"
import Stroke1 from "../../assets/Icon (Stroke) (1).png"

const GetStarted = () => {
  return (
    <div  className="h-full ">
      <div className="space-y-2 text-center mt-25">
        <h1 className="text-3xl font-semibold">Get Started in 3 Steps</h1>
        <p className="text-[#888888]">
          {" "}
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[83%] mx-auto gap-4 mb-10 ">
        <div>
          <div className="p-7 bg-white shadow-2xl h-full flex flex-col rounded-2xl">
            <div className="text-end">
              <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-5 rounded-[50%] p-2 text-white  ">
                01
              </span>
            </div>

            <div className="bg-[#fcdeffc9] w-20 p-4 rounded-[50%] mx-auto mt-5">
              <img src={userImg} alt="" />
            </div>

            <h1 className="text-2xl font-semibold text-center my-5">
              Create Account
            </h1>
            <p className="text-center pb-7 text-[#888888] ">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>
        </div>

        <div className="h-full  ">
          <div className="p-7 bg-white shadow-2xl h-full flex flex-col rounded-2xl">
            <div className="text-end">
              <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-5 rounded-[50%] p-2 text-white  ">
                02
              </span>
            </div>

            <div className="bg-[#fcdeffc9] w-20 p-4 rounded-[50%] mx-auto mt-5">
              <img src={Stroke} alt="" />
            </div>

            <h1 className="text-2xl font-semibold text-center my-5">
              Choose Products
            </h1>
            <p className="text-center pb-7 text-[#888888] ">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>

        </div>

        <div className="h-full ">
          <div className="p-7 bg-white shadow-2xl h-full flex flex-col rounded-2xl ">
            <div className="text-end">
              <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-5 rounded-[50%] p-2 text-white  ">
                03
              </span>
            </div>

            <div className="bg-[#fcdeffc9] w-20 p-4 rounded-[50%] mx-auto mt-5">
              <img src={Stroke1} alt="" />
            </div>

            <h1 className="text-2xl font-semibold text-center my-5">
              Start Creating
            </h1>
            <p className="text-center pb-7 text-[#888888] ">
              Download and start using your premium tools immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
