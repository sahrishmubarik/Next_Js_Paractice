"use client";
import { useState } from "react";
import  ClientComponentTwo  from "@/components/client-component-two";
export default  function ClientComponentOne(){
     const [name , setName]=useState("client component one");
    return(
       <>
        <h1 style={{color:"white"}}>Client component one</h1>
           <ClientComponentTwo/>
       </>
    )
}