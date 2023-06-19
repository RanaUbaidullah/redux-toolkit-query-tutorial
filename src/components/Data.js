import {useGetAllProductsQuery,useGetProductQuery,} from "../features/apiSlice";
import React,{useState} from "react";
import './Data.css'
export const Data = () => {
  const[search, SetSearch] = useState("")
  function searchp(e){
    SetSearch(e.target.value);
  }
  const {isLoading,} = useGetAllProductsQuery();
  const { data: singleProductData } = useGetProductQuery(search);
  if (isLoading) return <h1> Loading...</h1>;
  return <div>  
     <input onChange={searchp} value={search} type="text" placeholder="Search" /><br/>
    <h1>Data: </h1>
    {singleProductData?.products.map((data)=>(
      <div className="card" key={data?.id}>
      <img src={data.images[0]} alt="Denim Jeans" style={{width:"100%"}}></img>
      <h1>{data?.title}</h1>
      <p className="price">${data.price}</p>
      <p>{data.description}</p>
      <h5>Category: {data?.category}</h5>
      <p><button>Add to Cart</button></p>
      </div> 
    ))}
  </div>;
};
