import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; 
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';
import cart from "./cart.gif";
import './Style.css'
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';



const Header = () => {

  const getdata = useSelector((state ) =>state.cartreducer.carts);
  console.log(getdata);


  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };



  return (
    <>
     <Navbar bg="dark" data-bs-theme="dark" style={{height: "60px"}}>
        <Container>
          <NavLink to='/' className='text-white text-decoration-none bg-dark mx-5 fs-3'>Add To Cart</NavLink>
          <Nav className="me-auto  ">
            <NavLink to="/" className='text-white text-decoration-none mx-2 bg-dark fs-5'>Home</NavLink>
            <NavLink to="/carddetails" className='text-white text-decoration-none  mx-2 bg-dark fs-5'>Check Your Cart</NavLink>
          </Nav>
        <Badge badgeContent={getdata.length} color="primary"
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
        >
            <i className="fa-solid fa-cart-shopping" style={{color: "#fff" , cursor:"pointer",  fontSize: "35px"}}></i>
        </Badge>
        </Container>
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}>

          {
           
            getdata.length ? 
            <div className='card_details' style={{width:"24rem" , padding:10}}>
              <Table>
              <thead>
                <tr>
                  <th>Photos</th>
                  <th>Restaurant Name</th>
                </tr>
              </thead>
              <tbody>
                {
                  getdata.map((e) =>{
                    return(
                      <>
                        <tr>
                          <td>
                            <NavLink to={`/carddetails/${e.id}`}> 
                            <img src={e.imgdata} style={{width:'5rem' , height:'5rem'}} alt="imagge" />
                            </NavLink>
                            
                          </td>
                          <td>
                            <p>{e.rname}</p>
                            <p>Price : ₹{e.price}</p>
                            <p>Quantity : ₹{e.qnty}</p>
                            <p style={{color:'red' , fontSize:20 , cursor:'pointer'}}>
                              <i className='fas fa-trash smalltrash'></i>
                            </p>
                            <p></p>
                          </td>
                          <td className='mt-5' style={{color:'red' , fontSize:20 , cursor:'pointer'}}>
                          <i className='fas fa-trash largetrash' ></i>
                          </td>
                        </tr>
                      </>
                    )
                  })
                }
                <p className='text-center'>Total : ₹200</p>
              </tbody>
              </Table>
            </div>:
            <div className="card_details d-flex justify-content-center align-item-center" style={{width: "24rem" , padding:10 , position:"relative"}}> 

              <i className="fa-solid fa-xmark smallcase"  style={{position:"absolute" ,top:2 , right:20 ,fontSize:23, cursor:"pointer" }} 
              onClick={handleClose}
              ></i>

              <p style={{fontSize:22,}} className='emptycart_img'>Cart is Empty</p>
              <img src={cart} alt='ImgCart' style={{width:"5rem" , padding:9}}/>

              </div>
            
          }


          
      </Menu>
      </Navbar>
    </>
  )
        
}

export default Header