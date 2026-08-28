import fs from "fs/promises";
import path from "path";


const filePath=path.join(process.cwd(), "data", "comments.json");
export async function GET(_resquest:Request, {params}:{params: Promise<{id:string}>}){
    const { id } = await params;
    const file = await fs.readFile(filePath, "utf-8");
    const comments = JSON.parse(file);

    const comment=comments.find((comment)=> comment.id===parseInt(id));

  return Response.json(comment);
}