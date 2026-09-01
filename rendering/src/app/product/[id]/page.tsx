// dynamics params
// export const dynamicsParams=true;
 export const dynamicParams=false;
/* Static params */
export async function generateStaticParams(){
    return[
        {id:"1"}, {id:"2"}, {id:"3"}
    ];
}


/* dynamic rendering 
if you see same UI no needs to update  then use generateStaticParams */
export default async function ProductPage({
    params,
}:{params:Promise<{id:string}>}){
const {id}=await params;
return(
   <div className="text-center mt-14">
     <h1 className="text-center text-3xl font-semibold">Product {id} details render at  </h1>
   <p> date : {
     new Date().toLocaleDateString()
    } time : {
     new Date().toLocaleTimeString()
    }
   </p>
   </div>
)
}