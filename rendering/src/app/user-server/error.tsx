'use client';

import { useEffect} from 'react';
export default function errorPage({error}:{error:Error}){
   useEffect(()=>{
    console.error(`${error.message}`);
   }, [error]);
    return(
     <div className="flex justify-center items-center h-screen">
          <h1 className="text-2xl font-bold text-red-500">Error: {error.message}</h1>
     </div>
    )
}