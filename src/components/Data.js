import {
  useGetAllProductsQuery,
  useGetProductQuery,
} from "../features/apiSlice";
export const Data = () => {
  const {
    data: allProductsData,
    error,
    isError,
    isLoading,
  } = useGetAllProductsQuery();
  const { data: singleProductData } = useGetProductQuery("iphone");

  console.log(allProductsData);
  console.log(singleProductData);

  if (isLoading) return <h1> Loading...</h1>;
  return <div> Data: 
    {allProductsData.products.map((data)=>(
      <>
      <h1>Title: {data.title}</h1>
      <h2>Description: {data.description}</h2>
      <h5>Category: {data.category}</h5>
      </>
    ))}
  </div>;
};
