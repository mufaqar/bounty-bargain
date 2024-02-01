import { NextResponse } from "next/server";
import { client } from "../../../../sanity/lib/client";

export async function POST(req: Request) {
  try {
    const { ids, _id } =
      (await req.json()) as {
          ids: any;
          _id : string
      };

    // update User
    const result = client.patch(_id).set({
     fname: ids
    })


    if (result) {
      return new NextResponse(
        JSON.stringify({
          message: "User Updated | Survey Added",
        }),
        { status: 201 }
      );
    }

  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        status: "error",
        message: error.message,
      }),
      { status: 500 }
    );
  }
}