import React from 'react'
import './Sub.css'
import { Form, FormGroup, Label, Input, Button, Container, Row } from 'reactstrap'
import { useState, useRef, useEffect } from 'react'


const Sub = () => {

  const [block, setBlock] = useState(0)
  const divRef = useRef()
  const [timeAll, setTimeAll] = useState(null)
  const [timeAll1, setTimeAll1] = useState(null)



  useEffect(() => {

    let timer = setTimeout(() => {

      setBlock(1)
      divRef.current.style.visibility = "visible"
    }, 2000)









    return () => {
      clearTimeout(timer)
    }

  }
    , [])

  const handelRemoveBlock = (e) => {

    setBlock(0)
    divRef.current.style.visibility = "hidden";





  }
  const handelSubmit = () => {

    setBlock(0)
    divRef.current.style.visibility = "hidden";
  }


  return (
    <div ref={divRef} className='sub' style={{ opacity: `${block}` }}>
      <div className='sub-all'>
        <div className='sub-img'>
          <img src="https://cdn.elly.vn/uploads/2021/06/17120620/tong-hop-10-thuong-hieu-kinh-mat-nu-duoc-ua-chuong-nhat-hien-nay.3.jpg" />
        </div>
        <div className='subscribe'>
          <span onClick={handelRemoveBlock} className='remove-block'>X</span>
          <div className='subscribe-title'>
            <h3>SUBSCRIBE TO OUR NEWSLETTER TO RECIVE 20% OFF</h3>
            <p>Purchase online and get discount</p>
            <Container>
              <Row>
                <Form>
                  <FormGroup>
                    <Label
                      for="exampleEmail"
                      hidden
                    >
                      Email
                    </Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="Email"
                      type="email"
                    />
                  </FormGroup>
                  {' '}
                  <FormGroup>
                    <Label
                      for="examplePassword"
                      hidden
                    >
                      Password
                    </Label>
                    <Input
                      id="examplePassword"
                      name="password"
                      placeholder="Password"
                      type="password"
                    />
                  </FormGroup>
                  {' '}
                  <Button onClick={handelSubmit}>
                    Submit
                  </Button>

                </Form>

              </Row>



            </Container>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Sub