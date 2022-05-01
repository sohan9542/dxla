import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import baby from "../images/baby.png";
import Trending from "../component/Trending";
import Countdown from "react-countdown";
const Home = () => {
  return (
 <div className=" flex items-start w-full gap-2">
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
 
        <div style={{ background: "#172A4B" }} className=" rounded-3xl overflow-hidden">
          <div className=" flex items-center w-full flex-col justify-center bg-white py-3">
            <h1 className=" text-3xl font-bold">Banner</h1>
            <img src={baby} className=" h-12 rounded-full" alt="" />
          </div>
          <h4 className="px-3 text-white pt-2 w-full text-center">Project name</h4>
          <p className="px-3 text-white pb-2 text-xs w-full text-center">
            Max Contributors x Dao
          </p>

          <p className="px-3 text-white">Progress (65.00%)</p>
          <div className=" px-3">
          <div className=" bg-pr w-full h-2 rounded-xl my-2 relative overflow-hidden">
<div className=" absolute top-0 left-0 h-full rounded-xl bg-pink-600 w-2/3">

</div>
          </div>
          </div>
          <div className="px-3 flex items-center justify-between text-sr text-xs">
            <p className=" font-semibold">Hard Cap</p>
            <p className=" text-pink-600">X BNB</p>
          </div>
          <div className="px-3 flex items-center justify-between text-sr text-sm pt-1">
            <p className=" font-semibold">Liquidity </p>
            <p className=" text-pink-600">70%</p>
          </div>
          <div className="px-3 flex items-center justify-between text-sr text-sm pt-1">
            <p className=" font-semibold">Lockup Time:</p>
            <p className=" text-pink-600">X days</p>
          </div>
          <div className=" px-3 flex items-center justify-start gap-3 text-sr text-sm pt-1">
              <p className=" text-xs text-white">Listing time:</p>
              <Countdown date={Date.now() + 100000000} />
            </div>
          <div className="px-3 pb-3 flex items-center justify-between  pt-3">
            
            <div className=" text-white">
              <button className=" border-2 border-white text-tr text-sm py-2 px-3 rounded-md flex items-center gap-1">
                Whitelist
              </button>
            </div>
          </div>
        </div>
        <div style={{ background: "#172A4B" }} className=" rounded-3xl overflow-hidden">
          <div className=" flex items-center w-full flex-col justify-center bg-white py-3">
            <h1 className=" text-3xl font-bold">Banner</h1>
            <img src={baby} className=" h-12 rounded-full" alt="" />
          </div>
          <h4 className="px-3 text-white pt-2 w-full text-center">Project name</h4>
          <p className="px-3 text-white pb-2 text-xs w-full text-center">
            Max Contributors x Dao
          </p>

          <p className="px-3 text-white">Progress (65.00%)</p>
          <div className=" px-3">
          <div className=" bg-pr w-full h-2 rounded-xl my-2 relative overflow-hidden">
<div className=" absolute top-0 left-0 h-full rounded-xl bg-pink-600 w-2/3">

</div>
          </div>
          </div>
          <div className="px-3 flex items-center justify-between text-sr text-xs">
            <p className=" font-semibold">Hard Cap</p>
            <p className=" text-pink-600">X BNB</p>
          </div>
          <div className="px-3 flex items-center justify-between text-sr text-sm pt-1">
            <p className=" font-semibold">Liquidity </p>
            <p className=" text-pink-600">70%</p>
          </div>
          <div className="px-3 flex items-center justify-between text-sr text-sm pt-1">
            <p className=" font-semibold">Lockup Time:</p>
            <p className=" text-pink-600">X days</p>
          </div>
          <div className=" px-3 flex items-center justify-start gap-3 text-sr text-sm pt-1">
              <p className=" text-xs text-white">Listing time:</p>
              <Countdown date={Date.now() + 100000000} />
            </div>
          <div className="px-3 pb-3 flex items-center justify-between  pt-3">
            
            <div className=" text-white">
              <button className=" border-2 border-white text-tr text-sm py-2 px-3 rounded-md flex items-center gap-1">
                Whitelist
              </button>
            </div>
          </div>
        </div>
     
      </div>
    </div>
    <Trending/>
 </div>
  );
};

export default Home;
