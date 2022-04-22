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
        <div className={showsidebar ? 'ml-20 lg:ml-52 mt-20 p-3' : "ml-0"}>
          <Switch>
            <Route exact path="/">
              <Dashboard />
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
       
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
