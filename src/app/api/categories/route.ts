import { client } from "../../../../sanity/lib/client";
import { QCategories } from "../../../../sanity/lib/queries";

// all categories
export async function GET() {
  const categoriesRes = await client.fetch(QCategories);
  return Response.json({ data: categoriesRes });
}


