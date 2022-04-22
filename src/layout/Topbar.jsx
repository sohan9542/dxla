import { FiPlus } from "react-icons/fi";
import { GoThreeBars } from "react-icons/go";
import { IoMagnet } from "react-icons/io5";
import { BiBarChart } from "react-icons/bi"
import logo from "../images/logo.svg"
const Topbar = ({ setShowsidebar, showsidebar }) => {
  return (
    <div className="fixed top-0 left-0 px-4 w-full bg-pr h-20 z-50 shadow-md flex items-center ">
      <div className="flex items-center justify-between gap-4 w-full">
      <div className='flex w-full items-center gap-2 h-14 pl-0'>
            { showsidebar ?  <BiBarChart onClick={() => setShowsidebar(false)} className='cursor-pointer transform rotate-90 w-7 h-7 text-tr' />: <GoThreeBars onClick={() => setShowsidebar(true)} className='cursor-pointer w-7 h-7 text-tr'/>}
                <img
                    className="h-12 w-auto cursor-pointer"
                    src={logo}
                    alt="Workflow"

                />
                
            </div>
        <div className=" flex items-center justify-end gap-4">
          <div>
            <button className=" bg-nr text-white py-2 px-3 rounded-md flex items-center gap-1">
              <FiPlus />
              Create
            </button>
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
      </div>
    </div>
  );
};

export default Topbar;
