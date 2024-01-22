import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { removeFromWishlist } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';


function Wishlist() {
  const wishListItems = useSelector((state) => state.wishlistReducer)
  console.log("===11111====");
  console.log(wishListItems);

  const dispatch = useDispatch()

  const handleWishlist = (item) =>{
    dispatch(addToCart(item))
    dispatch(removeFromWishlist(item.id))
  }


  return (
    <>
    <button style={{marginTop:"150px"}} className='btn btn-success ms-5'>
      <Link to={'/'} style={{textDecoration:"none",color:"white"}}>
        <i class="fa-solid fa-arrow-left me-2"></i>
        Back to Home
        </Link>
    </button>
      <Row className='ms-5 me-5' style={{marginTop:"0px"}}>
        {
          wishListItems?.length > 0 ?
            wishListItems.map((item) => (
              <Col className='mb-5' sm={12} md={6} lg={4} xl={3}>

                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={item.thumbnail} height="200px" />
                  <Card.Body>
                    <Card.Title>{item.title.slice(0, 20)}</Card.Title>
                    <Card.Text>
                      {item.description.slice(0, 50)}...
                    </Card.Text>
                    <div className='d-flex text-align-center justify-content-between'>

                      <Button variant="outline-success" onClick={()=>dispatch(removeFromWishlist(item.id))}><i class='fa-solid fa-trash'></i></Button>
                      <Button variant="outline-success"onClick={()=>handleWishlist(item)}><i class='fa-solid fa-cart-plus'></i></Button>
                    </div>
                  </Card.Body>
                </Card>

              </Col>
            )) :
            <p>No items in WishList</p>
        }
      </Row>
    </>
  )
}

export default Wishlist