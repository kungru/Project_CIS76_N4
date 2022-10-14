import React from 'react'
import './detailPopup.css';
const DetailPopup = (p) => {
  return (
    <>
    <div className='detail_popup' style={{width:'99%',position:'absolute',height:'100%',zIndex:'9'}}>
        <div className='detail_popup_grab' >
            <div className='detail_img_popup'><img src='https://neoocular.qodeinteractive.com/wp-content/uploads/2021/07/Shop-Single-01-img-01-768x552.jpg' alt='r'/></div>
            <div className='detail_content_popup'>
                <h2>{p.name}</h2>
                <p className='detail_price_popup'>$ 199.00</p>
                <p className='detail_text_popup'>adglasgk;sl</p>
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