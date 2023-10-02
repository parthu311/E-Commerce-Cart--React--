import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Style.css';
import CardsDeta from './CardsData'
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/actions/action';


const Cards = () => {

  const [data, setData] = useState(CardsDeta)
  console.log(data);
  
  const dispatch = useDispatch();

  const send = (e) =>{
    dispatch(ADD(e))
    

  }

  return (
    <>
    <div className='container mt-3 '>
      <h2 className='text-center'>Add To The Cart Project</h2>
    </div>

    <div className="row d-flex justify-content-center align-item-center ">

    {
      data.map((element , id)=>{
        return(
          <>
          <div className="col-sm-3 mx-2 mt-4" key={id}  >
          <Card className='card_style ' style={{ width: '18rem'  , border:"none"}} key={id} >
            <Card.Img style={{height:"16rem" , }} className='mt-3'  variant="top" src={element.imgdata} />
              <Card.Body >
              <Card.Title>{element.rname}</Card.Title>
              <Card.Text>price: ₹{element.price}</Card.Text>
              <Card.Text> 
                {element.address}
              </Card.Text>
              <div className="button_div d-flex justify-content-center">
              <Button variant="warning" onClick={() => send(element)} className='col-lg-12' >Add To Cart</Button>
              </div>
            </Card.Body>
          </Card>
          </div>
          </>
        )
      })
    }
    </div>  
      
    </>
  )
}

export default Cards