import Link from "next/link"
export default function F1(){
    return(
        <>
        <h1 className="font-bold text-2xl">F1 page</h1>
       <div>
         <Link href="f1/f2" className="text-blue-600"> F2</Link>
       </div>
        <div>
         <Link href="/f3" className="text-blue-600"> F3</Link>
       </div>
        </>
    )
}