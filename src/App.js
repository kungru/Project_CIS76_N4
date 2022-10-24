
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
import React, { useState, useEffect,createContext } from 'react';
import Crud from './Page/Crud/crud';
import ViewCard from './ViewCard/ViewCard';
import Checkout from './Checkout/Checkout';
import { Container, Row, Col, Navlink } from 'reactstrap';
import {Routes, Route, NavLink,Link,useNavigate} from 'react-router-dom'
// import { Login } from './Page/Navigation/Navigation';






import Profile from './Profile/Profile';

export const ThemeContext = createContext()
// import Container_card from './Page/Body/Container_card';
function App() {
  const [cards, setCards] = useState([]);

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
const MainPage=()=>{
  return(
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
          <Above_footer/>
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
  return  <>

    <Row>
          <Col xs={3} id="sidebar-wrapper">
            <Header />
          </Col>
          <Col xs={9} id="page-content-wrapper">
            <Content/>

          </Col>

        </Row>
  </>
}
const Crud_test=()=>{
  return(
    <Crud/>
  )
}
const ViewCard_test=()=>{
  return(
    <>

    <ViewCard />
    </>
  )
}
const ChecKout_test=()=>{
  return(
    <>

      <Checkout />
    </>
  )
}
const Profile_test = () => {
  return(
    <Profile />
)

}

const [profile, setProfile] = useState([])
useEffect(() => {
    fetch ('https://633e973783f50e9ba3b3be2f.mockapi.io/Login')
    .then((res)=>{
      return(res.json())
    }).then((data)=>{
        
        setProfile(data);
        // setLoading(true)
        
        
     
    })
},[])
const navigate = useNavigate()
const [theme,setTheme] = useState()
  return (
   

    <div className='App'>

      <Container fluid className="bg-light border" style={{ backgroundColor: 'white', width: '100%', marginLeft: '0', marginRight: '0' }}>
      <Row>
        <Navigation/>
      </Row>
      <Scrolltop/>
      
        <Row>
        
          <Example/>
        </Row>
        {/* <Col xs={3} id="sidebar-wrapper">
            <Header />
          </Col> */}
          {/* <Col xs={9} id="page-content-wrapper">
            <Content/>

          </Col> */}
          
      <Routes>
				<Route path="/" element={<MainPage />} />
 

                
				<Route path="/crud" element={<Crud_test />} />
        <Route path='/card' element={ <ViewCard_test /> } />
        <Route path='/shop' element={ <Content_test />} />
        <Route path='/checkoutCart' element={ <ChecKout_test /> } />
        {/* <Route path='/profile' element={ profile.email ? <Profile_test /> : <p>checkout</p>  } /> */}
			</Routes>
      
      <Row>
          <Col>
            <Footer /> 
          </Col>
        </Row>
      </Container>

    
    </div>
  );
}

export default App;