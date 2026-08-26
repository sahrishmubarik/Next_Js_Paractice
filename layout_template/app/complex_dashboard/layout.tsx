
import React from "react";

export default function complexDashboardLayout({
    children,
    userAnalytics,
    revenue,
    notifications
}:{children:React.ReactNode;
    userAnalytics:React.ReactNode;
    revenue:React.ReactNode;
    notifications:React.ReactNode;



}){
return(
    <>
    <div>{children}</div>
    <div className=" flex">
        <div className=" flex flex-col">
            <div>{userAnalytics}</div>
            <div>{revenue}</div>
        </div>
      
            <div className="flex flex-1">{notifications}</div>
        
    </div>
    </>
)
}