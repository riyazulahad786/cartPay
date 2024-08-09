// import React from 'react'
import { IoLogInOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { BsFillCartCheckFill } from "react-icons/bs";

function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg py-3 shadow ">
  <div className="container">
    <a className="navbar-brand fs-4" href="#">Zara collections</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Products</a>
        </li>
      
      </ul>
      <div className="d-flex justify-content-center align-items-center">
        <button className="btn btn-success me-1"> <IoLogInOutline/> Login</button>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <button className="btn btn-info me-1"> <FaUser/> Register</button>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <button className="btn btn-dark me-1"> <BsFillCartCheckFill/> Cart(0)</button>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar