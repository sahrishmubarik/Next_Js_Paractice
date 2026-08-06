export default  async function DocsPage(
    {params}:{params: Promise<{params:{slug:string[]}}>;}
){

      const { slug} = (await params);
     if(slug?.length===2)
        return(
       <h1>Documentation Page for {slug[0]} and {slug[1]}</h1>
    );
     if(slug?.length===3)
        return(
       <h1>Documentation Page for {slug[0]}, {slug[1]}, and {slug[2]}</h1>
    );
    else if(slug?.length===1)
    return(
        <h1>Documentation Page for {slug[0]}</h1>
    );
    return (
      
        <h1>Documentation Page</h1>
    );
}