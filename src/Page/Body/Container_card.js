import './Container_card.css';
import { React, useEffect, useState } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, } from 'reactstrap';
import DetailPopup from '../detail_popup/detailPopup';
import { useContext } from 'react';
import ContextLanguage from '../Context/ContextLanguage';
import { Link } from 'react-router-dom';
const Container_card = (props) => {
  const lan=useContext(ContextLanguage);
  const [heartActive, setHeartActive] = useState(true);
  const [invi, setinvi] = useState(true)
  // const [detail,setIsShowDetail]=useState(false)
  const changeHeart = () => {
    setHeartActive(current => !current)
    setinvi(!invi)
  }
  const showPopup = () => {
    // props.onPopup(props.id);
    props.onDisplay(props.id, props.name, props.style, props.shape, props.price, props.url, props.quantity);
    props.setIsShowDetail();

  }
  const handelAddtoCard = () => {
    props.onAddtoCard(props.id, props.name, props.style, props.shape, props.price, props.url, props.quantity);
  }

  return (

    <div className='card_div' id={props.id}>

      <Card>
        <img
          alt="Sample"
          src={props.url}
        />
        <CardBody>
          <CardTitle tag="h5">
        <Link to={`/shop/${props.id}`}>    {props.name} </Link>
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
          >
            {props.style} / {props.shape}

          </CardSubtitle>
          {invi ?
            <CardText className='textcard_invi'>
              <div className='card_invi'>
                {heartActive ? <i class='bx bx-heart' onClick={changeHeart}></i> : <i class='bx bxs-heart' onClick={changeHeart} ></i>}
                <i onClick={handelAddtoCard} class='bx bx-shopping-bag' ></i>
                <i class="fa-regular fa-eye" onClick={showPopup}></i>
              </div>
              <span className='card_price'>${props.price}</span>
              {/* <span>{props.quantity}</span> */}
            </CardText> : <CardText className='textcard_notinvi'><div className='card_notinvi'>
              {heartActive ? <i class='bx bx-heart' onClick={changeHeart}></i> : <i class='bx bxs-heart' onClick={changeHeart} ></i>}
              <i onClick={handelAddtoCard} class='bx bx-shopping-bag' ></i>
              <i class="fa-regular fa-eye" onClick={showPopup}></i>
            </div>
              <span className='card_price'>${props.price}</span>


              <span>{props.quantity}</span></CardText>
          }
        </CardBody>
      </Card>

    </div>

  )
}

export default Container_card