import { NextResponse } from "next/server";
import { client } from "../../../../sanity/lib/client";

export async function POST(req: Request) {
  try {
    const { data, star, id } = (await req.json()) as {
      data: any;
      star: any;
      id: any;
    };

    client
      .patch(id) // Document ID to patch
      .set({ grandRating: 2 }) // Shallow merge
      // .inc({ grandRating: 1 }) // Increment field by 1
      .commit() // Perform patch and return a promise
      .then((updatedOrder) => {
        return Response.json({ updatedOrder })
      })
      .catch((err) => {
        return Response.json({ err })
      });
  } catch (error: any) {
    return Response.json({ error })
  }
}
