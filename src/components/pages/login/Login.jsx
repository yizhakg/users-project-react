import React, { useEffect, useState, useRef } from 'react'
import DesignInput from '../../designInput/DesignInput'
import DesignButton from '../../designButton/DesignButton'
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import './Login.css'

export default function Login({setLoginName,setLoginStatus,isLogin}) {
  const [loginSwitch, setLoginSwitch] = useState(true);
  const [loginTry, setLoginTempt] = useState(false);
  const history = useHistory();

  const { register, handleSubmit, watch, errors, reset } = useForm();
  const userName = useRef({});
  userName.current = watch("userName");
  const password = useRef({});
  password.current = watch("password");

  const onSubmit = data => {
    if (loginSwitch) {
      const userData = JSON.parse(window.localStorage.getItem("userData"));
      if (userData) {
        if (userData.userName.toLowerCase() == userName.current.toLowerCase() && userData.password == password.current) {
          setLoginStatus(true);
          setLoginName(data.userName);
          history.push('/usersList')
        } else {
          setLoginTempt(true)
        }
      } else {
        setLoginTempt(true)
      }
    } else {
      window.localStorage.clear();
      window.localStorage.setItem("userData", JSON.stringify(data));
      console.log("Sign Up Successfully");
      loginSwitchClass(true);
      window.location.reload();
    }
  }
  const onReset = () => {
    reset();
    setLoginTempt(false);
  }
  const loginSwitchClass = (bool) => {
    setLoginSwitch(bool);
    const loginClass = document.querySelectorAll(".switch");
    if (bool) {
      loginClass[0].classList.add("active");
      loginClass[1].classList.remove("active");
    }
    else {
      loginClass[0].classList.remove("active");
      loginClass[1].classList.add("active");
      setLoginTempt(false)
    }
  }

  useEffect(() => {
    loginSwitchClass(true);
    document.querySelector('.btn.v2').addEventListener('click', () => onReset())
  }, [])

  return (
    <React.Fragment>
      <div className="loginPage">
        <img className="wave" src="/img/login/wave.png" />
        <div className="img">
          <img src="/img/login/phoneBlue1.svg" />
        </div>
        <div className="login-content">
          <form onSubmit={handleSubmit(onSubmit)}>
            <img src="/img/login/avatarBlue.svg" />
            <div className="loginSwitch">
              <div className="switch" onClick={() => { loginSwitchClass(true) }}>Login</div>
              <div className="switch" onClick={() => { loginSwitchClass(false) }}>Sign Up</div>
            </div>
            {errors.userName && <p className="error">{errors.userName.message}</p>}
            <DesignInput title="User Name" type="text" name="userName" icon="user" className={"input"} inputRef={register({ required: "User Name Require", })} />
            {errors.password && <p className="error">{errors.password.message}</p>}
            <DesignInput title="Password" name="password" type="password" icon="lock" className={"input"} inputRef={register({ required: "Password Required", minLength: { value: loginSwitch || 8, message: "Password Too Short" } })} />
            {loginSwitch || errors.passwordConfirm && <p className="error">{errors.passwordConfirm.message}</p>}
            {loginSwitch || <DesignInput name="passwordConfirm" title="Password Confirm" type="password" icon="unlock" className="input" inputRef={register({
              required: "Password Confirm Require",
              minLength: { value: 8, message: "Password Too Short" },
              validate: value => value == password.current || "The passwords do not match"
            })} />}
            {loginTry && <p className="faildTry">Login info are incorrect<br/> Please try again</p>}
            {loginSwitch && <span href="#">Forgot Password?</span>}
            <div className="formButtons">
              <DesignButton type="submit" className="btn" text={loginSwitch ? "Login" : "Sign Up"} />
              <DesignButton type="button" className="btn v2" text="Reset" />
            </div>
            {loginSwitch && <span href="#" style={{ textAlign: "center" }} onClick={() => { loginSwitchClass(false) }}>Create A New Account</span>}
          </form>
        </div>
      </div>
    </React.Fragment >
  )
}
