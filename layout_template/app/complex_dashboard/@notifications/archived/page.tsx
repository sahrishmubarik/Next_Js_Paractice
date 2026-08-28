"use client"
import { useRouter } from "next/navigation"
import { Card } from "@/app/components/card"
export default function Archievdnotifications(){
    const router =useRouter();
const  handleDefault= ()=>{
    router.push("/complex_dashboard");
    router.refresh();
};
    return(

        <Card><div className="flex flex-col">
            <div className="font-extrabold text-3xl">Archived Notifications</div>
       
       <h1 className="font-semibold">That's archived notifications </h1>
   
         <button
          onClick={handleDefault}
          className="font-semibold text-blue-600 underline"
        >
          Default
        </button>
    
        </div>
        </Card>
    )
}