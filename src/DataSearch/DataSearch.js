import React from 'react'
import './DataSearch.css';
import { useEffect, useState } from 'react';

const DataSearch = (props) => {
    const handelClickSearch = () => {
        
    }
   
  return (
    <div className='data_search' onClick={handelClickSearch}>
        <div className='cart_product_search'>
            <div className='url_cart_search'><img src={props.url} /></div>
            <div>{props.name}</div>
        </div>
    </div>
  )
}

export default DataSearch