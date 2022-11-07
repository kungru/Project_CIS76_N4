import Container_card from '../Body/Container_card';
import { Link, NavLink, parsePath, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'reactstrap';
import { useContext } from 'react';
import Pagination from './Pagination';
import DetailPopup from '../detail_popup/detailPopup';
import CatalogMagic from '../../Loading/CatalogMagic';
// import ContextLanguage from '../Context/ContextLanguage';
import { ThemeContext } from '../../App';
import './Content.css';
const Content = (props, { }) => {
  const theme = useContext(ThemeContext)
  const params = useParams()
  const [cards, setCards] = useState([]);
  const [addtoCards, setAddtoCards] = useState([]);
  const [addtoCards1, setAddtoCards1] = useState([]);
  const [IsLoading, setIsLoading] = useState(false);
  const [popupCard, setPopupCard] = useState(false);
  const [cardsTemp, setCardsTemp] = useState([])
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

    }, [theme.isDataApp, theme.display]

  )

  const handelAddtoCard = (id, name, style, shape, price, url) => {

    console.log(id)

    // const json = localStorage.getItem('key')
    if (theme.display == true) {
      if (theme.onUser !== {}) {

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
                theme.setIsDataApp(!theme.isDataApp)


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
              theme.setIsDataApp(!theme.isDataApp)
              setIsLoading(false)
            });
        }
      }


    } else {
      theme.setVisibility(true)
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
              theme.setIsDataApp(!theme.isDataApp)


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
            theme.setIsDataApp(!theme.isDataApp)



            setIsLoading(false)
          });
      }

      theme.setCount(1)
    } else {
      theme.setVisibility(true)
    }
  }

  const [alpha, setAlpha] = useState(true);
  const testSort = () => {
    const a = [...cards];
    const t = a.sort((a, b) => a > b ? 1 : -1)
    console.log(cards[0].price)
    setCards(t)
    setAlpha(!alpha)
    setIsActiveSort(!isActiveSort)
  }

  const [isActiveSort, setIsActiveSort] = useState(false)
  const [colorPrice, setColorPrice] = useState(false)
  const testPrice1 = (event) => {

    let test = []
    const a = [...cardsTemp]

    for (let i = 0; i < a.length; i++) {
      if ((a[i].price < 200)) {
        test.push(a[i])
      }
    }
    setCards(test);
  }
  const testPrice2 = (event) => {
    let test = [];
    const a = [...cardsTemp]



    for (let i = 0; i < a.length; i++) {
      if ((a[i].price < 300 && a[i].price >= 200)) {
        test.push(a[i])
      }
    }
    setCards(test)
  }
  const testPrice3 = () => {
    let test = [];
    const a = [...cardsTemp]


    for (let i = 0; i < a.length; i++) {
      if ((a[i].price <= 400 && a[i].price >= 300)) {
        test.push(a[i])
      }
    }
    setCards(test)
  }
  const testPrice4 = () => {

    let test = []
    const a = [...cardsTemp]

    for (let i = 0; i < a.length; i++) {
      if ((a[i].price > 400)) {
        test.push(a[i])
      }
    }
    setCards(test);
  }
  const testAll = () => {
    setCards(cardsTemp)
  }

  const [searchTest, setSearchTest] = useState('')
  const handleForSearch = () => {
    const a = [...cardsTemp]
    const c = a.filter((e) => {
      return (
        e.name.toLowerCase().includes(searchTest.toLowerCase().trim())
      )
    })
    console.log(c)
    setCards(c)
  }
  // Pagination
  const [crPage, setCrPage] = useState(1)
  const [cartPage, setCartPage] = useState(5);


  const lastCart = crPage * cartPage;
  const firtCart = lastCart - cartPage;
  const fakeCartPage = [...cards]
  const currenCart = fakeCartPage.slice(firtCart, lastCart)




  const paginate = (pageNumber) => {
    setCrPage(pageNumber)

  }


  return (
    <div className='Content_container'>
      <div style={{ visibility: `${stylePopup}` }} className='dark_popup_1'></div>
      <div className='container_card_sort' >
        {alpha ? <div><button className='container_card_name' onClick={testSort} >A to Z</button></div> : <div><button onClick={testSort} className='container_card_name active' style={{ color: 'white', background: 'black' }}>Z to A</button></div>}
        <div><button onClick={testPrice1} className='btn_container_price'>Price {'<'} 200$</button></div>
        <div><button onClick={testPrice2} className='btn_container_price'>Price  200$-300$</button></div>
        <div><button onClick={testPrice3} className='btn_container_price'>Price 300$-400$</button></div>
        <div><button onClick={testPrice4} className='btn_container_price'>Price {'>'} 400$</button></div>
        <div><button onClick={testAll} className='btn_container_price'>All Product</button></div>
        <div ><input placeholder='Search...' onChange={(e) => setSearchTest(e.target.value)} value={searchTest} /><button style={{ marginTop: '5px' }} onClick={handleForSearch} className='btn_search_test'>Find</button></div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'flex-end', width: '91%', marginLeft: '15px' }} ><span style={{ border: '1px solid black', width: '100%', }}></span></div>
      {params.id}
      {detail ?
        <DetailPopup onDetailAtc={handelAddtoCart1} hideDetail={hideDetail} id={popupInfo[[0]].id} name={popupInfo[0].name} price={popupInfo[0].price} url={popupInfo[0].url} quantity={popupInfo[0].quantity} />
        : ''}
      {
        IsLoading ?
          <div className='spinner_container' style={{ marginTop: '250px' }}>
            <CatalogMagic />
          </div>
          : <>
            <div className='container_card'>
              {currenCart.map((item) => {
                return (
                  <Container_card
                    key={item.id}
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

            <div>

              <Pagination cartPage={cartPage} totalPage={cards.length} paginate={paginate} crPage={crPage} />

            </div>
          </>
      }

    </div>

  )
}


export default Content