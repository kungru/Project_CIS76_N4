
// import Header from './Page/Header/Header';
import Example from './Page/Body/Carousel_zx';
import Content from './Page/Content/Content';
import Above_footer from './Page/Body/Above_footer';
import Navigation from './Page/Navigation/Navigation';
import Header from './Page/Header/Header';
import Sub from './Page/Body/Sub';
import Footer from './Page/Footer/Footer';
import Scrolltop from './Page/Body/Scrolltop';
import DetailPopup from './Page/detail_popup/detailPopup';
import ContentHung from './Page/Body/ContentHung';
import DetailPage from './Page/DetailPage/DetailPage';
import React, { useState, useEffect, createContext, useContext } from 'react';
import ProductDetail from './Page/DetailPage/ProductDetail';
import Crud from './Page/Crud/crud';
import ViewCard from './ViewCard/ViewCard';
// import ContextLanguage from './Page/Context/ContextLanguage';
import Checkout from './Checkout/Checkout';
import { Container, Row, Col, Navlink } from 'reactstrap';

import { Routes, Route, NavLink, Link, useNavigate } from 'react-router-dom'
// import { Login } from './Page/Navigation/Navigation';
import Profile from './Profile/Profile';
export const ThemeContext = createContext()
// import Container_card from './Page/Body/Container_card';
function App() {
  const [cards, setCards] = useState([]);

  const [count, setCount] = useState(1)
  const [price, setPrice] = useState()
  const [renderCart, setRenderCart] = useState(false)


  useEffect(
    () => {
      fetch('https://634015dae44b83bc73c898c3.mockapi.io/api/v1/card')
        .then((res) => {
          return (res.json())
        }).then((data) => {

          setCards(data);

        })
    }, []
  )
  const MainPage = () => {
    return (
      <>
        {/* <DetailPopup/> */}
        {/* <Scrolltop/>
      <Row>
      <Navigation/>
      </Row>
        <Row>
          <Example/>
        </Row> */}

        {/* <Row>
        <Navigation/>
      </Row> */}

        <Row>
          <Col>
            <ContentHung />

          </Col>
        </Row>
        <Row>
          <Col>
            <Above_footer />
          </Col>
        </Row>
        {/* <Row>
          <Col>
            <Footer /> 
          </Col>
        </Row> */}
      </>

    )
  }

  const Content_test = () => {
    // const [ count, setCount] = useState('1')

    return <>

      <Row>
        <Col xs={3} id="sidebar-wrapper">
          <Header />
        </Col>
        <Col xs={9} id="page-content-wrapper">
          <Content />

        </Col>

      </Row>
    </>
  }
  const Crud_test = () => {
    return (
      <Crud />
    )
  }
  const ViewCard_test = () => {
    return (
      <>

        <ViewCard />
      </>
    )
  }
  const ChecKout_test = () => {
    return (
      <>

        <Checkout />
      </>
    )
  }
  const Profile_test = () => {
    return (
      <Profile />
    )

  }

  const [profile, setProfile] = useState([])
  useEffect(() => {
    fetch('https://633e973783f50e9ba3b3be2f.mockapi.io/Login')
      .then((res) => {
        return (res.json())
      }).then((data) => {

        setProfile(data);
        // setLoading(true)



      })
  }, [])
  const navigate = useNavigate()
  const [isLogin2, setIsLogin2] = useState(true)
  const [onUser, setOnuser] = useState({})
  const [display, setDisplay] = useState(false)
  const [visibility, setVisibility] = useState(false)
  const [isDataApp, setIsDataApp] = useState(true)
  const [isLogin, setIsLogin] = useState(true)
  const [clearCart, setClearCart] = useState(false)
  const [textBlock, setTextBlock] = useState(true)

  const [discountSub, setDiscountSub] = useState('')


  const [searchBlock, setSearchBlock] = useState('')
  const [linhtinh, setLinhTinh] = useState(false);
  const [linhtinh2, setLinhTinh2] = useState(false)
  const [isSearch, setIsSearch] = useState(true)


  return (


    // <ThemeContext.Provider value={{count:count, setCount:setCount ,price: price, setPrice:setPrice}}>

    <ThemeContext.Provider value={{
      isDataApp: isDataApp, setIsDataApp: setIsDataApp,
      isLogin: isLogin, setIsLogin: setIsLogin,
      isLogin2: isLogin2, setIsLogin2: setIsLogin2,
      clearCart: clearCart, setClearCart: setClearCart,
      renderCart: renderCart, setRenderCart: setRenderCart,
      visibility: visibility, setVisibility: setVisibility,
      count: count, setCount: setCount,
      onUser: onUser, setOnuser: setOnuser,
      display: display, setDisplay: setDisplay,

      textBlock: textBlock, setTextBlock: setTextBlock,
      discountSub: discountSub, setDiscountSub: setDiscountSub,

      textBlock: textBlock,
      setTextBlock: setTextBlock,
      searchBlock: searchBlock, setSearchBlock,
      linhtinh: linhtinh, setLinhTinh: setLinhTinh,
      linhtinh2: linhtinh2, setLinhTinh2: setLinhTinh2,
      isSearch: isSearch, setIsSearch: setIsSearch,

    }}>
      <div className='App'>
        {/* <ContextLanguage.Provider value={{onUser:onUser, setOnuser:setOnuser,display:display,setDisplay:setDisplay}} > */}
        {/* {display == true ? <Sub /> : ''} */}
        <Container fluid className="bg-light border" style={{ backgroundColor: 'white', width: '100%', marginLeft: '0', marginRight: '0', position: 'relative' }}>
          <Row style={{ marginBottom: '106px', }}>
            <Navigation />
          </Row>
          <Scrolltop />

          <Row>

            <Example />
          </Row>
          {/* <Col xs={3} id="sidebar-wrapper">
            <Header />
          </Col> */}
          {/* <Col xs={9} id="page-content-wrapper">
            <Content/>

          </Col> */}

          <Routes>
            <Route path="/" element={<MainPage />} />


            <Route path="/detail" element={<DetailPage />} />
            <Route path="/crud" element={<Crud_test />} />
            <Route path='/card' element={<ViewCard_test />} />
            <Route path='/shop' element={<Content_test />} />
            <Route path='/shop/:productId' element={<ProductDetail />}>

            </Route>
            <Route path='/checkoutCart' element={<ChecKout_test />} />
            {display ? <Route path='/profile' element={<Profile_test />} /> : <Route path="/" element={<MainPage />} />}
            {/* <Route path='/profile' element={<Profile_test /> } /> */}
          </Routes>

          <Row>
            <Col>
              <Footer />
            </Col>
          </Row>
        </Container>
        {/* </ContextLanguage.Provider> */}

      </div>
    </ThemeContext.Provider>
  );
}

export default App;