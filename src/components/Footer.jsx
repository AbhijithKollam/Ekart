import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div className='d-flex justify-content-center align-items-center mt-5 bg-primary'>
                <div className="footer d-flex justify-content-evenly align-items-center mt-3">
                    <div className="website" style={{ width: "400px" }}>
                        <h5><i class="fa-solid fa-cart-shopping text-warning me-3"></i>  E-Kart</h5>
                        <p style={{ textAlign: "justify" }}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus laborum vel sed. Molestias nam vero accusamus quasi, veniam, accusan</p>

                    </div>
                    <div className="links d-flex flex-column ms-5">
                        <h4>Links</h4>
                        <Link to='/' style={{ textDecoration: "none", color: "black" }}>Home</Link>
                        <Link to='/cart' style={{ textDecoration: "none", color: "black" }}>Cart</Link>
                        <Link to='/wishlist' style={{ textDecoration: "none", color: "black" }}>Wishlist</Link>
                    </div>
                    <div className="guides d-flex flex-column ms-5">
                        <h4>Guides</h4>
                        <Link to='http://react.dev/' target='_blank' style={{ textDecoration: "none", color: "black" }}>React</Link>
                        <Link to='http://react-bootstrap.netlify.app/' target='_blank' style={{ textDecoration: "none", color: "black" }}>React Bootstrap</Link>
                        <Link to='/http://bootswatch.com/' target='_blank' style={{ textDecoration: "none", color: "black" }}>Boots Watch</Link>
                    </div>
                    <div className='contactus d-flex flex-column ms-5'>
                        <h4>Contact Us</h4>
                        <div className="d-flex">
                            <input type="text" className='form-control' placeholder='Enter your Email' />
                            <button className='btn btn-warning ms-3'>Subscibe</button>
                        </div>
                        <div className=' d-flex justify-content-evenly align-item-center mt-3'>

                            <Link><i class="fa-brands fa-facebook fa-2x text-dark"></i></Link>
                            <Link><i class="fa-brands fa-instagram fa-2x text-dark"></i></Link>
                            <Link><i class="fa-brands fa-linkedin-in fa-2x text-dark"></i></Link>
                            <Link><i class="fa-brands fa-twitter fa-2x text-dark"></i></Link>
                        </div>

                    </div>

                </div>

            </div>
            <p className='mt-5 text-center'>Copyright &copy; 2024 E-Kart. Build with React and Redux</p>
        </>

    )
}

export default Footer
