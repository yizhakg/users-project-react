import React from 'react'
import './UserCard.css'
export default function UserCard({user}) {

  return (
    <div className="userCard">
       <img src="./img/login/avatarBlue.svg" />
      <h2>{user.name.first}</h2>
      <h3>{user.name.last}</h3>
      <h3>{user.age}</h3>
      <p>{user.company}</p>
      <a href=""></a>
    </div>
  )
}
