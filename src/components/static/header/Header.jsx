import React from 'react'
import './Header.css'

export default function Header({loginName}) {
  const firstLetter = loginName.slice(0,1).toUpperCase();
  const restOfTheName = loginName.slice(1)
  return (
    <header className="header">
      <h2 className='headerTitle'> Hello <span>{firstLetter+restOfTheName}</span></h2>
      <div className="logoImgs">
          <img src="./logo/codeIN.webp" alt=""/>
          <img src="./logo/lod.png" alt=""/>
          <img src="./logo/tech.png" alt=""/>
        </div>
    </header>
  )
}
