import fs from "fs";
import { serverComponentTwo } from "@/components/server-component-two";
export function serverComponentOne(){
     fs.readFileSync("src/components/server-component-one.tsx","utf-8");
    return(
       <>
        <h1 style={{color:"white"}}>Server component one</h1>
           {serverComponentTwo()}
       </>
    )
}