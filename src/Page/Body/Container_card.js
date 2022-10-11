import './Container_card.css';
import {React, useEffect,useState} from 'react';
import {Card, CardBody,CardTitle,CardSubtitle, CardText,} from 'reactstrap';
const Container_card = (props) => {
  // const [cards,setCards]=useState([])
  // useEffect(
  //   ()=>{
  //     fetch ('https://634015dae44b83bc73c898c3.mockapi.io/api/v1/card')
  //     .then((res)=>{
  //       return(res.json())
  //     }).then((data)=>{
  //       setCards(data);
  //       console.log(data);
  //     })
  //   },[]
    
  // )
  
  return (
    <div className='card_div'>
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
      ${props.price}
    </CardText>
  </CardBody>
</Card>
</div>

  )
}

export default Container_card