

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
import AddLocation from './components/AddLocation';
import AddDep from './components/AddDep';
import AddCourse from './components/AddCourse';
import AddFac from './components/AddFaculty';
import Add from './components/Add';
import Delete from './components/Delete';
import DeleteCourse from './components/DeleteCourse'
import DeleteDep from './components/DeleteDep';
import DeleteFac from './components/DeleteFaculty';
import DeleteLocation from './components/DeleteLocation';
import DeleteStaff from './components/DeleteStaff';
import Update from './components/Update';
import UpdateCourse from './components/UpdateCourse'
import UpdateDep from './components/UpdateDep';
import UpdateFac from './components/UpdateFaculty';
import UpdateLocation from './components/UpdateLocation';
import UpdateStaff from './components/UpdateStaff';
import UpdateSalary from './components/UpdateSalary';
import Other from './components/Other';

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
          <Route path='/AddLoc' exact render={() => <AddLocation />} />
          <Route path='/AddDep' exact render={() => <AddDep />} />
          <Route path='/AddCourse' exact render={() => <AddCourse />} />
          <Route path='/AddFac' exact render={() => <AddFac />} />
          <Route path='/Add' exact render={() => <Add />} />
          <Route path='/DeleteLoc' exact render={() => <DeleteLocation />} />
          <Route path='/DeleteDep' exact render={() => <DeleteDep />} />
          <Route path='/DeleteCourse' exact render={() => <DeleteCourse />} />
          <Route path='/DeleteFac' exact render={() => <DeleteFac />} />
          <Route path='/Delete' exact render={() => <Delete />} />
          <Route path='/DeleteStaff' exact render={() => <DeleteStaff />} />
          <Route path='/UpdateLoc' exact render={() => <UpdateLocation />} />
          <Route path='/UpdateDep' exact render={() => <UpdateDep />} />
          <Route path='/UpdateCourse' exact render={() => <UpdateCourse />} />
          <Route path='/UpdateFac' exact render={() => <UpdateFac />} />
          <Route path='/Update' exact render={() => <Update />} />
          <Route path='/UpdateStaff' exact render={() => <UpdateStaff />} />
          <Route path='/UpdateSalary' exact render={() => <UpdateSalary />} />
          <Route path='/Other' exact render={() => <Other />} />
          


          </React.Fragment>
          </Router>
          
          
         

    </div>
  );
}

export default App;
