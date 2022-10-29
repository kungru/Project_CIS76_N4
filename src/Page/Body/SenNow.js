import React from 'react'
import './SenNow.css'
import { useState } from 'react'
import ProductComment from './ProductComment'

const SenNow = () => {
    const [send, setSend] = useState('')
    const [sendThank, setSendThank] = useState(false)

    const handelSendNow = (e) => {
        setSend('')
        if (send) {
            setTimeout(() => {
                setSendThank(true)
            }, 2000)
        } else {alert('Please type in question')}

    }
    return (
        <>
            <div className='sendnow_all'>
                <div className='bgr_img_sendnow'>
                    <div className='block_sendnow_pa'>
                        <div className='block_sendnow_1'>
                            <div className='title_sendnow_1'>
                                <h1>BOOK APPOINTMENT    </h1>
                                <p>Get professional assistance the simplest way</p>
                            </div>
                            <div className='type_sendnow'>
                                <label>
                                    <input
                                        placeholder='Type question'
                                        value={send}
                                        onChange={(e) =>
                                            setSend(e.target.value)}
                                        type='text' />
                                    <button onClick={handelSendNow}>SEND NOW</button>
                                </label>
                            </div>
                            {sendThank ? <div className='thank_sendnow'>
                                <span>Thank you for your message. It has been sent.</span>
                            </div> : ''}
                        </div>
                    </div>
                </div>
            </div>
            <ProductComment />
        </>
    )
}

export default SenNow