import React from "react";
import Trending from "../../component/Trending";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Cart from "../../component/Cart";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const AirdropList = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [age, setAge] = React.useState("");

  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className=" w-full">
      <div className=" w-full flex items-start ">
        <Trending />
        <>
          <div className=" w-full">
            <h1 className=" text-4xl  text-white pt-5 pb-5">Airdrop</h1>
            <div
              style={{ background: "#172A4B" }}
              className=" w-full rounded-md px-2 py-4 grid grid-cols-1 lg:grid-cols-2"
            >
              <div className=" flex items-center justify-center flex-col">
                <p className=" text-sm text-sr font-light">AIRDROP LAUNCHED</p>
                <h6 className="  text-sr  font-bold text-2xl">170</h6>
              </div>
              <div className=" flex items-center justify-center flex-col">
                <p className=" text-sm text-sr font-light">PARTICIPANTS IN ALL-TIME

</p>
                <h6 className="  text-sr  font-bold text-2xl">12506

</h6>
              </div>
            </div>
            <div className=" w-full flex items-center justify-center mt-10">
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab label="All Airdrops" {...a11yProps(0)} />
                  <Tab label="My Airdrops" {...a11yProps(1)} />
                  <Tab label="Created By You" {...a11yProps(2)} />
                </Tabs>
              </Box>
            </div>
            <div className=" w-full pt-4 flex items-end gap-2">
              <input
                type="text"
                placeholder="Enter token name or token symbol"
                className=" w-full bg-transparent py-1 px-2 rounded-3xl"
              />
              <div>
                <p className=" text-tr text-xs pb-1">Filter by</p>
                <select className=" w-26 bg-transparent py-2 px-2 text-sm rounded-3xl">
                  <option value="">All status</option>
                  <option value="">KYC</option>
                  <option value="">Upcoming</option>
                </select>
              </div>
              <div>
                <p className=" text-tr text-xs pb-1">Short by</p>
                <select className="  bg-transparent py-2 w-26 px-2 text-sm rounded-3xl">
                  <option value="">No filter</option>
                  <option value="">hard cap</option>
                  <option value="">soft cap</option>
                </select>
              </div>
            </div>
            <TabPanel value={value} index={0}>
              <div className=" w-full grid grid-cols-1 lg:grid-cols-3 gap-3">
                <Cart />
                <Cart />
                <Cart />
                <Cart />
              </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <div className=" flex items-center justify-center text-sm text-sr">
                <p>No data</p>
              </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <div className=" flex items-center justify-center text-sm text-sr">
                <p>No data</p>
              </div>
            </TabPanel>
          </div>
        </>
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

export default AirdropList;
