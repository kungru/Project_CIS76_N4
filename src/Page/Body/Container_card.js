import './Container_card.css';
import {React, useEffect,useState} from 'react';
import {Card, CardBody,CardTitle,CardSubtitle, CardText,} from 'reactstrap';
const Container_card = (props) => {

  const [heartActive,setHeartActive]=useState(true);
  const changeHeart=()=>{
    setHeartActive(current => !current)
  }
  const showPopup=()=>{
    props.onPopup(props.id);
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
      {props.name}
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      {props.style} / {props.shape}
      
    </CardSubtitle>
    <CardText>
    <div className='card_invi'>
      {heartActive ? <i class='bx bx-heart' onClick={changeHeart}></i> : <i class='bx bxs-heart' onClick={changeHeart} ></i>}
      <i class='bx bx-shopping-bag' ></i>
      <i class="fa-regular fa-eye" onClick={showPopup}></i>
      </div>
      <span className='card_price'>${props.price}</span>
    </CardText>
  </CardBody>
</Card>
</div>

  )
}

export default Container_card