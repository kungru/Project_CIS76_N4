import React from 'react'
import './Sub.css'
import { Form, FormGroup, Label, Input, Button, Container, Row } from 'reactstrap'
import { useState, useRef, useEffect,useContext } from 'react'
import { ThemeContext } from '../../App'


const Sub = () => {
  const theme = useContext(ThemeContext)

  const [block, setBlock] = useState('block')
  const divRef = useRef()
  const [firtName, setFirtName] = useState('')
  const [email, setEmail] = useState('')
  const [user, setUser] = useState([])




  useEffect(() => {

    let timer = setTimeout(() => {

      setBlock('block')


    }, 2000)

    if(theme !== ''){
        clearTimeout(timer)
    }









   

  }
    , [])
    useEffect(() => {
      fetch('https://633e973783f50e9ba3b3be2f.mockapi.io/User')
          .then((response) => {
              return response.json()
          }).then((data) => {

            setUser(data)

          })
  }, [])

  const handelRemoveBlock = (e) => {

    setBlock('none')
    





  }
  const handelSubmit = () => {
    for(let i = 0; i < user.length;i++){
          if(firtName === user[i].Email){
              theme.setDiscountSub('HTDZ')
          }
    }

    

    setBlock('none')

  }


  return (
    <div  className='sub' style={{ display: `${block}` }}>
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
                      Firt Name *
                    </Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      value={firtName}
                      onChange={(e) => setFirtName(e.target.value)}
                      placeholder="Firt Name *"
                      type="email"
                    />
                  </FormGroup>
                  {' '}
                  <FormGroup>
                    <Label
                     for="exampleEmail"
                      hidden
                    >
                      Email
                    </Label>
                    <Input
                    value={email}
                     id="exampleEmail"
                     onChange={(e) => setEmail(e.target.value)}

                     name="email"
                     placeholder="Email *"
                      type="email"
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