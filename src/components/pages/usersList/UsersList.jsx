import React, { useState, useEffect } from 'react'
import './UsersList.css'
import UserCard from '../../userCard/UserCard'
import getApiUsers from '../../../services/service.users'
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
    <div className="userListDiv">
    <h1>Users</h1>
    <div className="users">
     {usersData.map((user)=><UserCard user={user}/>)}
     </div>
    </div>
  )
}
