import Container_card from '../Body/Container_card';
import React, {useEffect,useState} from 'react';
import {Spinner} from 'reactstrap';
import './Content.css';
const Content = () => {
   
        const [cards, setCards] = useState([]);
        const [IsLoading,setIsLoading]=useState(false);
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
            })
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
                  />
                )
              })}
                
            </div>
            <div className='Content_pagination'>
                <a href=''>01</a>
                <a href=''>02</a>
                <a href=''>03</a>
                <a href=''>04</a>
                <a href=''>05</a>
                <a href='' style={{textDecoration:'none',fontSize:'bigger'}}><i class='bx bx-chevron-right'></i></a>
            </div>
            </>
       } 
       {/* <>
       <div className='container_card'>
              {cards.map((item) => {
                return (
                  <Container_card
                    name={item.name}
                    style={item.style}
                    shape={item.shape}
                    url={item.url}
                    price={item.price}
                  />
                )
              })}
                
            </div>
            <div className='Content_pagination'>
                <a href=''>01</a>
                <a href=''>02</a>
                <a href=''>03</a>
                <a href=''>04</a>
                <a href=''>05</a>
                <a href='' style={{textDecoration:'none',fontSize:'bigger'}}><i class='bx bx-chevron-right'></i></a>
            </div>
            </> */}
    </div>
    // <div className='container_card'>
    //           {cards.map((item) => {
    //             return (
    //               <Container_card
    //                 name={item.name}
    //                 style={item.style}
    //                 shape={item.shape}
    //                 url={item.url}
    //                 price={item.price}
    //               />
    //             )
    //           })}
                
    //         </div>
  )
}

export default Content