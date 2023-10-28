import React from 'react'
import { Link } from 'react-router-dom/dist'

const Haeder = () => {
  return (
   <>
   <div className="py-1 bg-black">
   <div className="container">
     <div className="row no-gutters d-flex align-items-start align-items-center px-md-0">
       <div className="col-lg-12 d-block">
         <div className="row d-flex">
           <div className="col-md pr-4 d-flex topper align-items-center">
             <div className="icon mr-2 d-flex justify-content-center align-items-center">
               <span className="icon-phone2" />
             </div>
             <span className="text">+ 1235 2355 98</span>
           </div>
           <div className="col-md pr-4 d-flex topper align-items-center">
             <div className="icon mr-2 d-flex justify-content-center align-items-center">
               <span className="icon-paper-plane" />
             </div>
             <span className="text">youremail@email.com</span>
           </div>
           <div className="col-md-5 pr-4 d-flex topper align-items-center text-lg-right">
             <span className="text">
               3-5 Business days delivery &amp; Free Returns
             </span>
           </div>
         </div>
       </div>
     </div>
   </div>
 </div>
 <nav
   className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
   id="ftco-navbar"
 >
   <div className="container">
     <Link  className="navbar-brand" to="/">
       ZaraLuxury
     </Link >
     <button
       className="navbar-toggler"
       type="button"
       data-toggle="collapse"
       data-target="#ftco-nav"
       aria-controls="ftco-nav"
       aria-expanded="false"
       aria-label="Toggle navigation"
     >
       <span className="oi oi-menu" /> Menu
     </button>
     <div className="collapse navbar-collapse" id="ftco-nav">
       <ul className="navbar-nav ml-auto">
         <li className="nav-item active">
           <Link  to="/" className="nav-link">
             Home
           </Link >
         </li>
        
         <li className="nav-item">
           <Link  to="/about" className="nav-link">
             About
           </Link >
         </li>
         <li className="nav-item">
           <Link  to="/products" className="nav-link">
             Shop
           </Link >
         </li>
         <li className="nav-item">
           <Link  to="/contact" className="nav-link">
             Contact
           </Link >
         </li>
         <li className="nav-item">
         <Link  to="/order" className="nav-link">
           Orders
         </Link >
       </li>
         <li className="nav-item cta cta-colored">
           <Link  to="/cart" className="nav-link">
             <span className="icon-shopping_cart" />
             [0]
           </Link >
         </li>
         
       </ul>
     </div>
   </div>
 </nav>
   </>
  )
}

export default Haeder