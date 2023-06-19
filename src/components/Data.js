import {
  useGetAllProductsQuery,
  useGetProductQuery,
} from "../features/apiSlice";
import React,{useState} from "react";

export const Data = () => {
  const[search, SetSearch] = useState("")
  function searchp(e){
    SetSearch(e.target.value);
  }
  const {
    data: allProductsData,
    error,
    isError, 
    isLoading,
  } = useGetAllProductsQuery();
  const { data: singleProductData } = useGetProductQuery(search);
  console.log(allProductsData);
  console.log(singleProductData);
  if (isLoading) return <h1> Loading...</h1>;
  return <div>
     <input onChange={searchp} value={search} type="text" />

    <br/>
    Data: 
    {singleProductData?.products.map((data)=>(
      <div className="card" key={data?.id}>
          <img src={data.images[0]} alt="Denim Jeans" style={{width:"100%"}}></img>
      <h1>{data?.title}</h1>
      <p className="price">$19.99</p>
      <p>Some text about the jeans..</p>
      <p><button>Add to Cart</button></p>
      {/* <h5>Category: {data?.category}</h5> */}
      </div> 
    ))}
  </div>;
};
