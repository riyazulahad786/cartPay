// import React from 'react'

import Products from "./Products";

function Home() {
  return (
    <div>
      <div className="card home_section text-bg-dark border-0">
        <img src="/busy-shopping-mall.jpg" className="card-img img-fluid" alt="..." />
        <div className="container card-img-overlay">
                    <div className="row">
                        <div className="col-lg-6">
                        {/* <h5 className="card_title">Card title</h5>
                    <p className="card_text">
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                    </p>
                    <p className="card_text">
                        <button className="btn btn-success">Last updated 3 mins ago</button>
                    </p> */}
                        </div>
                        <div className="col-lg-6"></div>
                    </div>
        </div>
      </div>
      <Products/>
    </div>
  );
}

export default Home;
