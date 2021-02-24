import React from 'react'
import "./DesignButton.css"

export default function DesignButton(props) {
  return (
    <button type={props.type} className={props.className}>{props.text}</button>
  )
}
