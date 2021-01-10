
import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import HomePageAML from './components/HomePage'
import LoginAML from './components/Login';
import Profile from './components/Profile'
function App() {
  return (
    <div >
    
     <Router >
        <React.Fragment>
         
          <Route path='/' exact render={() => <HomePageAML />} />
          <Route path='/Login' exact render={() => <LoginAML />} />
          <Route path='/Profile' exact render={() => <Profile />} />

          </React.Fragment>
          </Router>
          
         

    </div>
  );
}

export default App;
