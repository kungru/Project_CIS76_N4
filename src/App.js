
// import Header from './Page/Header/Header';
import Example from './Page/Body/Carousel_zx';

import Navigation from './Page/Navigation/Navigation';
import Header from './Page/Header/Header';
import Footer from './Page/Footer/Footer';
import Sub from './Page/Body/Sub';
import Scrolltop from './Page/Body/Scrolltop';
import Content from './Page/Body/Content';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Navlink } from 'reactstrap';
import Container_card from './Page/Body/Container_card';

import Content from './Page/Content/Content';
import Above_footer from './Page/Body/Above_footer';
import Navigation from './Page/Navigation/Navigation';
import Header from './Page/Header/Header';
import Sub from './Page/Body/Sub';
import Footer from './Page/Footer/Footer';
import Scrolltop from './Page/Body/Scrolltop';
import DetailPopup from './Page/detail_popup/detailPopup';
import ContentHung from './Page/Body/ContentHung';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Navlink } from 'reactstrap';
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

  return (
    <div className='App'>

        
      <Container fluid className="bg-light border" style={{ backgroundColor: 'white', width: '100%', marginLeft: '0', marginRight: '0' }}>
      <Scrolltop/>
      <Row>
        {/* <Sub /> */}

      
      <Container fluid className="bg-light border" style={{ backgroundColor: 'white', width: '100%', marginLeft: '0', marginRight: '0' }}>
      {/* <DetailPopup/> */}
      <Scrolltop/>
      <Row>

      <Navigation/>
      </Row>
        <Row>
          <Example/>
        </Row>
        <Row>
          <Col xs={3} id="sidebar-wrapper">
            <Header />
          </Col>
          <Col xs={9} id="page-content-wrapper">

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
          </Col>
          <Col>
                <Content />

            <Content/>
          </Col>
          <Col>
          <ContentHung/>
          </Col>
        </Row>
        <Row>
          <Col>
          <Above_footer/>

          </Col>
        </Row>
        <Row>
          <Col>
            <Footer /> 
          </Col>
        </Row>
        
      </Container>
      


      {/* <Footer/> */}

    

    </div>
  );
}

export default App;
