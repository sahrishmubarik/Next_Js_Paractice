import  {serverSideFunction } from "@/utils/serverUtils";
import {Imageslider } from "@/components/Imageslider";
export default function ServerRoutePage(){
    const serverResult = serverSideFunction();
    return(
 <>
        <h1>Server route page {serverResult}</h1>
        <Imageslider />
       </>
    )
}