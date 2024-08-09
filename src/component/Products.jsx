import { useState, useEffect } from "react";
import axios from "axios";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
function Products() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [filter, setFilter] = useState("");
  useEffect(() => {
    const getProducts = async () => {
      await axios
        .get("https://fakestoreapi.com/products")
        .then((res) => {
          console.log(res);
          setData(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    };
    getProducts();
  }, []);
  const Loading = () => {
    return (
         <>
          <div className="col-lg-3">
               <Skeleton height={350}/>
          </div>
          <div className="col-lg-3">
               <Skeleton height={350}/>
          </div>
          <div className="col-lg-3">
               <Skeleton height={350}/>
          </div>
          <div className="col-lg-3">
               <Skeleton height={350}/>
          </div>
         </>
    )
  };
  const ShowProducts = () => {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center mt-3 gap-2">
              <button className="btn btn-outline-dark">All</button>
              <button className="btn btn-outline-dark">Mens Wear</button>
              <button className="btn btn-outline-dark">Women Wear</button>
              <button className="btn btn-outline-dark">Jewellerys</button>
              <button className="btn btn-outline-dark">Electronic Gadgets</button>
            </div>
          </div>
          <div className="row">
            {data.map((item,i)=>(
              <>
              <div className="col-lg-3 text-center">
              <div className="card  shadow p-3" key={i}>
                <img src={item.image} className="card-img-top products_image" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{item.title.substring(0,12)}</h5>
                  {/* <p className="card-text">
                {item.description.slice(0,70)}...
                  </p> */}
                  <div className="d-flex justify-content-between">
                    <p  className=" lead">{item.rating.rate}</p>
                    <p className="fw-bold lead">$ {item.price}</p>
                  </div>
                  <a href="#" className="btn btn-success">
                Add to cart
                  </a>
                </div>
                </div>
              </div>
              </>
            ))}
              
          
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-12 d-flex justify-content-center ">
          <h3 className="display-5 fw-bolder">Latest Products</h3>
        </div>
        <hr className="m-0 w-60 mx-auto" />
        <div></div>
      </div>
      <div className="row justify-content-center">
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </div>
  );
}

export default Products;
