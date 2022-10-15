import React from 'react';
import { useState, useRef,useEffect } from 'react';
import { Routes, Route, Link, NavLink } from 'react-router-dom';

import isEmpty from 'validator/lib/isEmpty'

import { Spinner } from 'reactstrap';
import './index.css'


import {
 
    Nav,
    NavItem,
    
   
  } from 'reactstrap';


const Header = (  ) => {

    
    const inputRef = useRef()
    const divRef = useRef()


    // Ân hiện input search
    const [blockSearch, setBlockSearch] = useState(0)
    const [removeblock, setRemoveblock] = useState(false)


    const [avatarUser, setAvatarUser] = useState(true)
    const [apiUser, setApiUser] = useState([])
   
    useEffect(()=>{
        fetch('https://633e973783f50e9ba3b3be2f.mockapi.io/User')
        .then((response) => {
            return response.json()
        }).then((data) => {
            
            setApiUser(data)
            
        })
    }, [])



    const handleBlock = (e) => {
     inputRef.current.focus()
        setRemoveblock(true)
        setBlockSearch(250);
  
      
       
      
     
        

    } 
    const handelRemoveblock = () => {
        setRemoveblock(false);
        setBlockSearch(0);
    }


    // Ân hiện Form Login

    const [blockLogin, setBlockLogin] = useState(0)

    const handelBlockLogin = () => {
        setBlockLogin(1)
        divRef.current.style.visibility = 'visible';
        // document.body.style.background = 'rgb(0 0 0 / 63%)'
        // document.body.style.transition = ' all 1s'
        // document.body.style.visibility = 'visible'
       
        
    }
    const handelRemoveLogin = () => {
        setBlockLogin(0)
        divRef.current.style.visibility = 'hidden';
        
    }
    


    //set Backgroundcolor cho login-register

   
   
    const [nameUser, setNameUser] = useState(null)
    let fakeEmail = null
    let fakePass = null
    const handelLogin = (email, pass) => {
        fakeEmail = email
        fakePass = pass
        waitLogin()
    }
    
    
    
    
    function waitLogin() {
        for(let i=0; i< apiUser.length; i++){
            
            
            if(fakeEmail === apiUser[i].Email && fakePass === apiUser[i].Password){
                setTimeout(() => {
                    setNameUser(apiUser[i].Name)
                    setAvatarUser(false)
                    setBlockLogin(0)
                    divRef.current.style.visibility = 'hidden';
                }, 3000);
            }
        };
        
        }
   

    
   const avartRef = useRef()
   const avartRef1 = useRef()
    
    
  
   
   const handelLogout = () => {
    setAvatarUser(true)
    
      


   }
    
  return (
    
    <div className='header'  >
        <div className='address'>
            <div>
                <ul className='list-icon'>
                    <li className='icon'>
                        <i class="fa-brands fa-facebook-f"></i>
                    </li>
                    <li className='icon'>
                        <i class="fa-brands fa-twitter"></i>    
                    </li>
                    <li className='icon'>
                    <i class="fa-brands fa-instagram"></i>
                    </li>
                    <li className='icon'>
                    <i class="fa-brands fa-pinterest-p"></i>
                    </li>
                    <li>
                    <span style={{marginRight: '7px', color:'#ffffffdc'}}><i className="fa-regular fa-envelope"></i></span>
                        <span ><Link style={{ color:'#ffffffdc'}} href='#'>neoocular@example.com</Link></span>
                    </li>
                </ul>
                   
            </div>
            <div className='onl-phone icon'>
                <div style={{marginRight: '27px'}}>
                    <span style={{marginRight: '7px'}}><i className="fa-solid fa-phone"></i></span>
                    <span style={{color:'#ffffffdc'}} >Call us: 035-980-7606</span>
                </div>
                <div>
                    <span style={{marginRight: '7px'}}><i className="fa-regular fa-clock"></i></span>
                    <span style={{color:'#ffffffdc'}} >Mon-Sat: 9AM-9PM</span>
                </div>
            </div>
           
   
            

        </div>
        <div className='header_first'>

            <div className='title_header'>
                <img width='119' height='50' src = "./images/logo-img-04.png" alt='Day la hinh anh' />
            </div>
                <Nav className='header-content ' >
                    <NavItem>
                        <Link className='text-color'
                        
                        to="/crud"
                        >
                        Home
                        </Link>
                    </NavItem>
                    <NavItem>
                        <a href="#">
                        Page   
                        </a>
                    </NavItem>
                    <NavItem>
                        <Link to="/">
                        Shop
                        </Link>
                    </NavItem>
                    <NavItem>
                        <a
                     
                        href="#"
                        >
                        Blog
                        </a>
                    </NavItem>
                    <NavItem>
                        <a
                       
                        href="#"
                        >
                        Landing
                        </a>
                    </NavItem>
                </Nav>
                <Nav className='header-right'>
                    <NavItem>
                        <div className='header-input-search'>
                        {removeblock && <span className='remove-block animate__animated animate__fadeIn' onClick={handelRemoveblock} >X</span>}
                        <span><input 
                        ref={inputRef}
                        className='header-input' 
                        placeholder='Search'
                        style={{width: `${blockSearch}px`}}

                        /></span>
                        <a
                        onClick={handleBlock}
                        className='header-search'
                       
                        href="#"
                        >
                        <i className="fa-solid fa-magnifying-glass"></i>
                        </a>
                        </div>
                    </NavItem>
                    <NavItem>
                        <a href='#' ><i className='bx bx-heart'></i> </a>
                    </NavItem>
                    <NavItem>
                       {avatarUser ? (<div ref={avartRef1}>
                        
                        <span  onClick={handelBlockLogin} href="#">
                             <i className="fa-regular fa-user"></i>
                        </span>
                       </div>) : 
                       (<div ref={avartRef} >
                       <div  className='avatar'><img src='https://dvdn247.net/wp-content/uploads/2020/07/avatar-mac-dinh-1.png'></img></div>
                       <span style={{fontSize:'14px'}}>{nameUser}</span> 
                        
                        
                       <button type='button' onClick={handelLogout} className='logout'>Log out</button></div>)}

                       
                       
                       
                       
                       
                    </NavItem>
                    <NavItem>
                        <a
                      
                        href="#"
                        >
                        <i className="bx bx-shopping-bag"></i>
                        </a>
                    </NavItem>
                </Nav>
               

            
        </div>
        <div ref={divRef}  className='all-dark-login' style={{ opacity: `${blockLogin}` }}>
            <div  className='form-login'  >
                <div className='title-login-register'>
                        <NavLink
                            activeClassName ='active'
                            className='title-login link-login ' 
                                            
                            
                             
                            to = '/login' >Login
                    
                            </NavLink>
                        <NavLink
                        className='title-register link-login'
                        activeClassName ='active'
                      
                             
                             
                    
                             to = '/register' >Register</NavLink>

                </div>
                    <Routes>
                        <Route path='/login'  element={ <Login onLogin= {handelLogin} /> } />
                        <Route path='/register' element={ <Register /> } />
                    </Routes>
                    
                    <div onClick={handelRemoveLogin} className='remove-block-login'>X</div>      
            </div>
                <div className='dark-login-body'>
                    
                </div>

        </div>
    </div>
  )
}




const Login = (props) => {


    const [loginApi, setLoginApi] = useState([])
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    props.onLogin(email, pass,)

    const[loading, setLoading] = useState(true)



    useEffect(()=>{
        fetch('https://633e973783f50e9ba3b3be2f.mockapi.io/User')
        .then((response) => {
            return response.json()
        }).then((data) => {
            setLoginApi(data)

            
            
        })
    }, [])


    const [validation, setValidation] = useState('')
    const [validation1, setValidation1] = useState('')

    const validationAll = () => {
        const msg = {}
       
        if(isEmpty(email)){
            msg.email = 'Please input your Email'
        }
        if(isEmpty(pass)){
            msg.pass = 'Please input your Password'
        }

       
      

        setValidation(msg)
        if(Object.keys(msg).length > 0) return false
        return true
    }
    
       
 
    const handelLogin =() => {
     
        const valid = validationAll()
        if(!valid) return
        let checkEmail = false;
        let checkPass = false;

        for(let i=0; i< loginApi.length; i++){
            
            if(email === loginApi[i].Email ){
                checkEmail = true
                if(pass === loginApi[i].Password){
                    checkPass = true
                    setLoading(false)
                    

                    setTimeout(() => {
                        setValidation1('')
                        setLoading(true)
                    }, 5000);
                }
            }
        };
        if(checkEmail == false && checkPass == false) {
            setLoading(false)
                
            setTimeout(() => {
                setValidation1('Email or Password is not valid')
                setLoading(true)
            }, 3000);

        }
        
    };
   
    

    return (
      <div className='all-login'>
          <form>
         
            <div className='margin-login'>
  
             
              <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
                placeholder='Email *'
               type='email'
               
              
  
               />
                <p className='error'>{validation.email}</p>
            </div>
            <div className='margin-login'>
  
             
              <input
              onChange={(e) => setPass(e.target.value)}
              value={pass}
                placeholder='Password *'
               type='password'
              
              
  
               />
                <p className='error'>{validation.pass}</p>
            </div>   
  
           {loading ? <button  onClick={handelLogin}  type='button' >Login </button> : 
            <span className='loading'><Spinner>Loading...</Spinner></span>
            }   
              <div className='login-check'>
                <input style={{marginRight: '4px'}} type='checkbox' />
                <label className='remember'>Remember me</label>
              </div>
              <p className='error1'>{validation1}</p>
           </form>   
      </div>
    )
  }


  const Register = () => {

    const [registerApi, setRegisterApi] = useState(null)
    
    useEffect(()=>{
        fetch('https://633e973783f50e9ba3b3be2f.mockapi.io/User')
        .then((response) => {
            return response.json()
        }).then((data) => {
            setRegisterApi(data)
            
        })
    }, [])
    
    const [email, setEmail] = useState('')
    const [firtname, setFirtName] = useState('')
    const [lastname, setLastName] = useState('')
    const [pass, setPass] = useState('')
    const [repeatPass, setRepeatPass] = useState('')

    const [validation, setValidation] = useState('')
    const [validation1, setValidation1] = useState('')

    const [loading, setLoading] = useState(true)

    const [registerUp, setRegisterUp] = useState('')

    const validationAll = () => {
       
        const msg = {}
        if( isEmpty(firtname)){
            msg.firtname = 'Please input your Firt Name'
        }
        if( isEmpty(lastname)){
            msg.lastname = 'Please input your Last Name'
        }
        if(isEmpty(email)){
            msg.email = 'Please input your Email'
        }
       
       
        if(isEmpty(pass)){
            msg.pass = 'Please input your Password'
        }
        if(isEmpty(repeatPass)){
            msg.repeatPass = 'Please input your Repeat Password'
        }

        setValidation(msg)
        if(Object.keys(msg).length > 0) return false
        return true
    }
    
    const handelRegister =() => {
       
        
        const msg1 = {}
        const inclu = email.includes('@gmail.com')
        if(!isNaN(firtname)){
            msg1.firtname = "Wrong name format"
        }
        else if(!isNaN(lastname)){
            msg1.lastname = "Wrong name format"
        }
        else if(lastname > 5){
            msg1.lastname = "The name is too long"
        }
       else if(!inclu){
            msg1.email = "Email invalid"
           
        }
        else if(pass !== repeatPass){
            msg1.pass = "Password doesn't match"
            msg1.repeatPass = "Password doesn't match"
        }
            
       else if(pass.length < 5){
            msg1.pass = "Minimum length 5 characters"

        }else {
            
            setLoading(false)
            if(email !== registerApi.Email ){
                const newUser = {
                    Name : lastname,
                    Email: email,
                    Password: pass,
                }
                fetch('https://633e973783f50e9ba3b3be2f.mockapi.io/User' , {
                    
                    method: 'POST',
                    headers: {
                        Acceps: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                }) 
                
                
                
                .then((response) => {
                    return response.json()
                }).then((data) => {
                    setRegisterApi(data)
                    
                })

                setTimeout(() => {
                       
                            setLoading(true)
                            setRegisterUp('Sign Up Success')

                            setLastName('')
                            setFirtName('')
                            setEmail('')
                            setPass('')
                            setRepeatPass('')
           
                }, 3000);
        }
    }

    setValidation1(msg1)
    const valid = validationAll()
    if(!valid) return

}
    return (
      <div>
          <div className='all-register'>
          <form>
            <div className='margin-login'>

            <div className='input-name'>
            <input

                onChange={(e) => setFirtName(e.target.value)}
                value={firtname}
                placeholder='Firt Name *'
                type='text'
               />
               <input
                onChange={(e) => setLastName(e.target.value)}
                value={lastname}
                placeholder='Last Name *'
                type='text'
               />
            </div>
               <p className='error firtname'>{validation.firtname || validation1.firtname}</p>
               <p className='error lastname'>{validation.lastname || validation1.lastname}</p>
                 
            </div>
            <div className='margin-login'> 
              <input
                className='inputs'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder='Email *'
                type='email'
               />
          <p className='error'>{validation.email || validation1.email}</p>
            </div>
            <div className='margin-login'>
                <input
                    className='inputs'
                    onChange={(e) => setPass(e.target.value)}
                    value={pass}
                    placeholder='Password *'
                    type='password'

                    />
                    <p className='error'>{validation.pass || validation1.pass}</p>
            </div>
            <div className='margin-login'>
                <input
                    className='inputs'
                    onChange={(e) => setRepeatPass(e.target.value)}
                    value={repeatPass}
                    placeholder='Repeat Password *'
                    type='password'

                    />
                    <p className='error'>{validation.repeatPass || validation1.repeatPass}</p>
            </div>
               
            <p className='success'>{registerUp}</p>
            {loading ?  <button onClick={handelRegister}  type='button' >Register</button> : <span className='loading1'><Spinner>Loading...</Spinner></span>} 
             
           </form>   
      </div>
      </div>
    )
  }

  export {Login, Register}
export default Header;