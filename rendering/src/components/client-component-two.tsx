"use client";
import { useState } from "react";
export default function ClientComponentTwo(){
     const [name , setName]=useState("client component two");
    return(
       <>
        <h1 style={{color:"white"}}>Client component two</h1>
       </>
    )
}