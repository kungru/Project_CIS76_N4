import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ThemeContext } from '../../App';
import './Header.css';
const Header = () => {
    const theme = useContext(ThemeContext)
    const nav = useNavigate()
    const [block, setBlock] = useState(true)
    const handelView = () => {
        setBlock(false)
    }
    const handelHome = () => {
        setBlock(true)
    }
    const handelLoginCrud = () => {
        nav('/admin')
    }
    // setBlock(true)
    return (
        <>
            {block && <div className='Header'>
                <div className='Header_container'>
                    <div className='Header_logo'>
                        <img alt='logo' src='./images/logo-img-04.png' className='Header_logoimg' />
                    </div>
                    <ul className='sidebar_route'>

                        <li>home</li>
                        <li onClick={handelLoginCrud} >CRUD</li>
                        <li><Link to=''>Shop</Link></li>
                        <li>blog</li>
                        <li>landing</li>
                    </ul>
                    <div className='sidebar_cart'>
                        <i class='bx bxs-cart-alt'></i>
                        <span>cart</span>
                    </div>
                    <div className='sidebar_search'>
                        <i class='bx bx-search-alt-2' ></i>
                        <span>search</span>
                    </div>
                    <div className='sidebar_follow_link'>
                        <span className='sidebar_followus'>Follow us</span>
                        <div className='sidebar_logolink'>
                            <i class='bx bxl-facebook' ></i>
                            <i class='bx bxl-instagram' ></i>
                            <i class='bx bxl-twitter' ></i>
                            <i class='bx bxl-pinterest-alt' ></i>
                        </div>
                    </div>
                </div>
            </div>}

        </>

    )
}

export default Header