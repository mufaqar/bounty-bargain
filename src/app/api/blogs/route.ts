import { client } from "../../../../sanity/lib/client";
import { QBlogs } from "../../../../sanity/lib/queries";

// all categories
export async function GET() {
  const blogsRes = await client.fetch(QBlogs);
  return Response.json({ data: blogsRes });
}


