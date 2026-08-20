"use client";
import { use } from "react";
import Link from 'next/link';
// export const metadata={
//     title :{
//         default :"Blog Page",
//         template : "%s | My Blog"
//     },
//     description: "This is the blog page of my app",
// }
/* apply params and query params in which */

// Server Component by default.
// We use async/await because params and searchParams are Promises.
// Server Components can be async and resolve data before rendering the UI.
// export default async function Blog({
//    params,searchParams
// }:{ 
//     params :Promise<{blogId:string} >;
//     searchParams : Promise<{lang? : "en" | "fr" | "ar"} >;
// }){
//     const {blogId}=await params;
//     const {lang= "en"}= await searchParams;
//     return(
//         <>
          
//           <div className='flex flex-col '>
//              <h1>Blog Page</h1>
//              <h2>Read a blog {blogId}</h2>
//              <h3>Read in language {lang}</h3>
//              {/* <Link href="/blog/breaking-news-123?len=en">Read Blog in English</Link>
//             <Link href="/blog/breaking-news-123?len=fr">Read Blog in French </Link>  
//             <Link href="/blog/breaking-news-123?len=ar">Read Blog in Arabic</Link> */}
//              <Link href={`/blog/breaking-news-${blogId}?lang="en"`}>Read Blog in English</Link>
//             <Link href={`/blog/breaking-news-${blogId}?len=fr`}>Read Blog in French </Link>  
//             <Link href={`/blog/breaking-news-${blogId}?len=ar`}>Read Blog in Arabic</Link>
//           </div>
         
//            </>

        
    
//     )
// }


export default function Blog({
    params,
    searchParams
}: {
    params: Promise<{ blogId: string }>;
    searchParams: Promise<{ lang?: "en" | "fr" | "ar" }>;
}) {

    const { blogId } = use(params);
    const { lang = "en" } = use(searchParams);

    return (
        <>
        <div className='flex flex-col '>
            <h1>Blog Page</h1>
            <h2>Read a blog {blogId}</h2>
            <h3>Read in language {lang}</h3>

          <h4>  <Link href={`/blog/breaking-news-${blogId}?lang="en"`}>Read Blog in English</Link></h4>
         <h4><Link href={`/blog/breaking-news-${blogId}?lang=fr`}>Read Blog in French </Link>  </h4> 
           <h4> <Link href={`/blog/breaking-news-${blogId}?lang=ar`}>Read Blog in Arabic</Link></h4> 
        </div>
        </>
    );
}