import Container_card from '../Body/Container_card';
import { Link, NavLink, parsePath, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'reactstrap';
import DetailPopup from '../detail_popup/detailPopup';
import CatalogMagic from '../../Loading/CatalogMagic';
import './Content.css';
const Content = () => {
  const params = useParams()
  const [cards, setCards] = useState([]);
  const [addtoCards, setAddtoCards] = useState([]);
  const [addtoCards1, setAddtoCards1] = useState([]);
  const [IsLoading, setIsLoading] = useState(false);
  const [popupCard, setPopupCard] = useState(false);
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
  const handelAddtoCart1 = (id, url, name, price, shape, style) => {
    console.log(id)
    const newCard1 = { id, name, style, shape, url, price, quantity: 1 }
    const checkIdCart = addtoCards1.find(c => c.id === id)

    // setIsData1(!isData1)
    if (checkIdCart) {
      const checkQuantity1 = checkIdCart.quantity += 1;

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
  }
  
  
  
  const handelSumUp = (id) => {

    // const totalUp = addtoCards1.find(c => c.id === id)
    // if (totalUp) {

      
    //   if (totalUp.quantity < 3) {
    //     const checkDetailQuantity = totalUp.quantity += 1;
    //     const checkDetailPrice = totalUp.price *= 2;
    //     console.log(checkDetailQuantity)

    //     fetch(`https://633e973783f50e9ba3b3be2f.mockapi.io/addtocard/` + id, {
    //       method: 'PUT',
    //       crossDomain: true,
    //       xhrFields: {
    //         withCredentials: true
    //       },
    //       headers: {
    //         Accept: 'application/json',
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({
    //         quantity: checkDetailQuantity,
    //         price: checkDetailPrice

    //       })
    //     })
    //       .then(res => {
    //         res.json().then((res) => {


    //           setIsData1(!isData1)
    //         })
    //       })
    //       .catch(err => {
    //         console.error(err)
    //       })

    //   }
    // }

  }
  const handelSumDown = (id) => {


  }


  return (


    <div className='Content_container'>
      <div style={{ visibility: `${stylePopup}` }} className='dark_popup_1'></div>
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
              <NavLink to='' style={{ textDecoration: 'none', fontSize: 'bigger' }}><i class='bx bx-chevron-right'></i></NavLink>
            </div>
          </>
      }

    </div>

  )
}

export default Content