import {useState,useEffect} from 'react'
import axios from 'axios';
function Products() {
    const [data, setData] = useState([]);
    const [loading,setLoading] = useState(false);
    const [filter,setFilter] = useState('')
    useEffect(()=>{
      const getProducts = async () => {
        await axios.get('https://fakestoreapi.com/products').then((res)=>{
            console.log(res)
            setData(res.data);
            setLoading(false)
        }).catch((err)=>{
            console.log(err)
            setLoading(false);
        })
      }
      getProducts();
    },[])
    const Loading = () => {
        return <>
                  Loading...........
               </>
    }
    const ShowProducts = () => {
        return (<>
             <div className='d-flex justify-content-center mt-3 gap-2'>
                <button className='btn btn-outline-dark'>All</button>
                <button className='btn btn-outline-dark'>Mens Wear</button>
                <button className='btn btn-outline-dark'>Women Wear</button>
                <button className='btn btn-outline-dark'>Electronic Gadgets</button>
             </div>
              </>)
    }
 
  return (
    <div className='container py-5'>
        <div className='row'>
           <div className='col-lg-12 d-flex justify-content-center '>
               <h3 className='display-5 fw-bolder'>Latest Products</h3>
           </div>
           <hr className='m-0 w-60 mx-auto'/>
           <div>

           </div>
        </div>
        <div className='row justify-content-center'>
             {loading ? <Loading/> : <ShowProducts/>}
        </div>
    </div>
  )
}

export default Products