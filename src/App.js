import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/static/header/Header";
import Sidebar from "./components/static/sidebar/Sidebar";
import Footer from "./components/static/footer/Footer";
import Login from "./components/pages/login/Login";
import User from "./components/pages/user/User";
import UsersList from "./components/pages/usersList/UsersList";

function App() {
  const userData = JSON.parse(localStorage.getItem("userData"))
  const [loginName, setLoginName] = useState(userData?userData.userName:"Guest");

  return (
    <Router>
      <div className="App">
        <Header loginName={loginName} setLoginName={setLoginName}/>
        <Sidebar loginName={loginName} setLoginName={setLoginName}/>
        <Switch>
          <Route exact path="/">
            <Login setLoginName={setLoginName}/>
          </Route>
          <Route exact path="/usersList">
            <UsersList loginName={loginName}/>
          </Route>
          <Route exact path="/user">
            <User />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
