import React from 'react'
import './detailPopup.css';
import { useState, useEffect } from 'react';
import Container_card from '../Body/Container_card';
import { useContext } from 'react';
import { ThemeContext } from '../../App';
import { memo } from 'react'
const DetailPopup = (product, { count }) => {

  const theme = useContext(ThemeContext)
  console.log(theme)
  
  const [cards, setCards] = useState([])
  const [detailCards, setDetailCards] = useState([])
  const [isData1, setIsData1] = useState(true)
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
  const handelAddtoCart1 = () => {
    product.onDetailAtc(product.id, product.url, product.name, product.price, product.quantity)

   
    

  }
  const handelSumUp = () => {
    product.onSumUp(product.id, product.url, product.name, product.price, product.quantity)
    theme.setCount(prev => prev + 1)

  }
  const handelSumDown = () => {
    product.onSumDown(product.id, product.url, product.name, product.price, product.quantity)
    if(theme.count > 1){

      theme.setCount(prev => prev  - 1)
    }
  }
  
  return (
    <>
      {/* {cards.filter((e) => e.id == product.id)} */}
      <div key={product.id} className='detail_popup' style={{ position: 'absolute', height: '100%', zIndex: '9' }}>
        <div className='detail_popup_grab'   >
          <div className='detail_popup_x' onClick={PopUpX}><i class='bx bx-x' ></i></div>
          <div className='detail_img_popup'><img src={product.url} alt='r' /></div>
          <div className='detail_content_popup'>
            <h2 className='detail_name_popup'>{product.name}</h2>
            <p className='detail_price_popup'>${product.price}</p>
    
            <p className='detail_text_popup'>Sed viverra tellus in hac. Sagittis vitae et leo duis ut diam quam. Aliquet eget sit amet tellus cras adipiscing enim eu turpis.

            </p>
           
            <div className='detail_quantity_popup'>
              <div className='quantity1'>
                <div onClick={handelSumDown} className='sum'>-</div>
                 <input  className='sum1' type='text' size='4' value={theme.count}/>
                <div onClick={handelSumUp} className='sum'>+</div>
              </div>
              <button className='detail_add_popup' onClick={handelAddtoCart1}>
                Add to cart
              </button>
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