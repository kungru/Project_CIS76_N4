import React from 'react'
import './detailPopup.css';
import { useState ,useEffect} from 'react';

const DetailPopup = (product) => {
    
    // var product = {}

    const PopUpX = ()=>{
        product.setIsShowDetail(false)
    }

const a={...product};
  return (
    <>
{}
 <div className='detail_popup' style={{position:'absolute',height:'100%',zIndex:'9'}}>
        <div className='detail_popup_grab'  key={product.id} >
            <div className='detail_popup_x' onClick={PopUpX}><i class='bx bx-x' ></i></div>
            <div className='detail_img_popup'><img src='https://neoocular.qodeinteractive.com/wp-content/uploads/2021/07/Shop-Single-01-img-01-768x552.jpg' alt='r'/></div>
            <div className='detail_content_popup'>
                <h2 className='detail_name_popup'>{product.name}</h2>
                <p className='detail_price_popup'>{product.price}</p>
                <p className='detail_text_popup'>{product.url}

</p>
                <div className='detail_quantity_popup'>
                    <div></div>
                    <span className='detail_add_popup'>
                    Add to cart    
                     </span>
                </div>
                <div className='detail_popup_view'>
                    View detail
                </div>
            </div>
        </div>
    </div> 
    </>
  )
}

export default DetailPopup