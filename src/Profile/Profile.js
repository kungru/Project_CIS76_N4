import React  from 'react'
import {useEffect,useState} from 'react';


const Profile = () => {

    const [nameUser, setNameUser] = useState()
    
    const [profile, setProfile] = useState([])
    useEffect(() => {
        fetch ('https://633e973783f50e9ba3b3be2f.mockapi.io/Login')
        .then((res)=>{
          return(res.json())
        }).then((data)=>{
            console.log(data)
            setProfile(data);
            // setLoading(true)
            
            
         
        })
    },[])
  return (
    <div>
        <h1>Profile</h1>
        welcome : {}
        <button>Logout</button>
    </div>
  )
}

export default Profile