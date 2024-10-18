import React from 'react'
import Homepage from './Homepage'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './index.css';

function Productsdetail() {
    const[data,setData]=useState('');
 
  const{id}=useParams();
    const api=()=>{
        fetch(`https://www.course-api.com/react-store-single-product?id=${id}`)
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
    },[id])

console.log(data)

   return(
    <>
    <section> Product Details Page</section>


    
<div className="whole">
<>

<div className="image-section">
<img src={data?.images?.[0].url} alt={data?.name}  style={{ width: '800px', height: '800px' }} />
</div>
<div className="full-section">


    <h1>{data?.name?.toUpperCase()}</h1>
    <p style={{color:'red'}}>Price: ${data?.price}</p>
    <p> Category:{data?.category}</p>
    <p>Company Name:{data?.company}</p>
    <p>Description:{data?.description}</p>
   

    </div>
   
   
    </>
    </div>
    </>
      
  );
}

export default Productsdetail