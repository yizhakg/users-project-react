import React from 'react'
import './Header.css'

export default function Header(props) {
  const {loginName}= props
  const firstLetter = loginName.slice(0,1).toUpperCase();
  const restOfTheName = loginName.slice(1
    )
  return (
    <header className="header">
      <h2> Hello <span>{firstLetter+restOfTheName}</span></h2>
    </header>
  )
}
