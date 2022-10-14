import React from 'react'
import './ContentHung.css'
const ContentHung = () => {
  return (
    <div className='content'>
        <div className='content-img'>
                <img src='https://neoocular.qodeinteractive.com/wp-content/uploads/2021/10/Main-Home-stacked-img-big-001.jpg' />
        </div>
        <div className='content-img1'>
                <img src='https://neoocular.qodeinteractive.com/wp-content/uploads/2021/10/Main-home-stacked-img-0001-1.png' />
        </div>
        <div className='content-title'>
                <div className='firt-title-content'>
                        <h2>BLUE LIGHT OPTICAL LENS</h2>
                        <p>Lorem ipsum dolore amet, vivid vel risus sit</p>
                </div>
                <div className='ct-title-content'>
                        <h4>CRAS SODALES ODIO NON LIBERO TINCIDUNT AMET</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur sit do</p>
                </div>
                <div className='last-title-content ct-title-content'>
                        <h4>AMET LOREM IPSUM SODALES ODIO VIVID SIT MOR</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur del sintt</p>
                </div>

                <button className='btn-view'>VIEW MORE</button>
        </div>
    </div>
  )
}

export default ContentHung