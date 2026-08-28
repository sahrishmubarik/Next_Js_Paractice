"use client";
import Link from 'next/link';
import { useState } from 'react';
// export const metadata={
//     title : {
//       default: "Product Page",
//       template: "%s | My App"
//     },
//     "description":"View our available products"
// }
export default function ProductsPage(){
    const [input , setInput]=useState(" ");

    return(
        <main>
            
            <h1 >Product Page</h1>
            <label>Name</label>
<input type="text" value={input} onChange={(e)=> setInput(e.target.value)} />
            <Link href="/products/1"><h2>Product 1</h2></Link>
            <Link href="/products/2"><h2>Product 2</h2></Link>
            <Link href="/products/3"><h2>Product 3</h2></Link>
        </main>
    )
};