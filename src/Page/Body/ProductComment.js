import React from 'react'
import './ProductComment.css'
import ViSitFb from './ViSitFb'

const ProductComment = () => {
  return (
    <>
        <div className='product_comment_all'>
            <h1>Product comments</h1>  
            <p>Placerat orci nulla pellentesque sed in donne</p>
            <div className='comment_product_1'>
                    <div className='comment_user_1'>
                        <div className='img_user_comment'>
                                <div className='img_comment_1'>
                                <img className='img_hungg' height='27rem' alt='images' src='./images/hungg.jpg' />
                                </div>
                                <div className='title_comment_product'>
                                        <p>JUL 30, STYLE / VISION</p>
                                        <h4>TRENDY MEN’S EYEGLASSES</h4>
                                        <span>Convallis convallis tellus id interdum velit laoreet id. Aenean pharetra magna ac placerat</span>
                                </div>
                               
                        </div>
                    </div>
                    <div className='comment_user_1'>
                        <div className='img_user_comment'>
                                 <div className='img_comment_1'>
                                     <img  alt='images' src='https://neoocular.qodeinteractive.com/wp-content/uploads/2021/07/h1-b-list-img-2.jpg' />
                                </div>
                        
                                <div className='title_comment_product'>
                                        <p>JUL 30, STYLE / VISION</p>
                                        <h4>TRENDY MEN’S EYEGLASSES</h4>
                                        <span>Convallis convallis tellus id interdum velit laoreet id. Aenean pharetra magna ac placerat</span>
                                </div>
                        </div>
                    </div>
                    <div className='comment_user_1'>
                         <div className='img_user_comment'>
                                <div className='img_comment_1'>
                                    <img alt='images' src='./images/tung.jpg' />
                                </div>
                                <div className='title_comment_product'>
                                        <p>JUL 30, STYLE / VISION</p>
                                        <h4>TRENDY MEN’S EYEGLASSES</h4>
                                        <span>Convallis convallis tellus id interdum velit laoreet id. Aenean pharetra magna ac placerat</span>
                                </div>
                        </div>
                    </div>
            </div>
    </div>
    <ViSitFb />
    </>
  )
}

export default ProductComment