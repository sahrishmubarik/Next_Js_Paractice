export const Product=async()=>{
    await new Promise((resolve)=>setTimeout(resolve,2000));
    return <h1 className="text-2xl font-semibold mt-5 mb-4">Product</h1>

}