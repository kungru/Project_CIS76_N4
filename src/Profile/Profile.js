import React from 'react'
import { useEffect, useState, useContext } from 'react';
import { ThemeContext } from '../App';
import { useNavigate } from 'react-router-dom';
import './Profile.css'


const Profile = () => {
  const theme = useContext(ThemeContext)
  const navigate = useNavigate()

  const [avatar, setAvatar] = useState()
  const [blockAvatar, setBlockAvatar] = useState(false)
  const [removeBlockAvatar, setRemoveBlockAvatar] = useState(true)

  const [profile, setProfile] = useState([])
  useEffect(() => {
    return () => {
      avatar && URL.createObjectURL(avatar.preview)
    }
  }, [avatar])
  // setProfile(localStorage.getItem('username'))
  useEffect(() => {
   const json =   JSON.parse(localStorage.getItem('username'))
   setProfile(json)
  },[])
  const handelPreview = (e) => {
    const file = e.target.files[0]
    file.preview = URL.createObjectURL(file)
    setAvatar(file)

    setBlockAvatar(false)
    setRemoveBlockAvatar(false)

    
    
    
  }
  const handelAddAvatar = () => {
   
    setBlockAvatar(!blockAvatar)

  }
  const handelLogOut = () => {
    theme.setRenderCart(false)
    theme.setDisplay(false)
    navigate('/')
    localStorage.removeItem('username')


  }

  return (
    <div className='profile_all'>
      <h1>Profile</h1>
      <div className='avatar_user'>
        <div className='img_avatar'>
          {avatar && (
            <img src={avatar.preview} alt="" width='100%' />
          )}
        </div>
        {removeBlockAvatar ? <button className='btn_add_avatar' onClick={handelAddAvatar}>Add Avatars</button> : ''}


        {blockAvatar && <input onChange={handelPreview} type='file' placeholder='add avatar' />}

      </div>
         <span className='avatar_user_span'>welcome : {profile }</span>
      <div className='btn_logout1'>
        <button onClick={handelLogOut}>Logout</button>
      </div>
    </div>
  )
}

export default Profile