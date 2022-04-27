import { FiPlus } from "react-icons/fi";
import { GoThreeBars } from "react-icons/go";
import { IoMagnet } from "react-icons/io5";
import { BiBarChart } from "react-icons/bi"
import logo from "../images/logo.svg"
import {Link} from "react-router-dom"
import IconButton from '@mui/material/IconButton';

import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useState } from "react";
const Topbar = ({ setShowsidebar, showsidebar }) => {
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="fixed top-0 left-0 px-2 lg:px-4 w-full bg-pr h-20 z-40 shadow-md flex items-center ">
      <div className="flex items-center justify-between gap-4 w-full">
      <div className='flex w-full items-center gap-2 h-14 pl-0'>
            { showsidebar ?  <BiBarChart onClick={() => setShowsidebar(false)} className='cursor-pointer transform rotate-90 w-7 h-7 text-tr' />: <GoThreeBars onClick={() => setShowsidebar(true)} className='cursor-pointer w-7 h-7 text-tr'/>}
            <Link to="/">
            <img
                    className="h-12 w-auto cursor-pointer"
                    src={logo}
                    alt="Workflow"

                /></Link>                
            </div>
        <div className="  items-center hidden lg:flex justify-end gap-4">
          {/* <div>
            <button className=" bg-nr text-white py-2 px-3 rounded-md flex items-center gap-1">
              <FiPlus />
              
            </button>
            
          </div> */}
          <div className=" bg-nr text-white  rounded-md inline-flex  justify-center items-center gap-1">
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <FiPlus /> Create
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}><Link to="/creat-lounchpad" className=" text-tr">Launchepad</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to="/create-fair-launch" className=" text-tr">FairLaunchpad</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to="/token" className=" text-tr">Token</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to="/create-lock" className=" text-tr">DXLA-Lock</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to="/create-pinkpad" className=" text-tr">DXLA-Pad</Link></MenuItem>
              </Menu>
            </div>
          <div>
            <button className=" bg-nr text-white py-2 px-3 rounded-md inline-flex w-40 justify-center items-center gap-1">
              <IoMagnet />
              Bsc Magnet
            </button>
          </div>
          <div>
            <button className=" bg-nr text-white py-2 px-3 rounded-md flex items-center gap-1">
              Connect
            </button>
          </div>
        </div>
        <div className="  items-center flex lg:hidden justify-end gap-1">
   
          <div className=" bg-nr text-white  rounded-md inline-flex  justify-center items-center gap-1">
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <FiPlus />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                 <MenuItem onClick={handleClose}><Link to="/creat-lounchpad" className=" text-tr">Launchepad</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to="/create-fair-launch" className=" text-tr">FairLaunchpad</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to="/token" className=" text-tr">Token</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to="/create-lock" className=" text-tr">DXLA-Lock</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to="/create-pinkpad" className=" text-tr">DXLA-Pad</Link></MenuItem>
              </Menu>
            </div>
     
         
          <div>
            <button className=" bg-nr text-white py-2 px-3 rounded-md inline-flex  justify-center items-center gap-1">
              <IoMagnet />
            
            </button>
          </div>
          <div>
            <button className=" bg-nr text-white py-2 px-3 text-xs rounded-md flex items-center gap-1">
              Connect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
