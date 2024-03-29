import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Header() {
    // to access data inside store : useSelector hook is used
    const wishlistArray = useSelector((state) => state.wishlistReducer);
    const cartlist  = useSelector((state) => state.cartReducer);
    console.log("===wishlist array for header---");
    console.log(wishlistArray);
    return (
        <div>

            <Navbar expand="lg" className="bg-primary position-fixed top-0 w-100" style={{zIndex:"1"}}>
                <Container>
                    <Link to={'/'}>
                    <Navbar.Brand href="#home">
                        <img 
                        src="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/shopping_cart.png" 
                        height={'40px'}
                        className='me-3' />
                        E-Kart
                    </Navbar.Brand>
                    </Link>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            
                            <Nav.Link className='btn border rounded me-3'><Link to={'/wishlist'} style={{color:"white", textDecoration:"none"}}>wishlist <Badge bg="secondary">{wishlistArray.length}</Badge></Link></Nav.Link>
                            
                            <Nav.Link className='btn border rounded' style={{width:"100px"}}> <Link to={'/cart'} style={{color:"white", textDecoration:"none"}}> cart <Badge bg="secondary">{cartlist.length}</Badge> </Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}

export default Header