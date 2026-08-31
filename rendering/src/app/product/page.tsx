import { cookies } from "next/headers";
import Link from "next/link";
export default async function productPage(){
     
    const now = new Date();
    const cookiesStore= await cookies();
    const theme =cookiesStore.get("theme");
    console.log("theme");
    console.log("Server component:");
    return(
        <>
        <div className="text-center py-7">
            <h1 className="text-3xl font-bold">Products</h1>
        <p>Get product details to click on the product</p>
        <p>date: {now.toLocaleDateString()}</p>
        <p>time: {now.toLocaleTimeString()},</p>
         <p>Get Feature  products</p>
      <p> <Link href="/product/1" >Product 1</Link></p>
        <p><Link href="/product/2">Product 2</Link></p>
         <p><Link href="/product/3">Product 3</Link></p>
        </div>
        </>
    )
}