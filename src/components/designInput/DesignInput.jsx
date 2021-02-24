import React, { useEffect } from 'react'
import "./DesignInput.css"

export default function DesignInput(props) {
  function addClass() {
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
  }
  function removeClass() {
    let parent = this.parentNode.parentNode;
    if (this.value == "") {
      parent.classList.remove("focus");
    }
  }
  useEffect(() => {
    const inputs = document.querySelectorAll(".input");
    inputs.forEach(input => {
      input.addEventListener("focus", addClass);
      input.addEventListener("blur", removeClass);
    });
  }, [])
  return (
    <div className="input-div">
      <div className="inputIcon">
        <i className={`fas fa-${props.icon}`}></i>
      </div>
      <div>
        <h5>{props.title}</h5>
        <input type={props.type} name={props.name} className={props.className} ref={props.inputRef} />
      </div>
    </div>
  )
}
// Username