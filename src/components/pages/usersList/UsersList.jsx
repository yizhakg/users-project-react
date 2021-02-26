import React from 'react'
import './UsersList.css'
import UserCard from '../../userCard/UserCard'
import { Link } from 'react-router-dom'

export default function UsersList({loginName,USERS}) {

  return (
    <React.Fragment>
      {loginName != 'Guest' ?
        <div className="userListDiv">
          <div className="title"><h1>Users</h1></div>
          <div className="users">
            {USERS.map((user) => <UserCard user={user} />)}
          </div>
        </div>
        :
        <div className="signInErr">
          <Link to='/'>Please Sign In</Link>
        </div>}
    </React.Fragment>
  )
}
