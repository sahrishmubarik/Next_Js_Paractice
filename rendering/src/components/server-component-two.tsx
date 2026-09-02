import fs from "fs";
import ClientComponentOne from "./client-component-one";
export const serverComponentTwo=()=>{
    fs.readFileSync("src/components/server-component-two.tsx","utf-8");
    return(
        <>
        <h1 style={{color:"white"}}>Server component two</h1>
        <h1 style={{color:"white"}}>You see client component in server component two</h1>
        <ClientComponentOne/>
        
        </>

    )
}