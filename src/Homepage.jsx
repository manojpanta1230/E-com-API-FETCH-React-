import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import Productsdetail from './Productsdetail';


function Homepage() {

    const[data,setData]=useState();
    
    const api=()=>{
        fetch(`https://www.course-api.com/react-store-products`)
        .then((response=>response.json()))
        .then((data)=>{
            setData(data);
         
        })
   
        .catch((error) => {
            console.log(error);
        });
        
    }

  
  
    useEffect(()=>{
        api()
    },[])



   

  
  return (
  
   <div className="container">
    <div className="search-bar">
        <input type="search" name="search" id="search" />
        <button>Search</button>
    </div>
<div className="list-order">
<ul>
        {data?.map((item, index) => (
          <li key={index}><img src={item?.image} alt="" style={{ width: '400px', height: '400px' }}/>
          

<Link to ={ `/productsdetail/${item?.id}`}>{item?.name.toUpperCase()}
</Link>
          Rs {item?.price}</li>
        ))}
      </ul>
     



</div>

   </div>
  )

}
export default Homepage