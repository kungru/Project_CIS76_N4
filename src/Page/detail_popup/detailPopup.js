import React from 'react'
import './detailPopup.css';
import { useState, useEffect } from 'react';
import Container_card from '../Body/Container_card';
const DetailPopup = (product) => {
  const [cards, setCards] = useState([])
  useEffect(
    () => {
      fetch('https://634015dae44b83bc73c898c3.mockapi.io/api/v1/card')
        .then((res) => {
          return (res.json())
        }).then((data) => {
          setCards(data);
        });

    }, []

  )

  const PopUpX = () => {
    product.hideDetail()

  }

  return (
    <>

      <div className='detail_popup' style={{ position: 'absolute', height: '100%', zIndex: '9' }}>
        <div className='detail_popup_grab'   >
          <div className='detail_popup_x' onClick={PopUpX}><i class='bx bx-x' ></i></div>
          <div className='detail_img_popup'><img src={product.url} alt='r' /></div>
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