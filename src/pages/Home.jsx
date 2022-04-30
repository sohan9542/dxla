import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Cart from "../component/Cart";
import baby from "../images/baby.png";
import { AiFillLock } from "react-icons/ai";
import Countdown from "react-countdown";
const Home = () => {
  return (
    <div className=" mt-10 lg:p-4 w-full">
      <div className=" w-full border-2 border-tr text-white py-8 bg-nr rounded-md flex items-center justify-center">
        <h4>This is for banner ads</h4>
      </div>
      <div className="mt-10 w-full flex items-center justify-center ">
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel
            value="female"
            control={<Radio />}
            label="All Presale"
          />
          <FormControlLabel
            value="male"
            control={<Radio />}
            label="Past Presale"
          />
          <FormControlLabel
            value="other"
            control={<Radio />}
            label="My Contributors"
          />
        </RadioGroup>
      </div>
      <h1 className=" text-white font-bold text-3xl pb-2">Featured</h1>
      <div className=" w-full grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div style={{ background: "#172A4B" }} className=" rounded-3xl p-3">
          <div className=" flex items-center w-full justify-center">
            <img src={baby} className=" h-12 rounded-full" alt="" />
          </div>
          <h4 className=" text-white pt-2 w-full text-center">Project name</h4>
          <p className=" text-white pb-2 text-xs w-full text-center">
            Max Contributors x Dao
          </p>

          <p className=" text-white">Progress (0.00%)</p>
          <div className=" bg-pr w-full h-2 rounded-xl my-2"></div>
          <div className=" flex items-center justify-between text-sr text-xs">
            <p>0 BNB</p>
            <p>200 BNB</p>
          </div>
          <div className=" flex items-center justify-between text-sr text-sm pt-1">
            <p className=" font-semibold">Liquidity %:</p>
            <p>70%</p>
          </div>
          <div className=" flex items-center justify-between text-sr text-sm pt-1">
            <p className=" font-semibold">Lockup Time:</p>
            <p>3650 days</p>
          </div>
          <div className=" flex items-center justify-between  pt-3">
            <div className=" text-white">
              <p className=" text-xs text-tr">Sale Starts In:</p>
              <Countdown date={Date.now() + 100000000} />
            </div>
            <div className=" text-white">
              <button className=" bg-pr text-white py-2 px-3 rounded-md flex items-center gap-1">
                Whitelist
              </button>
            </div>
          </div>
        </div>
        <div style={{ background: "#172A4B" }} className=" rounded-3xl p-3">
          <div className=" flex items-center w-full justify-center">
            <img src={baby} className=" h-12 rounded-full" alt="" />
          </div>
          <h4 className=" text-white pt-2 w-full text-center">Project name</h4>
          <p className=" text-white pb-2 text-xs w-full text-center">
            Max Contributors x Dao
          </p>

          <p className=" text-white">Progress (0.00%)</p>
          <div className=" bg-pr w-full h-2 rounded-xl my-2"></div>
          <div className=" flex items-center justify-between text-sr text-xs">
            <p>0 BNB</p>
            <p>200 BNB</p>
          </div>
          <div className=" flex items-center justify-between text-sr text-sm pt-1">
            <p className=" font-semibold">Liquidity %:</p>
            <p>70%</p>
          </div>
          <div className=" flex items-center justify-between text-sr text-sm pt-1">
            <p className=" font-semibold">Lockup Time:</p>
            <p>3650 days</p>
          </div>
          <div className=" flex items-center justify-between  pt-3">
            <div className=" text-white">
              <p className=" text-xs text-tr">Sale Starts In:</p>
              <Countdown date={Date.now() + 100000000} />
            </div>
            <div className=" text-white">
              <button className=" bg-pr text-white py-2 px-3 rounded-md flex items-center gap-1">
                Whitelist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
