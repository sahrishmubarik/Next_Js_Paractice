 import { serverComponentOne } from "@/components/server-component-one";
import ClientComponentOne from "@/components/client-component-one";


export default function interleavingPage(){
    return(
     <><h1 style={{color:"blue"}}>Interleaving page</h1>
        <h1 style={{color:"blue"}}>see server components </h1>
         {serverComponentOne()}
         <h1 style={{color:"blue"}}>see client components </h1>
        <ClientComponentOne/>
     </>
    )
}