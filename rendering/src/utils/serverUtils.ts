import "server-only";

export const serverSideFunction=()=>{
    console.log(`use multiple libraries in server side function,
        use environment variables in server side function,
        process confidential information,
        interact with database,
        `);
        return "Server result";
}