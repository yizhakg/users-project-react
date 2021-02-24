import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom';

export default function SideBar() {
  function toggleMenu() {
    let toggle = document.querySelector('.toggle');
    let hoverBar = document.querySelector('.hoverBar');
    let mainBar = document.querySelector('.mainBar');
    toggle.classList.toggle('active');
    hoverBar.classList.toggle('active');
    mainBar.classList.toggle('active');
  }
  window.addEventListener('resize', (e) => {
    if (window.innerWidth > 800) {
      let toggle = document.querySelector('.toggle');
      let hoverBar = document.querySelector('.hoverBar');
      let mainBar = document.querySelector('.mainBar');
      toggle.classList.remove('active');
      hoverBar.classList.remove('active');
      mainBar.classList.remove('active');
    }
  })
  return (
    <nav className="navBar">
      <div className="hoverBar">
        <ul className="logo">
          <li> <img src="./img/login/avatarBlue.svg" /></li>
        </ul>
        <ul className="menu">
          <li><Link to="/usersList">Users</Link></li>
          <li><Link to="/" onClick={() => {
            window.localStorage.clear();
            toggleMenu();
            }}>Logout</Link></li>
        </ul>
        <ul className="social">
          <li><a href="#"><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
          <li><a href="#"><i className="fab fa-facebook" aria-hidden="true"></i></a></li>
          <li><a href="#"><i className="fab fa-instagram" aria-hidden="true"></i></a></li>
          <li><a href="#"><i className="fab fa-linkedin" aria-hidden="true"></i></a></li>
          <li><a href="#"><i className="fab fa-github" aria-hidden="true"></i></a></li>
        </ul>
      </div>
      <div className="mainBar">
        <ul className="logo">
          <li><img src="./img/login/avatarBlue.svg" /></li>
        </ul>
        <div className="toggle" onClick={toggleMenu}>
          <div className="open"><i class="fas fa-bars"></i></div>
          <div className="close"><i class="fas fa-times"></i></div>
        </div>
        <ul className="social">
          <li><a href="#"><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
          <li><a href="#"><i className="fab fa-facebook" aria-hidden="true"></i></a></li>
          <li><a href="#"><i className="fab fa-instagram" aria-hidden="true"></i></a></li>
          <li><a href="#"><i className="fab fa-linkedin" aria-hidden="true"></i></a></li>
          <li><a href="#"><i className="fab fa-github" aria-hidden="true"></i></a></li>
        </ul>
      </div>
    </nav >
  )
}
