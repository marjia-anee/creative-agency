import React, { createContext, useEffect, useState } from 'react';
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

export const UserContext = createContext();


function App() {

  const [loggedInUser, setLoggedInUser] = useState({});
  const [info, setInfo] = useState({});

  useEffect(()=>{

  const sessionData=sessionStorage.getItem('token')
  const token=JSON.parse(sessionData)
  token && fetch('http://localhost:3001',{
    method:'GET',
    headers:{ 
      'Content-Type':'application/json',
      token:token
    }
  })
  .then(res=>res.json())
  .then(result=>{
    setInfo({...info,user:{name:result.name, email:result.email, img:result.picture}})
  })
  },[])


  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser, info, setInfo]}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/dashboard/order">
            <Dashboard></Dashboard>
          </Route>
          <Route exact path='/dashboard/review'>
            <ReviewForm></ReviewForm>
          </Route>
          <Route exact path='/dashboard/serviceList'>
            <ServiceList></ServiceList>
          </Route>
      </Switch>
    </Router>

    </UserContext.Provider>
  );
}

export default App;
