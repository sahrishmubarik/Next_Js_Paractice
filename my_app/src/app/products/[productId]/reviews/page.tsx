export const metadata={
    title :{
        default:"Product Reviews",
        template: "%s | My App"
    },
    description:"View reviews of our products"
    }

export default async function Reviews(
    {params,}
    :{params:Promise<{params:{productId:string}}>;
})
{
const { productId} = (await params)
 return <h1>Product Reviews of product: {productId}</h1>
  
 
}