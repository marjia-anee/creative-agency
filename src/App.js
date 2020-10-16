import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import ReviewForm from './components/Dashboard/Dashboard/ReviewForm/ReviewForm';
import ServiceList from './components/Dashboard/Dashboard/ServiceList/ServiceList';
import NewService from './components/Dashboard/Dashboard/NewService/NewService';
import Admin from './components/Admin/Admin';
import ShowServiceList from './components/Dashboard/ShowServiceList/ShowServiceList';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();


function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
      <Route path="/home">
            <Home></Home>
          </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute exact path="/dashboard/order">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute exact path='/dashboard/review'>
            <ReviewForm></ReviewForm>
          </PrivateRoute>
          <PrivateRoute exact path='/dashboard/serviceList'>
            <ServiceList></ServiceList>
          </PrivateRoute>
          <PrivateRoute exact path='/serviceAdd'>
            <NewService></NewService>
          </PrivateRoute>
          <PrivateRoute path='/service/item/:_id'>
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/allOrderList">
            <ShowServiceList></ShowServiceList>
          </PrivateRoute>
          <PrivateRoute path="/addAdmin">
            <Admin></Admin>
          </PrivateRoute>
          
      </Switch>
    </Router>

    </UserContext.Provider>
  );
}

export default App;
