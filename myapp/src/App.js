
import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import HomePageAML from './components/HomePage'
import LoginAML from './components/Login';
import Profile from './components/Profile'
import Register from './components/Register';
import StaffHomePage from './components/StaffHomePage';
function App() {
  return (
    <div >
    
     <Router >
        <React.Fragment>
         
          <Route path='/' exact render={() => <HomePageAML />} />
          <Route path='/Login' exact render={() => <LoginAML />} />
          <Route path='/Profile' exact render={() => <Profile />} />
          <Route path='/Register' exact render={() => <Register />} />
          <Route path='/StaffHP' exact render={() => <StaffHomePage />} />

          </React.Fragment>
          </Router>
          
          
         

    </div>
  );
}

export default App;
