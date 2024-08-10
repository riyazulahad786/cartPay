import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
// import {useDispatch } from 'react-redux';
// import { addCart } from '../redux/action';
// import { delCart } from '../redux/action';
function Product() {
    const {id} = useParams();
    const [products, setProducts] = useState([]);
    const [loading,setLoading] = useState(true);
    // const dispatch = useDispatch();

    // const addProducts = (productItem) =>{
    //    dispatch(addCart(productItem))
    // }
    useEffect(()=>{
        const getProducts = async ()=> {
           await axios.get(`https://fakestoreapi.com/products/${id}`).then((res)=>{
            console.log(res.data)
            setProducts(res.data)
            setLoading(false);
           }).catch((err)=>{
            console.log(err)
           })
        }
        getProducts();
    },[]);

    const Loading = () => {
        return (
            <>
              <div className='col-lg-6'>
                <Skeleton height={400}/>
              </div>
              <div className='col-lg-6 py-4'>
                <Skeleton height={70}/>
                <Skeleton height={100}/>
                <Skeleton height={70}/>
                <Skeleton height={70}/>

              </div>
            </>
        )
    }
    const ProductView = () => {
        return (
            <>
              
             <div className='col-lg-6 py-5'>
                <div className='card shadow'>
                     <div className='card-body text-center'>
                     <img src={products.image} className='img-fluid product_view_image'/>
                     </div>
                </div>
             </div>
             <div className='col-lg-6 py-5'>
                 <div className=' text-center'>
                 <h1 className='fw-bold'> Variants {products.category}</h1>

                     <h1 className='display-6'>{products.title}</h1>
                       <hr className='w-50 mx-auto'/>
                     <p>{products.description}</p>
                 </div>
                 <div className='d-flex justify-content-between'>
                    <p className='fw-bolder'>Rating : {products.rating.rate}</p>
                    <p className='fw-bolder lead fs-1'>$ {products.price}</p>
                 </div>
                 <div className=''>
                    <button className='btn btn-outline-dark mx-2'>Add to Cart</button>
                    <button className='btn btn-outline-dark mx-2'>Go to Cart</button>
                 </div>
             </div>
            </>
        )
    }
  return (
    <div className='container'>
        <div className='row'>
        {
            loading ? <Loading/> : <ProductView/>
        }
           {/* {
            products.map((item,i)=>(
                <>
                    <div className='col-lg-3'>
                        <div className='card' key={i}>
                            <div className='card-body'>
                               <img src={item.image} className='img-fluid'/>
                               <div>
                                  <h6>{item.title}</h6>
                               </div>
                            </div>
                        </div>
                    </div>
                </>
            ))
           } */}
        </div>
    </div>
  )
}

export default Product