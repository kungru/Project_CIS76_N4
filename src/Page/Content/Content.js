import Container_card from '../Body/Container_card';
import { Link, NavLink, parsePath, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'reactstrap';
import { useContext } from 'react';
import DetailPopup from '../detail_popup/detailPopup';
import CatalogMagic from '../../Loading/CatalogMagic';
// import ContextLanguage from '../Context/ContextLanguage';
import { ThemeContext } from '../../App';
import './Content.css';
const Content = () => {
  const theme = useContext(ThemeContext)



  // const Content = () => {


  //     const theme = useContext(ThemeContext)


  const params = useParams()
  const [cards, setCards] = useState([]);
  const [addtoCards, setAddtoCards] = useState([]);
  const [addtoCards1, setAddtoCards1] = useState([]);
  const [IsLoading, setIsLoading] = useState(false);
  const [popupCard, setPopupCard] = useState(false);
  const [isData, setIsData] = useState(true)
  const [total, setTotal] = useState(0)
  const [cardsTemp,setCardsTemp]=useState([])
  useEffect(
    () => {
      setIsLoading(true);

      fetch('https://634015dae44b83bc73c898c3.mockapi.io/api/v1/card')
        .then((res) => {
          return (res.json())
        }).then((data) => {

          setCards(data);
          setCardsTemp(data)
          setIsLoading(false)
        });

    }, []

  )

  const [isData1, setIsData1] = useState(true)
  const [isData2, setIsData2] = useState(true)
  // api addtocard
  useEffect(
    () => {
      setIsLoading(true);

      fetch('https://633e973783f50e9ba3b3be2f.mockapi.io/addtocard')
        .then((res) => {
          return (res.json())
        }).then((data) => {

          setAddtoCards(data);
          setAddtoCards1(data)
          setIsLoading(false)
        });

    }, [isData1, isData2]

  )

  const handelAddtoCard = (id, name, style, shape, price, url) => {

    if (theme.display == true) {
      const newCard = {
        id,
        name,
        style,
        shape,

        url,
        price,
        quantity: 1
      }

      const checkId = addtoCards.find(c => c.id === id)

      if (checkId) {

        // parseInt(checkId.quantity)
        const checkQuantity = checkId.quantity += 1;

        fetch(`https://633e973783f50e9ba3b3be2f.mockapi.io/addtocard/` + id, {
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
            quantity: checkQuantity,
          })
        })
          .then(res => {
            res.json().then((res) => {

              console.log("vao day")
              setIsData1(!isData1)
            })
          })
          .catch(err => {
            console.log("looix")
            console.error(err)
          })



      } else {

        fetch('https://633e973783f50e9ba3b3be2f.mockapi.io/addtocard/', {
          method: 'POST',
          headers: {
            Acceps: 'application/json',
            'content-Type': 'application/json'
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

    } else {
      theme.setVisibility(true)
    }
    // const newCard = {
    //   id,
    //   name,
    //   style,
    //   shape,

    //   url,
    //   price,
    //   quantity: 1
    // }

    // const checkId = addtoCards.find(c => c.id === id)

    // if (checkId) {

    //   // parseInt(checkId.quantity)
    //   const checkQuantity = checkId.quantity += 1;

    //   fetch(`https://633e973783f50e9ba3b3be2f.mockapi.io/addtocard/` + id, {
    //     method: 'PUT',
    //     crossDomain: true,
    //     xhrFields: {
    //       withCredentials: true
    //     },
    //     headers: {
    //       Accept: 'application/json',
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       quantity: checkQuantity,
    //     })
    //   })
    //     .then(res => {
    //       res.json().then((res) => {

    //         console.log("vao day")
    //         setIsData1(!isData1)
    //       })
    //     })
    //     .catch(err => {
    //       console.log("looix")
    //       console.error(err)
    //     })



    // } else {

    //   fetch('https://633e973783f50e9ba3b3be2f.mockapi.io/addtocard/', {
    //     method: 'POST',
    //     headers: {
    //       Acceps: 'application/json',
    //       'content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(newCard)
    //   })
    //     .then((res) => {
    //       return (res.json())
    //     }).then((data) => {
    //       setIsData1(!isData1)

    //       setIsLoading(false)
    //     });
    // }


  }
  // const a=cards.filter((e)=>e.id==id)
  const [popupInfo, setPopupInfo] = useState('')
  const handlePopup = (id, name, style, shape, url, price) => {
    // const newCard1={id,name,style,shape,url,price}
    // newCard1={...cards}

    const a = cards.filter((e) => e.id == id)

    setPopupInfo(a)


    // console.log(popupInfo[0].name)
  }
  const [detail, setIsShowDetail] = useState(false)
  const [stylePopup, setStylePopup] = useState('')

  const setDetailPopup = () => {
    setIsShowDetail(true)
    setStylePopup('visible')
  }
  const hideDetail = () => {
    setIsShowDetail(false)
    setStylePopup('')

  }



  // const handelAddtoCart1 = (id, url, name, price, shape, style) => {


    const handelAddtoCart1 = (id, url, name, price, shape, style, quantity) => {
      if (theme.display == true) {
        
        const newCard1 = { id, name, style, shape, url, price, quantity: theme.count }
        const checkIdCart = addtoCards1.find(c => c.id === id)
  
        // setIsData1(!isData1)
        if (checkIdCart) {
          const checkQuantity1 = checkIdCart.quantity += theme.count;
  
          fetch(`https://633e973783f50e9ba3b3be2f.mockapi.io/addtocard/` + id, {
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
              quantity: checkQuantity1,
            })
          })
            .then(res => {
              res.json().then((res) => {
  
                console.log("vao day")
                setIsData2(!isData2)
              })
            })
            .catch(err => {
              console.log("looix")
              console.error(err)
            })
  
  
        } else {
          fetch('https://633e973783f50e9ba3b3be2f.mockapi.io/addtocard/', {
            method: 'POST',
            headers: {
              Acceps: 'application/json',
              'content-Type': 'application/json'
            },
            body: JSON.stringify(newCard1)
          })
            .then((res) => {
              return (res.json())
            }).then((data) => {
              setIsData2(!isData2)
  
              setIsLoading(false)
            });
        }
  
        theme.setCount(1)
      }else{
        theme.setVisibility(true)
      }
    }
      




    const handelSumUp = (id) => {
      // setCount(prev => prev + 1)
      const totalUp = addtoCards1.find(c => c.id === id)


      // theme.setCount(theme.count + 1)



    }
    const handelSumDown = (id) => {
      // setCount(prev => prev - 1)
      // if(theme.count > 1){

      //   theme.setCount(theme.count - 1)
      // }



    }


    //   theme.setCount(theme.count - 1)
    // }
   
    

  
  const [alpha,setAlpha]=useState(true);
const testSort=()=>{
  const a=[...cards];
  const t=a.sort((a,b)=> a>b? 1:-1)
  console.log(cards[0].price)
  setCards(t)
  setAlpha(!alpha)
  setIsActiveSort(!isActiveSort)
}

const [isActiveSort,setIsActiveSort]=useState(false)
const [colorPrice,setColorPrice]=useState(false)
const testPrice1=(event)=>{
  
  let test=[]
  const a=[...cardsTemp]

  for (let i =0;i<a.length;i++){
    if((a[i].price<200)){
      test.push(a[i])
    }
  }
  setCards(test);
}
const testPrice2=(event)=>{
  let test=[];
  const a=[...cardsTemp]



  for (let i =0;i<a.length;i++){
    if((a[i].price<300 && a[i].price>=200)){
      test.push(a[i])
    }
  }
  setCards(test)
}
const testPrice3=()=>{
  let test=[];
  const a=[...cardsTemp]


  for (let i =0;i<a.length;i++){
    if((a[i].price<=400 && a[i].price>=300)){
      test.push(a[i])
    }
  }
  setCards(test)
}
const testPrice4=()=>{
  
  let test=[]
  const a=[...cardsTemp]
 
  for (let i =0;i<a.length;i++){
    if((a[i].price>400)){
      test.push(a[i])
    }
  }
  setCards(test);
}
const testAll=()=>{
  setCards(cardsTemp)
}

  return (
    <div className='Content_container'>
      <div style={{ visibility: `${stylePopup}` }} className='dark_popup_1'></div>
      <div className='container_card_sort' >
    {alpha ? <div><button className='container_card_name' onClick={testSort} >A to Z</button></div>: <div><button onClick={testSort} className='container_card_name active' style={{color:'white',background:'black'}}>Z to A</button></div>}  
    <div><button onClick={testPrice1} className='btn_container_price'>Price {'<'} 200$</button></div>
    <div><button onClick={testPrice2}className='btn_container_price'>Price  200$-300$</button></div>
    <div><button onClick={testPrice3}className='btn_container_price'>Price 300$-400$</button></div>
    <div><button onClick={testPrice4}className='btn_container_price'>Price {'>'} 400$</button></div>
    <div><button onClick={testAll}className='btn_container_price'>All Product</button></div>
    </div>
    <div style={{display:'flex',flexDirection:'flex-end',width:'91%',marginLeft:'15px'}} ><span style={{border:'1px solid black',width:'100%',}}></span></div>
      {params.id}
      {detail ?
        <DetailPopup onSumUp={handelSumUp} onSumDown={handelSumDown} onDetailAtc={handelAddtoCart1} hideDetail={hideDetail} id={popupInfo[[0]].id} name={popupInfo[0].name} price={popupInfo[0].price} url={popupInfo[0].url} quantity={popupInfo[0].quantity} />
        : ''}
    {
          IsLoading ?
            <div className='spinner_container'>
              <CatalogMagic />
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
                      onAddtoCard={handelAddtoCard}
                      onDisplay={handlePopup}
                      id={item.id}

                      quantity={item.quantity}
                      setIsShowDetail={setDetailPopup}

                    // count={count}
                    />
                  )
                })}

              </div>

              <div className='Content_pagination'>
                <NavLink to='/shop'>01</NavLink>
                <NavLink to='/02'>02</NavLink>
                <NavLink to='03'>03</NavLink>
                <NavLink to='04'>04</NavLink>
                <NavLink to='05'>05</NavLink>
                <NavLink to='/02' style={{ textDecoration: 'none', fontSize: 'bigger' }}><i class='bx bx-chevron-right'></i></NavLink>
              </div>
            </>
        }

      </div>

    )
      }


  export default Content