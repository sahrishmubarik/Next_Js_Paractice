import { Product } from "@/components/product";
import { Reviews } from "@/components/review";
import { Suspense } from "react";
export default function productReview(){
return(
    <div>
        <h1 className="text-3xl font-bold">Product Reviews</h1>
        <Suspense fallback={<p>Loading Products...</p>}>
        <Product/></Suspense>
         <Suspense fallback={<p>Loading reviews ...</p>}> <Reviews/></Suspense>
        </div>
)

}