import React from 'react'
import './Navbar.css';
import Cart from '../Cart/Cart';

export default function Navbar() {
    return (
        
        <header className="p-3 bg-dark text-white">
        <div className="container-fluid ">
          <div className="d-flex flex-wrap align-items-center center  ">
            <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
              {/* <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">LOGO</svg> */}
              <h4 className="mr3">LOGO & NAME </h4>
            </a>
            <form className="col-6 col-lg-auto mb-3 mb-lg-0 me-lg-3 ">
              <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search" />
            </form>
    
       
    
 
           <div className="text-end">
              <button type="button" className="btn btn-outline-light me-2">Login</button>
              <button type="button" className="btn btn-warning">Sign-up</button>
            </div>
            <div className="float-right">
            <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
                <Cart/>
            </div>
          
           
            
          </div>
        </div>
      </header>
       
    )
}
