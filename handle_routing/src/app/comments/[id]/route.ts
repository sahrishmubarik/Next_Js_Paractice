import fs from "fs/promises";
import path from "path";

const filePath = path.join(process.cwd(), "data", "comments.json");
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const file = await fs.readFile(filePath, "utf-8");
  const comments = JSON.parse(file);

  const comment = comments.find((comment) => comment.id === parseInt(id));

  return Response.json(comment);
}
export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();
  const { text } = body;

  const file = await fs.readFile(filePath, "utf-8");
  const comments = JSON.parse(file);

  const index = comments.findIndex(
    (comment) => comment.id === Number(id)
  );

  if (index === -1) {
    return Response.json(
      { message: "Comment not found" },
      { status: 404 }
    );
  }

  comments[index].text = text;

  await fs.writeFile(
    filePath,
    JSON.stringify(comments, null, 2),
    "utf-8"
  );

  return Response.json(comments[index]);
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  //  Read the file
  const file = await fs.readFile(filePath, "utf-8");

  //  Convert JSON string into JavaScript array
  const comments = JSON.parse(file);

  // Find the comment
  const index = comments.findIndex(
    (comment) => comment.id === Number(id)
  );

  //  If comment doesn't exist
  if (index === -1) {
    return Response.json(
      { message: "Comment not found" },
      { status: 404 }
    );
  }

  // Remove the comment
  const deletedComment = comments.splice(index, 1);

  //  Write the updated array back to the file
  await fs.writeFile(
    filePath,
    JSON.stringify(comments, null, 2),
    "utf-8"
  );

  //  Return deleted comment
  return Response.json(deletedComment[0]);
}
