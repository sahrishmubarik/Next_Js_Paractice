
import {notFound} from 'next/navigation';


export default async function Reviews(
    {params,}
    :{params:Promise<{params:{productId:string; reviewId:string}}>;
})
{
const { productId, reviewId } = (await params)
if (reviewId >500) {
    notFound();
}
return <h1>Product Reviews {reviewId} of product: {productId}</h1>
  
 
}