"use client";
// not use because server side only use it 
// import  {serverSideFunction } from "@/utils/serverUtils";
import {Imageslider } from "@/components/Imageslider";
import { useTheme } from "@/components/themeProvider";
import { clientSideFunction } from "@/utils/clientUtil";
export default function ClientRoutePage(){
    const theme = useTheme();
    const clientResult = clientSideFunction();
    // const  serverResult= serverSideFunction();
    return(
       <>
        <div >
            <h1 style={{ color:theme.colors.secondary}}>Client route page</h1>
            <p style={{ color:theme.colors.secondary}}>Client side function result: {clientResult}</p>
            <Imageslider />
        </div>
       </>
    )
}