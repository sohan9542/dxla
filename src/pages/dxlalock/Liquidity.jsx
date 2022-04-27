import React,{useState} from "react";
import Trending from "../../component/Trending";
import unknown from "../../images/unknown.png";
import { Link } from "react-router-dom";
import Pagination from '@mui/material/Pagination';

const Liquidity = () => {
    const loop = [1,2,3,3,3,3,3,3,3,3,3,3,3,3,3]
    const [active, setActive] = useState(true)
  return (
    <div className=" w-full ">
      <div className=" flex items-start p-2 lg:p-0 flex-col lg:flex-row">
        <Trending />
        <div style={{ background: "#172A4B" }} className=" w-full p-3">
          <input
            type="text"
            placeholder="Search by LP token address"
            className=" w-full bg-transparent py-1 px-2"
          />
          <div className=" w-full flex items-center justify-end gap-3 my-3">
            <h6 onClick={()=> setActive(false)} className={ active === true  ? " cursor-pointer text-sr hover:text-tr px-2 py-1 border-b border-dashed hover:border-tr" : " cursor-pointer text-tr hover:text-tr px-2 py-1 border-b border-dashed border-tr"}>
              All
            </h6>
            <h6 onClick={()=> setActive(true)} className={ active === false  ? " cursor-pointer text-sr hover:text-tr px-2 py-1 border-b border-dashed hover:border-tr" : " cursor-pointer text-tr hover:text-tr px-2 py-1 border-b border-dashed border-tr"}>
              My lock
            </h6>
          </div>
          <div className=" w-full grid grid-cols-3">
            <h6 className=" font-semibold text-sr">Token</h6>
            <div className=" flex items-center justify-center">
              <h6 className=" font-semibold text-sr">Amount</h6>
            </div>
            <h6 className=" font-semibold text-sr"></h6>
          </div>
          {
              loop.map((item, ind)=>(
                <div key={ind} className=" w-full grid grid-cols-3 py-2 my-2 border-b-2 border-pr">
                <div className=" flex items-center gap-2">
                  <img src={unknown} className=" w-10 h-10" alt="" />
                  <div>
                    <h6 className=" font-semibold text-sr">
                      ELON BUY TWEET 2.0
                      <p className=" font-light text-sm text-sr">EBT2.0</p>
                    </h6>
                  </div>
                </div>
                <div className=" flex items-center justify-center">
                  <p className=" font-light text-sm text-sr">826,933 EBT2.0</p>
                </div>
                <div className=" flex items-center justify-end">
                  <Link
                    to="/"
                    className=" font-semibold text-sm text-tr cursor-pointer"
                  >
                    View
                  </Link>
                </div>
              </div>
              ))
          }
          <div className=" flex items-center justify-center w-full">
          <Pagination count={10} variant="outlined" shape="rounded" />
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Liquidity;
