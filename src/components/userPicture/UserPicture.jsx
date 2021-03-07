import React from 'react'
import './UserPicture.css'
export default function UserPicture({userImg}) {
  return (
    <div className="userPictureDiv">
         <img src={`/img/users/${userImg}.jpg`} />
    </div>
  )
}
