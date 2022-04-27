import React, { useState } from "react";
import { GiQueenCrown } from "react-icons/gi";
import { FaHome } from "react-icons/fa";

import { RiArrowDownSLine } from "react-icons/ri";
import { BsFillFileEarmarkRichtextFill,BsTelegram } from "react-icons/bs";
import { SiSemanticuireact } from "react-icons/si";
import {

  IoIosArrowUp,
} from "react-icons/io";
import { MdLocalPolice } from "react-icons/md";
import {  AiFillLock, AiFillRocket,AiOutlineDropbox,AiTwotoneAlert ,AiOutlineFileProtect,AiFillTwitterCircle} from "react-icons/ai";

import { NavLink } from "react-router-dom";

const Sidebar = () => {

  const [loaunchpad, setLoaunchpad] = useState(false);
  const [pinkpad, setPinkpad] = useState(false);
  const [dxllock, setDxllock] = useState(false)
  const [dxldrop, setDxldrop] = useState(false)
  return (
    <div className="fixed w-52 top-20  shadow-lg z-50 bg-pr min-h-screen">
      <div className="w-full  flex py-4 flex-col items-center gap-1">
        <div className="w-full  flex items-center justify-center">
          <NavLink
            exact
            activeClassName="hvr tc w-full bg-pr "
            className="py-2 flex items-center gap-2 px-2 text-sr hover:text-tr w-full"
            to="/"
          >
            <FaHome /> Home
          </NavLink>
        </div>
        <div className="w-full  flex items-center justify-center">
          <div
            onClick={() => setLoaunchpad(!loaunchpad)}
            className="py-2 cursor-pointer flex items-center justify-between px-2 text-white hover:text-tr w-full"
          >
            <div className="flex items-center gap-2">
              <AiFillRocket /> Launchpad
            </div>
            {!loaunchpad ? (
              <IoIosArrowUp />
            ) : (
              <RiArrowDownSLine className="h-5 w-5" />
            )}
          </div>
        </div>
        {loaunchpad && (
          <div className="w-full flex items-center flex-col text-sm">
            <div className="w-full pl-1 flex items-center justify-center">
              <NavLink
                exact
                activeClassName="hvr tc w-full"
                className="py-2 flex items-center gap-2 pl-7 text-white hover:text-sr w-full"
                to="/creat-lounchpad"
              >
                Create launchpad
              </NavLink>
            </div>
            <div className="w-full pl-1 flex items-center justify-center">
              <NavLink
                exact
                activeClassName="hvr tc w-full"
                className="py-2 flex items-center gap-2 pl-7 text-white hover:text-sr w-full"
                to="/create-fair-launch"
              >
                Create fair launch
              </NavLink>
            </div>
            <div className="w-full pl-1 flex items-center justify-center">
              <NavLink
                exact
                activeClassName="hvr tc w-full"
                className="py-2 flex items-center gap-2 pl-7 text-white hover:text-sr w-full"
                to="/create-token"
              >
                Create token
              </NavLink>
            </div>
            <div className="w-full pl-1 flex items-center justify-center">
              <NavLink
                exact
                activeClassName="hvr tc w-full"
                className="py-2 flex items-center gap-2 pl-7 text-white hover:text-sr w-full"
                to="/launchpad-list"
              >
                {" "}
                Launchpad list
              </NavLink>
            </div>
          </div>
        )}
        <div className="w-full  flex items-center justify-center">
          <div
            onClick={() => setPinkpad(!pinkpad)}
            className="py-2 cursor-pointer flex items-center justify-between px-2 text-white hover:text-tr w-full"
          >
            <div className="flex items-center gap-2">
              <MdLocalPolice /> DXLA-Pad
            </div>
            {!pinkpad ? (
              <IoIosArrowUp />
            ) : (
              <RiArrowDownSLine className="h-5 w-5" />
            )}
          </div>
        </div>
        {pinkpad && (
          <div className="w-full flex items-center flex-col text-sm">
            <div className="w-full pl-1 flex items-center justify-center">
              <NavLink
                exact
                activeClassName="hvr tc w-full"
                className="py-2 flex items-center gap-2 pl-7 text-white hover:text-sr w-full"
                to="/create-pinkpad"
              >
                Create DXLApad
              </NavLink>
            </div>
            <div className="w-full pl-1 flex items-center justify-center">
              <NavLink
                exact
                activeClassName="hvr tc w-full"
                className="py-2 flex items-center gap-2 pl-7 text-white hover:text-sr w-full"
                to="/pinkpad-list"
              >
                DXLApad List
              </NavLink>
            </div>
          </div>
        )}

        {/* DxL lock */}
        <div className="w-full  flex items-center justify-center">
          <div
            onClick={() => setDxllock(!dxllock)}
            className="py-2 cursor-pointer flex items-center justify-between px-2 text-white hover:text-tr w-full"
          >
            <div className="flex items-center gap-2">
              <AiFillLock /> DXLA-Lock
            </div>
            {!dxllock ? (
              <IoIosArrowUp />
            ) : (
              <RiArrowDownSLine className="h-5 w-5" />
            )}
          </div>
        </div>
        {dxllock && (
          <div className="w-full flex items-center flex-col text-sm">
            <div className="w-full pl-1 flex items-center justify-center">
              <NavLink
                exact
                activeClassName="hvr tc w-full"
                className="py-2 flex items-center gap-2 pl-7 text-white hover:text-sr w-full"
                to="/create-lock"
              >
                Create Lock
              </NavLink>
            </div>
            <div className="w-full pl-1 flex items-center justify-center">
              <NavLink
                exact
                activeClassName="hvr tc w-full"
                className="py-2 flex items-center gap-2 pl-7 text-white hover:text-sr w-full"
                to="/token"
              >
                Token
              </NavLink>
            </div>
            <div className="w-full pl-1 flex items-center justify-center">
              <NavLink
                exact
                activeClassName="hvr tc w-full"
                className="py-2 flex items-center gap-2 pl-7 text-white hover:text-sr w-full"
                to="/liquidity"
              >
                Liquidity
              </NavLink>
            </div>
          </div>
        )}


        {/* drop */}
        <div className="w-full  flex items-center justify-center">
          <div
            onClick={() => setDxldrop(!dxldrop)}
            className="py-2 cursor-pointer flex items-center justify-between px-2 text-white hover:text-tr w-full"
          >
            <div className="flex items-center gap-2">
              <AiOutlineDropbox /> DXLA Drop
            </div>
            {!dxldrop ? (
              <IoIosArrowUp />
            ) : (
              <RiArrowDownSLine className="h-5 w-5" />
            )}
          </div>
        </div>
        {dxldrop && (
          <div className="w-full flex items-center flex-col text-sm">
            <div className="w-full pl-1 flex items-center justify-center">
              <NavLink
                exact
                activeClassName="hvr tc w-full"
                className="py-2 flex items-center gap-2 pl-7 text-white hover:text-sr w-full"
                to="/create-airdrop"
              >
                Create Airdrop
              </NavLink>
            </div>
            <div className="w-full pl-1 flex items-center justify-center">
              <NavLink
                exact
                activeClassName="hvr tc w-full"
                className="py-2 flex items-center gap-2 pl-7 text-white hover:text-sr w-full"
                to="/airdrop-list"
              >
                Airdrop list
              </NavLink>
            </div>
     
          </div>
        )}

        {/*  */}
        <div className="w-full  flex items-center justify-center">
          <NavLink
            exact
            activeClassName="hvr tc w-full bg-pr "
            className="py-2 flex items-center gap-2 px-2 text-sr hover:text-tr w-full"
            to="/leaderboard"
          >
            <GiQueenCrown /> Leaderboard
          </NavLink>
        </div>
        {/*  */}
        <div className="w-full  flex items-center justify-center">
          <NavLink
            exact
            activeClassName="hvr tc w-full bg-pr "
            className="py-2 flex items-center gap-2 px-2 text-sr hover:text-tr w-full"
            to="/anti-bot"
          >
            <SiSemanticuireact /> DXLA Anti-Bot
          </NavLink>
        </div>
        {/*  */}
        <div className="w-full  flex items-center justify-center">
          <NavLink
            exact
            activeClassName="hvr tc w-full bg-pr "
            className="py-2 flex items-center gap-2 px-2 text-sr hover:text-tr w-full"
            to="/pool"
          >
            <AiTwotoneAlert /> Pools Alert
          </NavLink>
        </div>
        {/*  */}
        <div className="w-full  flex items-center justify-center">
          <NavLink
            exact
            activeClassName="hvr tc w-full bg-pr "
            className="py-2 flex items-center gap-2 px-2 text-sr hover:text-tr w-full"
            to="/kyc"
          >
            <AiOutlineFileProtect /> KYC & Audit
          </NavLink>
        </div>
        {/*  */}
        <div className="w-full  flex items-center justify-center">
          <NavLink
            exact
            activeClassName="hvr tc w-full bg-pr "
            className="py-2 flex items-center gap-2 px-2 text-sr hover:text-tr w-full"
            to="/docs"
          >
            <BsFillFileEarmarkRichtextFill /> Docs
          </NavLink>
        </div>
        {/*  */}
        <div className="w-full  flex items-center justify-center">
          <NavLink
            exact
            activeClassName="hvr tc w-full bg-pr "
            className="py-2 flex items-center gap-2 px-2 text-sr hover:text-tr w-full"
            to="/telegram"
          >
            <BsTelegram /> Telegram
          </NavLink>
        </div>
        <div className="w-full  flex items-center justify-center">
          <NavLink
            exact
            activeClassName="hvr tc w-full bg-pr "
            className="py-2 flex items-center gap-2 px-2 text-sr hover:text-tr w-full"
            to="/telegram"
          >
            <AiFillTwitterCircle /> Twitter
          </NavLink>
        </div>
      </div>
    
    </div>
  );
};

export default Sidebar;
