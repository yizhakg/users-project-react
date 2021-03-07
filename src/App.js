import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/static/header/Header";
import Sidebar from "./components/static/sidebar/Sidebar";
import Footer from "./components/static/footer/Footer";
import Login from "./components/pages/login/Login";
import User from "./components/pages/user/User";
import UsersList from "./components/pages/usersList/UsersList";
import getApiUsers from "./services/service.users";

function App() {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const loginStatus = JSON.parse(localStorage.getItem("loginStatus")) || false;
  const [isLogin, setIsLogin] = useState(loginStatus);
  const [loginName, setLoginName] = useState(
    isLogin && userData ? userData.userName : "Guest"
  );
  const setLoginStatus = (bool) => {
    setIsLogin(bool);
    let value = bool.toString();
    localStorage.setItem("loginStatus", value);
  };
  const [usersData, setUsersData] = useState([]);
  const fetchData = async () => {
    const result = await getApiUsers();
    setUsersData(result);
    console.log(result);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Router>
      <div className="App">
        <Header loginName={loginName} />
        <Sidebar
          loginName={loginName}
          isLogin={isLogin}
          setLoginStatus={setLoginStatus}
          setLoginName={setLoginName}
        />
        <Switch>
          <Route exact path="/">
            <Login
              setLoginName={setLoginName}
              setLoginStatus={setLoginStatus}
              isLogin={isLogin}
            />
          </Route>
          <Route exact path="/usersList">
            <UsersList USERS={usersData} isLogin={isLogin} />
          </Route>
          <Route path="/user">
            <User USERS={usersData} />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
