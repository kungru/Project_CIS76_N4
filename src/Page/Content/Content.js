import Container_card from '../Body/Container_card';
import { Link, NavLink, parsePath, useParams } from 'react-router-dom';
import React, {useEffect,useState} from 'react';
import {Spinner} from 'reactstrap';
import DetailPopup from '../detail_popup/detailPopup';
import './Content.css';
const Content = () => {
    const params = useParams()
        const [cards, setCards] = useState([]);
        const [addtoCards, setAddtoCards] = useState([]);
        const [IsLoading,setIsLoading]=useState(false);
        const [popupCard,setPopupCard]=useState(false);
        const [isData, setIsData] = useState(true)
        const [total, setTotal] = useState(0)
    useEffect(
        () => {
        setIsLoading(true);

          fetch('https://634015dae44b83bc73c898c3.mockapi.io/api/v1/card')
            .then((res) => {
              return (res.json())
            }).then((data) => {

              setCards(data);
   
              setIsLoading(false)
            });
            
        }, []
    
      )
      const [isData1, setIsData1] = useState(true)
     // api addtocard
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
          
      }, [isData1]
  
    )
     
      

      const handelAddtoCard = (id,name,style,shape,url,price) => {
          
         
          const newCard = {
            id,
            name,
            style,
            shape,

            price,
            url,
            quantity : 1
            
            

          }
          
          
          const checkId = addtoCards.find(c => c.id === id) 
          
          
          if(checkId && addtoCards.length !== 0){
            
            // parseInt(checkId.quantity)
            
            const checkQuantity = checkId.quantity += 1 ;
            

            // const string = JSON.stringify(checkQuantity)
            
           
            fetch('https://633e973783f50e9ba3b3be2f.mockapi.io/addtocard/', + id, {
              method: 'PUT',
              crossDomain: true,
              xhrFields: {
                  withCredentials: true
              },
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  quantity: checkQuantity
                  
                })
              })
          .then(res => {
            res.json().then((res) => {

              
              setIsData1(!isData1) 
            })
          })
            .catch(err => {
              console.error(err)
            })
          }else{
            
            fetch('https://633e973783f50e9ba3b3be2f.mockapi.io/addtocard/', {
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
              setIsData1(!isData1)
            
              setIsLoading(false)
            });
          }
        }
  // const a=cards.filter((e)=>e.id==id)
  const [popupInfo,setPopupInfo]=useState('')
const handlePopup=(id,name,style,shape,url,price)=>{
// const newCard1={id,name,style,shape,url,price}
// newCard1={...cards}

const a=cards.filter((e)=>e.id==id)

setPopupInfo(a)


console.log(popupInfo[0].name)
}
const [detail,setIsShowDetail]=useState(false)
const setDetailPopup=()=>{
setIsShowDetail(true)

}
const hideDetail=()=>{
  setIsShowDetail(false)
}
  return (

   
    <div  className='Content_container'>
      {params.id}
      {detail ?<DetailPopup hideDetail={hideDetail}  name={popupInfo[0].name} price={popupInfo[0].price} url={popupInfo[0].url}/>:''}
     
   
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
                    onAddtoCard ={handelAddtoCard}
                    onDisplay={handlePopup}
                    id={item.id}
                    quantity={item.quantity}
                    setIsShowDetail={setDetailPopup}

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