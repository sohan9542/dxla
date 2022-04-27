import React from "react";
import Trending from "../../component/Trending";

const DxlaLockCreate = () => {
  return (
    <div className=" w-full">
      <div className=" w-full flex items-start p-2 lg:p-0 flex-col lg:flex-row">
        <Trending />
        <div style={{ background: "#172A4B" }} className=" p-4 w-full">
          <p className=" text-sr text-lg pb-2 mb-2 border-b">Create your lock</p>

          <div className=" px-2 py-2 w-full bg-pr text-white text-sm lex items-center justify-center">
            <p>
              PinkSale is audited by Certik:{" "}
              <a
                href="https://leaderboard.certik.io/projects/pinksale"
                className=" text-tr"
              >
                https://leaderboard.certik.io/projects/pinksale
              </a>
            </p>
          </div>
          <h6 className=" text-white text-sm pb-2 pt-3">
            Token or LP Token address<span className=" text-tr">*</span>
          </h6>
          <input
            type="text"
            placeholder="Enter Token or LP Token address"
            className=" w-full bg-transparent py-1 px-2"
          />
          <h6 className=" text-white text-sm pb-2 pt-3">
            Amount <span className=" text-tr">*</span>
          </h6>
          <input
            type="text"
            placeholder="Enter Amount"
            className=" w-full bg-transparent py-1 px-2"
          />
          <h6 className=" text-white text-sm pb-2 pt-3">
            Lock until (UTC time) <span className=" text-tr">*</span>
          </h6>
          <input
            type="date"
            placeholder="Ex: 18"
            className=" w-full bg-transparent py-1 px-2"
          />
          <div className=" p-2 my-3 flex items-center justify-center border-2 border-yellow-400 rounded-md">
            <p className=" text-yellow-500 text-sm">
              Please exclude DXLA's lockup address{" "}
              <span className=" text-tr">
                {" "}
                0x7ee058420e5937496F5a2096f04caA7721cF70cc
              </span>{" "}
              from fees, rewards, max tx amount to start locking tokens.
              <br />
              We don't support rebase tokens.
            </p>
          </div>

          <div className=" w-full flex items-center justify-center flex-col gap-2 pt-5">
              <p className=" text-sm text-sr">You will pay: 0 BNB</p>
            <button className=" px-3 py-1 bg-pr text-sr hover:text-white font-light text-sm rounded-sm">
              Lock
            </button>
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

export default DxlaLockCreate;
