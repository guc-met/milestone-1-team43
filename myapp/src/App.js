

import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import HomePageAML from './components/HomePage'
import LoginAML from './components/Login';
import Profile from './components/Profile'
import Register from './components/Register';
import HR from './components/HR';
import Logout from './components/Logout';
import Salary from './components/Salary';
import ME from './components/MissingsAndExtras';
import Attendance from './components/Attendance';
function App() {
  return (
    <div >
    
     <Router >
        <React.Fragment>
         
          <Route path='/' exact render={() => <HomePageAML />} />
          <Route path='/Login' exact render={() => <LoginAML />} />
          <Route path='/Profile' exact render={() => <Profile />} />
          <Route path='/Register' exact render={() => <Register />} />
          <Route path='/HR' exact render={() => <HR />} />
          <Route path='/D' exact render={() => <Logout />} />
          <Route path='/Salary' exact render={() => <Salary />} />
          <Route path='/ME' exact render={() => <ME />} />
          <Route path='/Attendance' exact render={() => <Attendance />} />

          </React.Fragment>
          </Router>
          
          
         

    </div>
  );
}

export default App;
