import Container_card from '../Body/Container_card';
import { Link, NavLink, useParams } from 'react-router-dom';
import React, {useEffect,useState} from 'react';
import {Spinner} from 'reactstrap';
import './Content.css';
import DetailPopup from '../detail_popup/detailPopup';
const Content = () => {
    const params = useParams()
        const [cards, setCards] = useState([]);
        const [addtoCards, setAddtoCards] = useState([]);
        const [IsLoading,setIsLoading]=useState(false);
        
        const [popupCard,setPopupCard]=useState(false);
        const [isShowDetail, setIsShowDetail] = useState(false)
        // tạo state lưu thông tin sản phẩm
    useEffect(
        () => {
        setIsLoading(true);
        setPopupCard(false);
          fetch('https://634015dae44b83bc73c898c3.mockapi.io/api/v1/card')
            .then((res) => {
              return (res.json())
            }).then((data) => {
              console.log(data);
              setCards(data);
              setIsLoading(false)
              setPopupCard(true)
            });
            
        }, []
    
      )

    //  api addtocard
     useEffect(
      () => {
      setIsLoading(true);

        fetch('https://633e973783f50e9ba3b3be2f.mockapi.io/addtocard')
          .then((res) => {
            return (res.json())
          }).then((data) => {
           
            setAddtoCards(data);
            
            setIsLoading(false)
          });
          
      }, [cards]
  
    )
     
 

      const handelAddtoCard = (id,name,style,shape,url,price) => {
          console.log(id)
          const newCard = {
            id,
            name,
            style,
            shape,
            price,
            url,
            

          }
          fetch('https://633e973783f50e9ba3b3be2f.mockapi.io/addtocard', {
            method: 'POST',
            headers: {
                Acceps: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCard)
          })
          .then((res) => {
            return (res.json())
          }).then((data) => {
           
            setAddtoCards(data);
            
            setIsLoading(false)
          });
      }
const sortCard=()=>{

}
  const att=[...cards].sort((a,b)=> a.name - b.name ?1:-1)

console.log(att)
const[button,setButton]=useState(false);
const testBtn=()=>{
  setButton(true)
}
  return (
   
    <div className='Content_container'>
      {/* {isShowDetail ? <DetailPopup setIsShowDetail={setIsShowDetail} /> :""} */}


     {isShowDetail ?  cards.map((product)=>{
   
   return(
    <DetailPopup 
    key={product.id}
    setIsShowDetail={setIsShowDetail}
    name={product.name}
    />
   )

     }):''}
       {
        IsLoading  ? 
        <div className='spinner_container'>
        <Spinner>
        Loading...
      </Spinner>    
        </div>
         : <>
     <button onClick={testBtn}>123</button>

   
      
       <div className='container_card'>
        {button ?[...cards].sort((a,b)=>a.name>b.name ?1:-1).map(item=>{
          return(
            <Container_card
            name={item.name}
            style={item.style}
            shape={item.shape}
            url={item.url}
            price={item.price}
            onAddtoCard ={handelAddtoCard}
            id={item.id}
            setIsShowDetail={setIsShowDetail}
            sortCard={sortCard}
          />
          )
        }) :  cards.map((item) => {

          return (
            <Container_card
              name={item.name}
              style={item.style}
              shape={item.shape}
              url={item.url}
              price={item.price}
              onAddtoCard ={handelAddtoCard}
              id={item.id}
              setIsShowDetail={setIsShowDetail}
              sortCard={sortCard}
            />
          )
        })}
              {/* {cards.map((item) => {

                return (
                  <Container_card
                    name={item.name}
                    style={item.style}
                    shape={item.shape}
                    url={item.url}
                    price={item.price}
                    onAddtoCard ={handelAddtoCard}
                    id={item.id}
                    setIsShowDetail={setIsShowDetail}
                    sortCard={sortCard}
                  />
                )
              })} */}
                
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