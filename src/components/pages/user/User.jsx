import React, { useEffect } from 'react'
import './User.css'
import UserPicture from '../../userPicture/UserPicture'
import DesignButton from '../../designButton/DesignButton'
import { useHistory } from 'react-router-dom';

export default function User({ USERS }) {
  const history = useHistory()

  useEffect(() => {
    document.querySelector('.btn').addEventListener('click', () => history.push('/usersList'))
  }, [])


  return (
    <div className="userDiv">
      <div className="title">
        <h1>ABOUT ME</h1>
        <DesignButton type="button" className="btn" text="Back" />
      </div>
      {USERS.map((item) => {
        if (item._id == window.location.pathname.slice(6))
          return (
            <div className="userInfo">
              <div className="info">
                <h3><u>Name</u>: {item.name.first} {item.name.last}</h3>
                <h3><u>Age</u>: {item.age}</h3>
                <h3><u>Company</u>: {item.company}</h3>
                <h3><u>Email</u>: {item.email}</h3>
                <h3><u>Phone</u>: {item.phone}</h3>
                <h3><u>Address</u>: {item.address}</h3>
                <h3><u>Favorite Fruit</u>: {item.favoriteFruit}</h3>
                <h3><u>About</u>: <p>{item.about}</p></h3>
                <h3 className="greeting">{item.greeting}</h3>
              </div>
              <UserPicture userImg={item._id} />
            </div>
          )
      }
      )}
    </div>
  )
}
