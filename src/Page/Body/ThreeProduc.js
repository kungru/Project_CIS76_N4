import './ThreeProduc.css';
import {React, useEffect,useState} from 'react';
import { Link } from 'react-router-dom'
import {Card, CardBody,CardTitle,CardSubtitle, CardText,} from 'reactstrap';
const ThreeProduc = (props) => {

  const [heartActive,setHeartActive]=useState(true);
  const changeHeart=()=>{
    setHeartActive(current => !current)
  }
  const showPopup=()=>{
    props.onPopup(props.id);
  }

  const handelViewMore = () => {}
  return (
   <div className='all__three_product'>
             <div className='text__title'>
                <h1>BROWSE OUR PRODUCTS</h1>
                <p>Explore our new summer collection</p>
            </div>
    <div style={{display:'flex',justifyContent:'space-between'}} className='card_div1' id={props.id}>
       
        <div className='cart1'>
        <div className='three__sale'>
            <span>sale</span>
        </div>
            <img
                alt="Sample"
                src='https://neoocular.qodeinteractive.com/wp-content/uploads/2021/07/PRODUCT-01-c-1.jpg'
            />
            <div className='card-body1'>
                <CardTitle tag="h5">
                gold glasses
                </CardTitle>
                <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
                >
                Classic style / Round
                </CardSubtitle>
                <CardText>
                <div className='card_invi'>
                {heartActive ? <i class='bx bx-heart' onClick={changeHeart}></i> : <i class='bx bxs-heart' onClick={changeHeart} ></i>}
                <i class='bx bx-shopping-bag' ></i>
                <i class="fa-regular fa-eye" onClick={showPopup}></i>
                </div>
                
                <span className='card_price'><span className='card_price1'>$299.00</span>$199.00</span>
                </CardText>
            </div>
        </div>
        <div className='cart1'>
        <div className='three__sale'>
            <span>sale</span>
        </div>
            <img
                alt="Sample"
                src='https://neoocular.qodeinteractive.com/wp-content/uploads/2021/07/PRODUCT-02-a.jpg'
            />
            <div className='card-body1'>
                <CardTitle tag="h5">
                gold glasses
                </CardTitle>
                <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
                >
                Classic style / Round
                </CardSubtitle>
                <CardText>
                <div className='card_invi'>
                {heartActive ? <i class='bx bx-heart' onClick={changeHeart}></i> : <i class='bx bxs-heart' onClick={changeHeart} ></i>}
                <i class='bx bx-shopping-bag' ></i>
                <i class="fa-regular fa-eye" onClick={showPopup}></i>
                </div>
                <span className='card_price'><span className='card_price1'>$299.00</span>$199.00</span>
                </CardText>
            </div>
        </div>
        <div className='cart1'>
        <div className='three__sale'>
            <span>sale</span>
        </div>
            <img
                alt="Sample"
                src='https://neoocular.qodeinteractive.com/wp-content/uploads/2021/08/PRODUCT-06.jpg'
            />
            <div  className='card-body1'>
                <CardTitle tag="h5">
                gold glasses
                </CardTitle>
                <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
                >
                Classic style / Round
                </CardSubtitle>
                <CardText>
                <div className='card_invi'>
                {heartActive ? <i class='bx bx-heart' onClick={changeHeart}></i> : <i class='bx bxs-heart' onClick={changeHeart} ></i>}
                <i class='bx bx-shopping-bag' ></i>
                <i class="fa-regular fa-eye" onClick={showPopup}></i>
                </div>
                <span className='card_price'><span className='card_price1'>$299.00</span>$199.00</span>
                </CardText>
            </div>
        </div>
        <Link  to='/content' className='three__viewmore'>VIEW MORE</Link>
    </div>
                   
   </div> 

  )
}

export default ThreeProduc