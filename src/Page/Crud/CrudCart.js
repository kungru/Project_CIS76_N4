import React from 'react';
import {Card, CardBody,CardTitle,CardSubtitle, CardText,Button,Row} from 'reactstrap';
import './crud.css'

const CrudCart = (props) => {
    const handelRemove =() => {
        props.onGlasses(props.id)
    }
  
    const handelEdit = () =>{
      props.onEdit(props.id)
    }
    
    return (
     
          <div className='card_div'>
          <Card >
            <div className='images'>
                <img
                width='20rem'
                  alt="Sample"
                  
                  src={props.url} 
                  // src = "https://neoocular.qodeinteractive.com/wp-content/uploads/2021/07/Shop-Single-01-img-01-600x431.jpg"
                />

            </div>
           
            <CardBody>
              <CardTitle tag="h5">
                {props.name}
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                {props.style} / {props.shape}
              </CardSubtitle>
              <CardText>
                ${props.price}
              </CardText>
            </CardBody>
      </Card>
        <button onClick={handelRemove} className='btn-style btn_remove'>
        
            Delete
        </button>
          
        <button onClick={handelEdit} className='btn-style btn_edit'>
        
            Edit
        </button>

        
        
  </div>
      
  
    )
  }
  
  export default CrudCart