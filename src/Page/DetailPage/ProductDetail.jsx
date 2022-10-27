import React from "react";
import { useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Navlink } from 'reactstrap';
import './DetailPage.css';
function ProductDetail(){
    const [cards,setCards]=useState([])
    const [IsLoading, setIsLoading] = useState(false);
    useEffect(
        () => {
          setIsLoading(true);
    
          fetch('https://634015dae44b83bc73c898c3.mockapi.io/api/v1/card')
            .then((res) => {
              return (res.json())
            }).then((data) => {
    
              setCards(data
              );
    
              setIsLoading(false)
              const thisProducts = cards.find(prod=>prod.id===productId)
            });
    
        }, []
    
      )

    const {productId}=useParams()
   
    return(
        
        <>
{IsLoading ?   '' :<div className='Detail_page'>
        <Row>
          <Col>
          <div className='detail_line' style={{border:'5px solid black',backgroundColor:'black', width:'350px',marginBottom:'20px'}}></div>
    <div className='detail_grab'>
      <div className='detail_grab_allimg'>
        <img src='https://neoocular.qodeinteractive.com/wp-content/uploads/2021/07/Shop-Single-01-img-01-768x552.jpg'/>

      </div>
      <div className='detail_grab_content'>
        <h2 className='detail_grab_heading'>{cards.name}</h2>
        <div className='detail_star'>
        <i class='bx bxs-star'></i>
        <i class='bx bxs-star'></i>
        <i class='bx bxs-star'></i>
        <i class='bx bxs-star'></i>
        <i class='bx bxs-star-half'></i>
        </div>
        <p className='detail_grab_price'>${cards.price}</p>
        <p className='detail_grab_info'>Một chiếc kính xinh xinh</p>
        <div className='detail_grab_sm_con'>
         <input className='detail_grab_input' placeholder='Total'></input> 
         <div className='detail_addcart'>add to cart</div>
        </div>
        <div className='detail_grab_icon'>
        <i class='bx bxl-facebook-circle bx-fade-up'style={{borderRight:'1px solid black', padding:'8px'}} ></i>
        <i class='bx bxl-twitter bx-fade-up'style={{borderRight:'1px solid black', padding:'8px'}} ></i>
        <i class='bx bxl-instagram-alt bx-fade-up'style={{borderRight:'1px solid black', padding:'8px'}} ></i>
        <i class='bx bxl-pinterest bx-fade-up' style={{borderRight:'1px solid black', padding:'8px'}}></i>
        <i class='bx bxs-envelope bx-fade-up' style={{borderRight:'1px solid black', padding:'8px'}}></i>
        </div>
      </div>
    </div>

          </Col>
        </Row>
      </div>}
        </>
    )
}
export default ProductDetail