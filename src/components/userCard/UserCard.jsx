import React from 'react'
import './UserCard.css'
import { useHistory } from 'react-router-dom';

export default function UserCard({ user }) {
  const history = useHistory();
  return (
    <div key={user._id} className="userCard" onClick={() => history.push(`/user/${user._id}`)}>
      <img src="./img/login/avatarBlue.svg" />
      <h2>{user.name.first}</h2>
      <h3>{user.name.last}</h3>
      <h3>{user.age}</h3>
      <p>{user.company}</p>
      <a href=""></a>
    </div>
  )
}
