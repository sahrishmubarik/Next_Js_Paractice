export default async function ProductDetails(
    {params,}
    :{params:Promise<{params:{productId:string}}>;
})
{
const { productId } = (await params);
 return(
    <h1>Product Details : {productId}</h1>
  
 )
}