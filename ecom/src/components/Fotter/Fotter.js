import React from 'react';
import './Fotter.css';
import facebook from './icons/Facebook.png';
import instagram from './icons/instagram.png';
import youtube from './icons/Youtube.png';
import twitter from './icons/twitter.png';

export default function Fotter() {
    return (
     
        <footer className="container-fluid p-md-0 min-vw-100 bottom" >
  
  <div className="container-fluid p-md-0  ps-3 min-vw-100 "  style={{backgroundColor: "#6F4E37"}}>
    <div className="row align-items-start justify-content-around text-center "   style={{backgroundColor: "#926443"}}> 
      <a  href="#" style={{backgroundColor:" #926443",color: "rgb(255, 255, 255)"}}>Back to top</a>  
</div>
</div>
        {/* <div className="container-fluid p-md-0  ps-3 min-vw-100 "  style={{backgroundColor: "#6F4E37"}}>
        <div className="row align-items-start justify-content-around "  style={{backgroundColor: "#6F4E37"}}> 
  
          <div className="col " >
            <p className="pt-3 m-0  bold" >Get to know about us </p>
            <p className="m-1"> <a href="#" >About Us</a></p>
            <p className="m-1"><a href="#" >Careers</a></p>
            <p className="m-1"><a href="#" >Wholesale</a></p>
          </div>
          <div className="col">
            <p className="pt-3 m-0 bold ">Connect with us</p>
            <p className="m-1"> <a href="https://www.facebook.com/facebook" > <img  id="logo" src={facebook} alt="zoom" width="25" height="25" /> Facebook</a></p>
            <p className="m-1"><a href="https://twitter.com/?lang=en" ><img  id="logo" src={twitter} alt="zoom" width="25" height="25" /> Twitter</a></p>
            <p className="m-1"><a href="https://www.instagram.com/" ><img  id="logo" src={instagram} alt="zoom" width="25" height="25" /> Instagram</a></p>
            <p className="m-1"><a href="https://www.youtube.com/" ><img  id="logo" src={youtube} alt="zoom" width="25" height="25" /> Youtube</a></p>
          </div>
          <div className="col " >
            <p className="pt-3 m-0  bold">Help </p>
            <p className="m-1"><a href="#"  >Payments </a></p>
            <p className="m-1"><a href="#" >Shipping</a></p>
            <p className="m-1"><a href="#"  >Cancellation & Return</a></p>
          </div>
          <div className="col">
            <p className="pt-3 m-0 bold ">Make Money with us</p>
            <p className="m-1"> <a href="#"  >Return Policy</a></p>
            <p className="m-1"><a href="#"  >Terms of use</a></p>
            <p className="m-1"><a href="#"  >Security</a></p>
            <p className="m-1"><a href="#"  >Privacy</a></p>
          </div>
        </div>
    </div> */}
  
    <div className="container-fluid p-md-0  ps-3 min-vw-100 "  style={{backgroundColor:" #6F4E37"}}>
      <div className="row align-items-start justify-content-around text-center "  style={{backgroundColor: "#6F4E37"}}> 
       <p className="pt-2" style={{backgroundColor:" #6F4E37", height:"35px", fontWeight:" bold", color:" rgb(255, 255, 255)" }}>© 2017–2021 Company, Inc.</p>  
  </div>

  </div>
  

</footer>
       
    )
}
