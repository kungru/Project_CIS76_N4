import React from 'react'

const Pagination = ({ cartPage, totalPage, paginate }) => {

    const pageNumbers = [];
    for (let i = 1; i < Math.ceil(totalPage / cartPage); i++) {
        pageNumbers.push(i)
    }


    return (
        <nav>
            <ul className='Content_pagination'>
                {pageNumbers.map((item, i) => (
                    <li key={item}>
                        <button href='!#' onClick={() => paginate(item)} >{item}</button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination