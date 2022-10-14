    import React from 'react'
    import {
        Button,
        Col,
        Form,
        FormGroup,
        Input,
        Label,
        Row,
        Table,
    } from 'reactstrap';
    const card_crud = (props) => {
    return (
        <div className='card_crud'>
            <tr>
                <th scope='row'></th>
                <td>{props.name}</td>
                <td>{props.url}</td>
                <td>{props.style}</td>
                <td>{props.shape}</td>
                <td>{props.price}</td>
                <td>
                    <Button color='primary' className='mg-btn'>Edit</Button>
                    <Button color='danger' className='mg-btn'>Delete</Button>
                </td>
            </tr>
        </div>
    )
    }

    export default card_crud