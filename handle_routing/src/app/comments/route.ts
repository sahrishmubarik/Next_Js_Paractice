import { type NextRequest } from "next/server";
import fs from "fs/promises";
import path from "path";

const filePath=path.join(process.cwd(), "data", "comments.json");
export async function GET(request:NextRequest) {
const searchParams=request.nextUrl.searchParams;
const query=searchParams.get("query");
  const file = await fs.readFile(filePath, "utf-8");
  const comments = JSON.parse(file);

  const filteredComment=query ?
  comments.filter((comment)=> comment.text.includes(query)):
  comments
  return Response.json(filteredComment);
}


export async function POST(request:Request){
const comment  = await request.json();
const file=await fs.readFile(filePath, 'utf-8');
const comments=JSON.parse(file);
const newComment = {
    id: comments.length + 1,
    text: comment,
  };

  comments.push(newComment);
await fs.writeFile(filePath,JSON.stringify(comments,null ,2));
 return new Response(JSON.stringify(newComment), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });

}


// import { comments } from "./comment";

// export async function GET(){
//   return Response.json(comments);
// }
// export async function POST(request:Request){
//   const comment=await request.json();
//   const newComment={
//     id:comments.length+1,
//     text:  comment,
//   };
//   comments.push(newComment);
//   return new Response(JSON.stringify(newComment),{
//     headers:{"Content-Type":"application/json"},
//     status:201,
//   })
// }
