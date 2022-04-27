import React from "react";
import Trending from "../../component/Trending";

const CreateAirdrop = () => {
  return (
    <div className=" w-full">
      <div className=" w-full flex items-start p-2 lg:p-0 flex-col lg:flex-row">
        <Trending />
    <div className=" w-full">
        <h1 className=" font-bold text-4xl text-sr pb-12">Create New Airdrop</h1>
    <div style={{ background: "#172A4B" }} className=" p-4 w-full">
          <p className=" text-xs text-tr pt-3">(*) is required field.</p>

          <h6 className=" text-white text-sm pb-2 pt-3">
            Token address<span className=" text-tr">*</span>
          </h6>
          <input
            type="text"
            placeholder="Ex:DXLA MOON"
            className=" w-full bg-transparent py-1 px-2"
          />
          <p className=" text-xs text-tr pt-1">Create airdrop fee: 0.5 BNB</p>
          <div className=" w-full flex items-center justify-center pt-5">
            <button className=" px-3 py-1 bg-pr text-sr hover:text-white font-light text-sm rounded-sm">
             Next
            </button>
          </div>
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

export default CreateAirdrop;
