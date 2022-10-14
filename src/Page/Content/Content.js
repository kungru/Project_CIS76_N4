import Container_card from '../Body/Container_card';
import { Link, NavLink } from 'react-router-dom';
import React, {useEffect,useState} from 'react';
import {Spinner} from 'reactstrap';
import './Content.css';
const Content = () => {
   
        const [cards, setCards] = useState([]);
        const [IsLoading,setIsLoading]=useState(false);
        const [popupCard,setPopupCard]=useState(false);
    useEffect(
        () => {
        setIsLoading(true);

          fetch('https://634015dae44b83bc73c898c3.mockapi.io/api/v1/card')
            .then((res) => {
              return (res.json())
            }).then((data) => {
              console.log(data);
              setCards(data);
              console.log(cards);
              setIsLoading(false)
            });
            
        }, []
    
      )
 

  return (

   
    <div className='Content_container'>
       {
        IsLoading  ? 
        <div className='spinner_container'>
        <Spinner>
        Loading...
      </Spinner>    
        </div>
         : <>
       <div className='container_card'>
              {cards.map((item) => {
                return (
                  <Container_card
                    name={item.name}
                    style={item.style}
                    shape={item.shape}
                    url={item.url}
                    price={item.price}
                    
                    id={item.id}
                  />
                )
              })}
                
            </div>
            
            <div className='Content_pagination'>
                <NavLink to='01'>01</NavLink>
                <NavLink to='02'>02</NavLink>
                <NavLink to='03'>03</NavLink>
                <NavLink to='04'>04</NavLink>
                <NavLink to='05'>05</NavLink>
                <NavLink to='' style={{textDecoration:'none',fontSize:'bigger'}}><i class='bx bx-chevron-right'></i></NavLink>
            </div>
            </>
       } 
      
    </div>
  
  )
}

export default Content