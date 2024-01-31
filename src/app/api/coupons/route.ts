import { client } from "../../../../sanity/lib/client";
import { QQoupons } from "../../../../sanity/lib/queries";

// all categories
export async function GET() {
  const couponsRes = await client.fetch(QQoupons);
  return Response.json({ data: couponsRes });
}


