import { React, useEffect, useState, useRef, useContext } from 'react';
import CrudCart from "./CrudCart"
import { Container, Row, Col, Navlink, Button, Spinner } from 'reactstrap';
import Admin from '../../Admin/Admin';
import { ThemeContext } from '../../App';
import './crud.css';


const Crud = () => {
  const theme = useContext(ThemeContext)

  const [crud, setCrud] = useState([])



  const [isAdd, setIsAdd] = useState(true)

  const [block, setBlock] = useState(false)
  const [loading, setLoading] = useState(false)



  const { block2, setBlock2 } = useState(false)


  const [name, setName] = useState('');
  const [style, setStyle] = useState('');
  const [shape, setShape] = useState('');
  const [price, setPrice] = useState('');
  const [url, setUrl] = useState('');


  const buttonRef = useRef()

  useEffect(
    () => {
      fetch('https://634015dae44b83bc73c898c3.mockapi.io/api/v1/card/')
        .then((res) => {
          return (res.json())
        }).then((data) => {

          setCrud(data);
          setLoading(true)



        })


    }, [isAdd, loading]

  )

  // Add product



  const handelAddnew = () => {

    const newList = {
      name,
      style,
      shape,
      price,
      url,

    }

    fetch('https://634015dae44b83bc73c898c3.mockapi.io/api/v1/card/', {
      method: 'POST',
      crossDomain: true,
      xhrFields: {
        withCredentials: true
      },
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newList)
    })

      .then((res) => {
        return (res.json())
      }).then((data) => {
        setIsAdd(!isAdd)
        console.log(data)
        setLoading(!loading)
      })
    setName('')
    setStyle('')
    setShape('')
    setPrice('')
    setUrl('')
    // const fakeList = [...crud]
    // fakeList.push(newList)
    // setCrud(fakeList)

  }
  // remove 

  const handelRemove = (id) => {
    setLoading(!loading)
    fetch('https://634015dae44b83bc73c898c3.mockapi.io/api/v1/card/' + id, {
      method: 'DELETE',
    })
      .then(res => res.text()) // or res.json()
      .then(res => {
        setIsAdd(!isAdd)
      }
      )
    buttonRef.current.style.visibility = "visible"
  }
  const [expenseUpdate, setExpenseUpdate] = useState(null);
  // edit 
  const handelEdit = (id) => {
    setBlock(true)
    const index = crud.find((e) => e.id === id)
    setName(index.name)
    setStyle(index.style)
    setShape(index.shape)
    setPrice(index.price)
    setUrl(index.url)
    setExpenseUpdate(index.id)
    console.log(expenseUpdate)

  }

  const handelUpdateNew = () => {

    setIsAdd(!isAdd)

    fetch(`https://634015dae44b83bc73c898c3.mockapi.io/api/v1/card/` + expenseUpdate, {
      method: 'PUT',
      crossDomain: true,
      xhrFields: {
        withCredentials: true
      },
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name, style, shape, price, url
      })
    })
      .then(res => {
        res.json().then((res) => {
          setLoading(!loading)
        })
      })
      .catch(err => {
        console.error(err)
      })

    setName('')
    setStyle('')
    setShape('')
    setPrice('')
    setUrl('')
    setBlock(false)
  }

  return (
    <div>

      <Container>
        <div className='crud-all'>
          <h1>add product</h1>
          <ul className='crud-all-flex'>

            <li>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type='text'
                placeholder="Name *"

              />
            </li>
            <li>

              <input
                value={style}
                onChange={(e) => setStyle(e.target.value)}
                type='text'
                placeholder="Style *"
              />
            </li>
            <li>

              <input
                value={shape}
                onChange={(e) => setShape(e.target.value)}
                type='text'
                placeholder="Shape *"
              />
            </li>
            <li>

              <input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                type='number'
                placeholder="Price *"
              />
            </li>
            <li className='check_url'>
              <input
                className='url'
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                type='text'
                placeholder="Url *"
              />
            </li>
          </ul>

          <button onClick={handelAddnew} className='btn-add'>Add</button>
          {block && <button onClick={handelUpdateNew} className='btn-update'>Update</button>}

        </div>
        <div className='flex'>
          {
            crud.map((item, index) => (

              <CrudCart key={item.id}
                name={item.name}
                style={item.style}
                shape={item.shape}
                url={item.url}
                price={item.price}
                id={item.id}
                onGlasses={handelRemove}
                onEdit={handelEdit}
              />
            ))
          }
          {loading ? '' : (<Spinner style={{ position: 'fixed', left: '55rem', top: '18rem' }}>  Loading...</Spinner>)}
          {/* <div className='reminder'>
                    <h5>Are you sure you want to delete?</h5>
                   <button  onClick={handelRemoveOk} className='btn-ok'>OK</button>   
                  
                </div>   */}

        </div>
      </Container>
    </div>
  )
}




export default Crud