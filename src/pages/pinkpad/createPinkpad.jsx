import React from "react";
import Steps from "../../component/Steps";
import Trending from "../../component/Trending";

const CreatePinkpad = () => {
  const steps = [
    {
      h1: "Verify Token",
      p: "Enter the token address and verify",
    },
    {
      h1: "DXLApad",
      p: "Enter the fairlaunch information that you want to raise , that should be enter all details about your pool",
    },
    {
      h1: "Add Additional Info",
      p: "Let people know who you are",
    },
    {
      h1: "Finish",
      p: "Review your information",
    },
  ];
  return (
    <div>
      <div className=" flex items-center mt-20 p-2 lg:p-0 flex-col lg:flex-row">
        <Trending />
        <div className=" w-full relative">
          <div className="w-full pt-5 pb-2">
            <Steps steps={steps} />
          </div>

          <div
            className=" absolute z-10 top-0 left-0 w-full h-full flex items-center justify-center"
            style={{ background: "rgba(0,0,0,0.6)" }}
          >
            <h6 className=" font-light text-xl text-sr">
              <span className=" text-tr cursor-pointer">Connect Wallet</span> to
              continue
            </h6>
          </div>
        </div>
      </div>
      <div className=" w-full flex items-center justify-center pt-4">
        <p className=" text-center text-sr  w-3/4 font-light">
          Disclaimer: The information provided shall not in any way constitute a
          recommendation as to whether you should invest in any product
          discussed. We accept no liability for any loss occasioned to any
          person acting or refraining from action as a result of any material
          provided or published.
        </p>
      </div>
    </div>
  );
};

export default CreatePinkpad;
