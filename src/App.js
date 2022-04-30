import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Topbar from './layout/Topbar';
import Sidebar from './layout/Sidebar';
import Dashboard from './component/Dashboard';
import CreateLaunchpad from './pages/lounchpad/CreateLaunchpad';
import CreateFairLaunch from './pages/lounchpad/CreateFairLaunch';
import CreateTokenpage from './pages/lounchpad/CreateTokenpage';
import LaunchpadList from './pages/lounchpad/LaunchpadList';
import CreatePinkpad from './pages/pinkpad/createPinkpad';
import PinkpadList from './pages/pinkpad/PinkpadList';
import DxlaLockCreate from './pages/dxlalock/DxlaLockCreate';
import LockToken from './pages/dxlalock/LockToken';
import Liquidity from './pages/dxlalock/Liquidity';
import CreateAirdrop from './pages/airdrop/CreateAirdrop';
import AirdropList from './pages/airdrop/AirdropList';
import LeaderBoard from './pages/LeaderBoard';
import Antibot from './pages/Antibot';
import Home from './pages/Home';



const App = () => {
  const [showsidebar, setShowsidebar] = useState(true)
  return (
    <div className=' min-h-screen bg-pr overflow-x-hidden'>
      <Router>
        {showsidebar && <Sidebar
          setShowsidebar={setShowsidebar} />}
        <div className={showsidebar ? 'ml-20 lg:ml-52 relative' : "ml-0"}>
          <Topbar
            showsidebar={showsidebar}
            setShowsidebar={setShowsidebar} />
        </div>
        <div className={showsidebar ? 'ml-0 lg:ml-52 mt-20 p-3' : "ml-0 mt-24"}>
          <Switch>
            <Route exact path="/">
              {/* <Dashboard /> */}
              <Home/>
            </Route>
            <Route path="/creat-lounchpad">
              <CreateLaunchpad />
            </Route>
            <Route path="/create-fair-launch">
              <CreateFairLaunch />
            </Route>
            <Route path="/create-token">
              <CreateTokenpage />
            </Route>
            <Route path="/launchpad-list">
              <LaunchpadList />
            </Route>
            <Route path="/create-pinkpad">
              <CreatePinkpad />
            </Route>
            <Route path="/pinkpad-list">
              <PinkpadList />
            </Route>
            <Route path="/create-lock">
              <DxlaLockCreate />
            </Route>
            <Route path="/token">
              <LockToken />
            </Route>
       
            <Route path="/liquidity">
              <Liquidity />
            </Route>
            <Route path="/create-airdrop">
              <CreateAirdrop />
            </Route>
            <Route path="/airdrop-list">
              <AirdropList />
            </Route>
            <Route path="/leaderboard">
              <LeaderBoard />
            </Route>
            <Route path="/anti-bot">
              <Antibot />
            </Route>
       
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
