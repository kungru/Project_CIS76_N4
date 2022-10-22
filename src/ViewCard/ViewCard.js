import React from 'react'
import { useState, useRef,useEffect } from 'react';
import { Routes, Route, Link, NavLink,useNavigate } from 'react-router-dom';
import { Table, Container ,Row} from 'reactstrap';
import './ViewCard.css'
const ViewCard = () => {
  const [dataCard, setDataCard] = useState([])
  useEffect(() => {
    fetch('https://633e973783f50e9ba3b3be2f.mockapi.io/addtocard')
          .then((res) => {
            return (res.json())
          }).then((data) => {
           
              setDataCard(data);
             
           
             
          //   setIsLoading(false)
          });
         
  }, [])

  
  const [count, setCount] = useState(0)
  const [sum, setSum] = useState()
  const [total, setTotal] = useState()
  const [isData1, setIsData1]= useState(true)
  
  
  
  const handelSetCouse= (id, url) => {
    // const fakeCard = dataCard.map((item) => (item.url * 2))
    // const fill = dataCard.filter(item => (item.id === id))
    
   console.log(url + url)
    // const fakeCart = newCart[fill].reduce((items,item) => items+item.url,0)

    // const arr = fill.forEach((item, index) => item[index].url)
    
    
    
    // console.log(fakeCart)
    //   fakeNewCard.push(newCart)
      
    //   const totalProduct = fakeNewCard.reduce((items, item) => items + item, 0)
    //   setTotal(JSON.stringify(totalProduct))
    //   console.log(fakeNewCard)
    
    }
    
    const total1 = dataCard.reduce((items, item) => items + Math.floor(item.url) ,0)
    const handelSetCouse1= (id, url) => {

      
      
      
    }
    const handelDeleteCart = (id) => {
      fetch(`https://633e973783f50e9ba3b3be2f.mockapi.io/addtocard/${id}` , {
        method: 'DELETE',
      })
      .then(res => res.text()) // or res.json()
      .then(res => {
        
        // setTotal(total)
        setDataCard(removeCart)
        
      }
     )
     const fakeData = [...dataCard]
     const removeCart = fakeData.filter(item => !(item.id ===id))

    }
    
  return (
    <div className='viewcard'>
    <Container>
    <div className='title_viewcard'><Link to='/'>Home/</Link>Card</div>

      <Table>
              <thead>
            <tr>
              <th>
                PRODUCT
              </th>
              <th>
                PRICE
              </th>
              <th >
              QUANTITY
              </th>
              <th style={{position: 'absolute',
                right: '43rem',}}>
              SUBTOTAL
              </th>
            </tr>
          </thead>
         
          {dataCard .map(item => (
            <Productssss
                id = {item.id}
                name = {item.name}
                price = {item.price}
                url = {item.url}
                quantity={item.quantity}
                onSetCount ={handelSetCouse}
                onSetCount1 ={handelSetCouse1}
                sum = {count}
                total = {total}
                // onChange1 ={handelChange}
                onDelete = {handelDeleteCart}
                
             />
          ))}

      </Table>
      <div className='checkout'>
            <h1>CART TOTALS</h1>
            <Row>
                <Table>
                      <tr>
                          <th className='border_view'>SUBTOTAL</th>
                          <td className='color'>${total1}.00</td>
                      </tr>
                      <tr>
                          <th className='border_view'>TOTAL</th>
                          <td style={{fontSize:'20px',position:'absolute',right:'70rem'}}>${total1}.00</td>
                      </tr>
                      <tr>
                        <button  className='btn1_viewcard'><Link to='/checkoutCart'>PROCEE TO CHECKOUT</Link></button>
                      </tr>
                </Table>

            </Row>
      </div>
    </Container>
    </div>
  )
}


const Productssss = (prop) => {

  const [change, setChange] = useState(1)
  // const [total, setTotal] = useState(0)
  const [total1, setTotal1] = useState(false)
  const inputRef =  useRef()
  const [dataCard, setDataCard] = useState([])
  useEffect(() => {
    fetch('https://633e973783f50e9ba3b3be2f.mockapi.io/addtocard')
          .then((res) => {
            return (res.json())
          }).then((data) => {
           
              setDataCard(data);
             
           
             
          //   setIsLoading(false)
          });
         
  }, [])
  const handelSetCouse = () => {
   
    prop.onSetCount(prop.id,prop.url)
    setChange(change + 1)

   
    
    
    // const total = dataCard.reduce((items, item) => items + item.url, 0)
    // fakeTotal.push(total)
    
    // console.log(fakeTotal)
  }
 
  const handelSetCouse1 = () => {
    prop.onSetCount1(prop.id,prop.url)
    setChange(change - 1)
    
    
   
    

  


    if(change == 1) {
      return setChange(1)
    }
}
  
  const handelDeleteCart = () => {
      prop.onDelete(prop.id)
   
    
  }
      return (
        <tr className='table_card' key={prop.id}>
                <th scope="row" style={{width:'23rem'}}>
                 {prop.name} <img  src={prop.price} />
                </th>
                <td style={{
                      paddingLeft: '11px'
                  }}>
                {prop.url}
                </td>
                <td>
                    <div style={{marginLeft:'2rem'}}>
                        <div className='quantity'>
                            <div onClick={handelSetCouse1} className='sum'>-</div>
                            <input ref={inputRef}  value={prop.quantity} className='sum' type='text' size='4' />
                            <div onClick={handelSetCouse}  className='sum'>+</div>
                        </div>
                    </div>
                </td>
                <td>
                  <div style={{marginLeft:'2rem',position: 'relative',
                  right: '12rem',}}>  ${prop.url} </div>
                </td>
                <td>
                  <button className='btn1' onClick={handelDeleteCart}>X</button>
                </td>
              </tr>
      )
}
export default ViewCard