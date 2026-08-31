"use client";
import  {useState} from "react";

export default function dashboardPage(){
    const [name , setName]= useState("");
return(
    <>
    <h1>Dashboard</h1>
    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
    <h2>Hello {name}!</h2>
    </>
)
}