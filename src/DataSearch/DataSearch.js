import React from 'react'
import './DataSearch.css';
import { useEffect, useState, useContext } from 'react';
import { ThemeContext } from '../App';
import { Link } from 'react-router-dom';

const DataSearch = (props) => {
    const theme = useContext(ThemeContext)
    const handelClickSearch = () => {
        props.onClickSearch(props.name, props.id)
        theme.setIsSearch(!theme.isSearch)
    }


    return (
        <Link to={`/shop/${props.id}`} style={{ cursor: 'pointer' }} className='data_search' onClick={handelClickSearch}>
            <div className='cart_product_search'>
                <div className='url_cart_search'><img src={props.url} /></div>
                <div>{props.name}</div>
            </div>
        </Link>
    )
}

export default DataSearch