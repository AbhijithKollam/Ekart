import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { emptyCart, removeFromCart } from '../redux/slices/cartSlice';
import { useState } from 'react';
import { useEffect } from 'react';


function Cart() {

  const [total, setTotal] = useState(0)

  const CartItems = useSelector((state) => state.cartReducer)
  let totalPrice = 0;

  CartItems?.forEach(item=>{
    totalPrice=totalPrice+item.price
  })


  // const getTotal = () => {
  //   for (let i = 0; i < CartItems.length; i++) {
  //     totalPrice = totalPrice + CartItems[i].price;
  //   }
  //   setTotal(totalPrice)
  // }
  // useEffect(() =>{
  //   getTotal();
  // },[CartItems])


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCheckout=() =>{
    alert("Successfully placed the order")
    dispatch(emptyCart())
    navigate('/')
  }

  return (
    <>

      <button style={{ marginTop: "150px" }} className='btn btn-success ms-5'>
        <Link to={'/'} style={{ textDecoration: "none", color: "white" }}>
          <i class="fa-solid fa-arrow-left me-2"></i>
          Back to Home
        </Link>
      </button>

      <div className='row w-100 '>

        <div className='col-lg-6 col-md-6 m-5'>
          <table className='table shadow border'>
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Image</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                CartItems?.length > 0 ?
                  CartItems?.map((item, index) => (

                    <tr>
                      <td>{index + 1}</td>
                      <td>{item.title}</td>
                      <td><img height={'50px'} src={item.thumbnail} alt="" /></td>
                      <td>&#8377;{item.price}</td>
                      <td>
                        <Button onClick={() => dispatch(removeFromCart(item.id))}
                          variant="outline-danger">
                          <i class="fa-solid fa-trash"></i>
                        </Button>
                      </td>
                    </tr>
                  ))
                  :
                  <p class="text-danger">No items in Cart</p>
              }

            </tbody>
          </table>

        </div>
        <div className='col-lg-4 col-md-4 mt-5 f-flex justify-content-center align-items-center'>

          <div className='border shadow p-5'>
            <h3 className='text-primary text-center'>Cart Summary</h3>
            <h5 className='mt-4'>Total number of products : <span className='fw-bolder text-warning ms-2'>{CartItems.length}</span> </h5>
            <h5>Total Price : <span className='fw-bolder text-warning ms-2'>{totalPrice}</span></h5>
            <button className='btn btn-success rounded w-100 mt-3' onClick={handleCheckout}>Checkout</button>

          </div>

        </div>
      </div>




      {/* <Row className='ms-5 me-5' style={{ marginTop: "150px" }}>
        {
          CartItems?.length > 0 ?
            CartItems.map((item) => (

              <Col className='mb-5' sm={12} md={6} lg={4} xl={3}>

                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={item.thumbnail} height="200px" />
                  <Card.Body>
                    <Card.Title>{item.title.slice(0, 20)}</Card.Title>
                    <Card.Text>
                      {item.description.slice(0, 50)}...
                    </Card.Text>
                    <div className='d-flex text-align-center justify-content-between'>

                      <Button variant="outline-success" onClick={()=>dispatch(removeFromCart(item.id))}><i class='fa-solid fa-trash'></i></Button>
                    </div>
                  </Card.Body>
                </Card>

              </Col>

            )) :
            <p>Nothing to display in Cart</p>
        }

      </Row> */}





    </>
  )
}

export default Cart