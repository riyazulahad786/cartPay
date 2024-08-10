// import React from 'react'

import Home from "./component/Home"
import Navbar from "./component/Navbar"
import Products from "./component/Products"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
function App() {
  return (
    <div>
      <Navbar/>
      <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<Products/>}/>
          </Routes>
      </Router>
      {/* <Home/> */}
      {/* <Products/> */}
    </div>
  )
}

export default App