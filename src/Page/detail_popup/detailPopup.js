import React from 'react'
import './detailPopup.css';
import { useState } from 'react';
const DetailPopup = (p) => {
    const [x_popup,setXpopup]=useState(true);
    const PopUpX = ()=>{
        console.log(x_popup)
        setXpopup(!x_popup)
    }
  return (
    <>
    {x_popup ?  <div className='detail_popup' style={{width:'99%',position:'absolute',height:'100%',zIndex:'9'}}>
        <div className='detail_popup_grab' >
            <div className='detail_popup_x' onClick={PopUpX}><i class='bx bx-x' ></i></div>
            <div className='detail_img_popup'><img src='https://neoocular.qodeinteractive.com/wp-content/uploads/2021/07/Shop-Single-01-img-01-768x552.jpg' alt='r'/></div>
            <div className='detail_content_popup'>
                <h2 className='detail_name_popup'>glass name</h2>
                <p className='detail_price_popup'>$ 199</p>
                <p className='detail_text_popup'>Sed viverra tellus in hac. Sagittis vitae et leo duis ut diam quam. Aliquet eget sit amet tellus cras adipiscing enim eu turpis. Orci ac auctor augue mauris augue.

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
    </div> : ''}
    {/* <div className='detail_popup' style={{width:'99%',position:'absolute',height:'100%',zIndex:'9'}}>
        <div className='detail_popup_grab' >
            <div className='detail_popup_x'><i class='bx bx-x' ></i></div>
            <div className='detail_img_popup'><img src='https://neoocular.qodeinteractive.com/wp-content/uploads/2021/07/Shop-Single-01-img-01-768x552.jpg' alt='r'/></div>
            <div className='detail_content_popup'>
                <h2 className='detail_name_popup'>glass name</h2>
                <p className='detail_price_popup'>$ 199</p>
                <p className='detail_text_popup'>Sed viverra tellus in hac. Sagittis vitae et leo duis ut diam quam. Aliquet eget sit amet tellus cras adipiscing enim eu turpis. Orci ac auctor augue mauris augue.

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
    </div> */}
    </>
  )
}

export default DetailPopup