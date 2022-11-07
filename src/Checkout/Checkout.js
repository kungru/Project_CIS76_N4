import React from 'react';
import { Table, Container, Row, Form, FormGroup, Label, Col, Input, Spinner } from 'reactstrap';
import { useState, useRef, useEffect, useContext } from 'react'
import { ThemeContext } from '../App';

import './Checkout.css'

const Checkout = () => {
    const theme = useContext(ThemeContext)
    const [height, setHeight] = useState(16)
    const [transition, setTransition] = useState(-267)
    const [height1, setHeight1] = useState(false)

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')


    const [validationCart, setValidationCart] = useState({})
    const [validationCart1, setValidationCart1] = useState({})

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

    const handelOnBLock = (e) => {


        setTransition(54)
        setHeight1(!height1)




    }
    const handelRemoveBLock = () => {
        setTransition(-267)
        setHeight1(!height1)

    }
    const validationAll = () => {
        let hoder = {}
        if (!name) {
            hoder.name = "Please your enter Name"
        }
        if (!phone) {
            hoder.phone = "Please your enter Phone"
        }
        if (!address) {
            hoder.address = "Please your enter address"
        }
        if (!city) {
            hoder.city = "Please your enter City"
        }
        setValidationCart(hoder)
        if (Object.keys(hoder).length > 0) return false
        return true


    }
    const [popupCart, setPopupCard] = useState('hidden')
    const [load, setLoad] = useState(true)
    const handelPlaceOder = () => {
        let hoder1 = {}
        let phoneValid = /^\d{3}[\s]?\d{3}[\s]?\d{4}$/


        if (!isNaN(name)) {
            hoder1.name = "Name is not correct"
        }
        else if (isNaN(phone) && phoneValid.test(phone)) {
            hoder1.phone = "Wrong phone Number"
        }

        else if (address.length < 4) {
            hoder1.address = "The home address is incorrect"
        }
        else if (!isNaN(city)) {
            hoder1.city = "This is not the /'City"
        } else {




            setPopupCard('visible')



        }









        setValidationCart1(hoder1)


        const valid = validationAll()
        if (!valid) return
    }

    let total1 = dataCard.reduce((items, item) => items + item.quantity * item.price, 0)
    const [discount, setDiscount] = useState('')
    const [discountProduct, setDiscountProduct] = useState()
    const [block, setBlock] = useState(false)
    const tdRef = useRef()
    const handelApplyDiscount = () => {
        if (discount === 'HTDZ') {
            setDiscountProduct(total1 - 100)
            tdRef.current.style.textDecoration = 'line-through'
            tdRef.current.style.fontSize = '14px'
            tdRef.current.style.color = '#ccccb3'
            setBlock(true)

        }
    }
    const handelRemovePopupCart = () => {
        setPopupCard('hidden')
    }

    return (
        <div>
            <Container>
                <Row className='body__popup' style={{ visibility: `${popupCart}` }}>
                    <div className='popup_success_cart'>
                        <div><i class="fa-solid fa-check"></i></div><h4>Order Success</h4>
                        <button onClick={handelRemovePopupCart}>OK</button>


                    </div>
                </Row>
                <Row>
                    <div className='your-code'>
                        Have a discount code?
                        <p onClick={handelOnBLock}>Click here to enter your code</p>
                    </div>
                    <div className='transition_code' >
                        <div className='block-code'>
                            If you have a coupon code, please apply it below.
                            <span onClick={handelRemoveBLock} style={{ float: 'right', cursor: 'pointer' }}>X</span>
                            <div>
                                <input onChange={(e) => setDiscount(e.target.value)} value={discount} placeholder='Discount code' />

                            </div>
                            <button onClick={handelApplyDiscount}>APPLY DISCOUNT</button>
                        </div>
                    </div>
                </Row>
                <Row className='row-code' style={{ transform: `translateY(${transition}px)` }}>
                    <div className='billing-details-code'>
                        <h1>BILLING DETAILS</h1>
                        <div className='input-detail-code'>
                            <div className='input-billing'>
                                <label>Your Name</label>
                                <input
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                    type='text'
                                    placeholder='Your Name *'
                                />
                                <span className='red-validation-span'>{validationCart.name}  {validationCart1.name}</span>


                            </div>
                            <div className='input-billing'>
                                <label>Phone</label>
                                <input
                                    onChange={(e) => setPhone(e.target.value)}
                                    value={phone}
                                    type='text'
                                    placeholder='Phone *'
                                />
                                <span className='red-validation-span'>{validationCart.phone} {validationCart1.phone}</span>

                            </div>
                            <div className='input-billing'>
                                <label>Address</label>
                                <input
                                    onChange={(e) => setAddress(e.target.value)}
                                    value={address}
                                    type='text'
                                    placeholder='Address *' />
                                <span className='red-validation-span'>{validationCart.address} {validationCart1.address}</span>

                            </div>
                            <div className='input-billing'>
                                <label>City</label>
                                <input
                                    onChange={(e) => setCity(e.target.value)}
                                    value={city}
                                    type='text'
                                    placeholder='City *' />
                                <span className='red-validation-span'>{validationCart.city} {validationCart1.city}</span>

                            </div>
                            <div className='list-oder-product'>
                                <Table>
                                    <tr>
                                        <th>PRODUCT</th>
                                        <th>SUBTOTAL</th>
                                        <th>QUANTITY</th>
                                    </tr>
                                    {dataCard.map(item => (
                                        <tr>
                                            <td>{item.name}</td>
                                            <td>${item.price}</td>
                                            <td>x{item.quantity}</td>
                                        </tr>

                                    ))}
                                    <tr>
                                        <th>TOTAL</th>
                                        <td ref={tdRef}>${total1}.00</td>{block && <span style={{ position: 'relative', left: '-12vh' }}>${discountProduct}.00</span>}
                                    </tr>
                                </Table>
                            </div>
                            {load ? <button onClick={handelPlaceOder}>PLACE ODER</button> : <Spinner>...Loadding  </Spinner>}
                        </div>

                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Checkout