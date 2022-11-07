import React from 'react'
import { useState, useRef, useEffect, useContext } from 'react';
import { ThemeContext } from '../App'
import { useNavigate } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import './Admin.css'


const Admin = () => {
    const theme = useContext(ThemeContext)
    const nav = useNavigate()
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [empty, setEmpty] = useState('')
    const [validation1, setValidation1] = useState('')
    const [loading, setLoadding] = useState(true)

    const handelLoginAdmin = () => {



        let empty = {}

        if (!email) {
            empty.email = "Please input your Email"
        }
        if (!pass) {
            empty.pass = "Please input your Password"
        }
        else {
            setLoadding(false)

            if (email !== 'Hungtung@gmail.com' || pass !== 'hungtungdepzai') {
                setTimeout(() => {
                    setLoadding(true)
                    setValidation1('Email or Password is not valid')
                }, 2000);


            } else {
                setTimeout(() => {
                    setLoadding(true)
                    theme.setAdMinlogin(true)
                    nav('/crud')

                }, 2000);


            }
        }
        setEmpty(empty)


    }
    const handelRemoveLoginAdmin = () => {

        nav('/shop')
    }
    return (
        <div>
            <div className='all-dark-login-admin' >
                <div className='form-login'  >
                    <div className='title-login-register'>

                        <div

                            className='title-login-admin '>Admin login


                        </div>
                        <div className='all-login'>
                            <form>

                                <div className='margin-login'>


                                    <input
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                        placeholder='Email *'
                                        type='email'



                                    />
                                    <p className='error'>{empty.email}</p>
                                </div>
                                <div className='margin-login'>


                                    <input
                                        onChange={(e) => setPass(e.target.value)}
                                        value={pass}
                                        placeholder='Password *'
                                        type='password'



                                    />
                                    <p className='error'>{empty.pass}</p>
                                </div>

                                {loading ? <button onClick={handelLoginAdmin} type='button' >Login </button> :
                                    <span className='loading'><Spinner>Loading...</Spinner></span>
                                }

                                <p className='error1'>{validation1}</p>
                            </form>
                        </div>



                        <span onClick={handelRemoveLoginAdmin} className='remove-block-login-admin' to='/shop'>X</span>
                    </div>
                    <div className='dark-login-body'>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Admin