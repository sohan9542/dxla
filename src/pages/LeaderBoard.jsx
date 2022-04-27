import React from "react";
import Trending from "../component/Trending";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import unknown from "../images/unknown.png";
import { Link } from "react-router-dom";
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
const LeaderBoard = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const loop = [1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 5, 5, 5, 5];
  return (
    <div className=" w-full">
      <div className=" flex items-start container p-2 lg:p-0 flex-col lg:flex-row">
        <Trending />
        <div className=" w-full" style={{ background: "#172A4B" }}>
          <Box sx={{ maxWidth: { xs: 320, sm: 480, lg: 850 } }}>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >
              {loop.map((item, ind) => (
                <Tab label={`Week ${ind + 1}/2022`} {...a11yProps(ind)} />
              ))}
            </Tabs>
            {loop.map((item, ind) => (
              <TabPanel value={value} index={ind}>
                {loop.map((item, ind) => (
                  <div
                    key={ind}
                    className=" w-full flex items-center justify-between py-2 my-2 border-b-2 border-pr"
                  >
                    <div className=" flex items-center gap-4">
                      <h1 className=" text-3xl font-bold text-sr">{ind + 1}</h1>
                      <img
                        src="https://www.luckydogebsc.org/file/200.png"
                        className=" w-10 h-10"
                        alt=""
                      />
                      <div className=" w-full">
                        <h6 className=" font-semibold text-sm text-sr">
                          Jump Satoshi TokenJST
                         
                        </h6>
                        <p className=" font-light text-sm text-sr w-full">
                            Raised:
                            <a href="#" className=" text-tr">
                              9,028.184383576405 BNB
                            </a>
                            – Listing time:
                            <a href="#" className=" text-tr">
                              2022.04.25 19:48
                            </a>
                          </p>
                      </div>
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
                ))}
              </TabPanel>
            ))}
          </Box>
        </div>
      </div>
      <div className=' w-full flex items-center justify-center pt-4'>
<p className=' text-center text-sr  w-3/4 font-light'>Disclaimer: The information provided shall not in any way constitute a recommendation as to whether you should invest in any product discussed. We accept no liability for any loss occasioned to any person acting or refraining from action as a result of any material provided or published.</p>
     </div>
    </div>
  );
};

export default LeaderBoard;
