import React from 'react';
import { useState } from 'react';

const Pagination = ({ cartPage, totalPage, paginate, crPage }) => {
    const [color, setColor] = useState('')

    const pageNumbers = [];
    for (let i = 1; i < Math.ceil(totalPage / cartPage); i++) {
        pageNumbers.push(i)

    }




    return (
        <nav>
            <ul className='Content_pagination'>
                {pageNumbers.map((item, i) => (
                    <li key={i}>
                        <button className={item === crPage ? 'active' : ''} onClick={(e) => (paginate(item))} >{item}</button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination