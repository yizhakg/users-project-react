import React, { useState, useEffect } from 'react'
import './UsersList.css'
import UserCard from '../../userCard/UserCard'
import getApiUsers from '../../../services/service.users'
import { Link } from 'react-router-dom'
export default function UsersList(props) {
  const [usersData, setUsersData] = useState([])
  const fetchData = async () => {
    const result = await getApiUsers();
    setUsersData(result);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <React.Fragment>
      {props.loginName != 'Guest' ? <div className="userListDiv">
        <h1>Users</h1>
        <div className="users">
          {usersData.map((user) => <UserCard user={user} />)}
        </div>
      </div> : <div className="signInErr">
          <Link to='/'>Please Sign In</Link>
        </div>}
    </React.Fragment>
  )
}
