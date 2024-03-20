import { NextResponse } from "next/server";
import { client } from "../../../../sanity/lib/client";

export async function POST(req: Request) {
  try {
    const { data, star, id } = (await req.json()) as {
         data: any;
         star: any;
         id: any;
     };

    const grandRating = (data.grandRating + star) / 2;
    client
      .patch(id) // Document ID to patch
      .set({ grandRating: grandRating }) // Shallow merge
      // .inc({ grandRating: 1 })
      .commit() // Perform the patch and return a promise
      .then((res: any) => {
          return Response.json({ res })
      })
      .catch((err: any) => {
          return Response.json({ err })
      });
      
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        status: "error ",
        message: error.message,
      }),
      { status: 501 }
    );
  }
}
