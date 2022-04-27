
import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CreateToken from "../component/CreateToken";
import Trending from "../component/Trending";



const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  bgcolor: "#172A4B",

  boxShadow: 24,
 
};
const Antibot = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <di className=" w-full">

   <div className=" flex items-start gap-2  flex-col lg:flex-row">
     <Trending/>
   <div className=" w-full p-4 rounded-md" style={{ background: "#172A4B" }}>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} className=" w-2/5">
       <CreateToken/>
      </Box>
    </Modal>

    <p className=" text-xs text-tr">(*) is required field.</p>
    <div className=" flex flex-wrap justify-between w-full">
      <h6 className=" text-white text-sm py-2">
        Token address <span className=" text-tr">*</span>{" "}
      </h6>
      <div className=" flex items-center gap-2">
        <button
        
          className=" px-3 py-1 bg-pr text-sr hover:text-white font-light text-sm rounded-sm"
        >
          Select Token
        </button>
        <button
          onClick={handleOpen}
          className=" px-3 py-1 bg-pr text-sr hover:text-white font-light text-sm rounded-sm"
        >
          Create Token
        </button>
      </div>
    </div>
    <div className=" py-3">
      <input
        type="text"
        placeholder="Ex: Pinkmoon"
        className=" w-full bg-transparent py-1 px-2"
      />
      <p className=" text-xs text-tr pt-1">Choose a token to integrate with DXLA Anti-Bot.</p>

      <p className=" text-xs text-tr pt-1">
      Check out the guide how to integrate Pink Anti-Bot for custom contract here: https://github.com/pinkmoonfinance/pink-antibot-guide
      </p>
 
    </div>
  </div>
   </div>
    </di>
  )
}

export default Antibot