import { NextResponse } from "next/server";
import { client } from "../../../../sanity/lib/client";
import { QStore, QStores } from "../../../../sanity/lib/queries";


export async function GET() {
  const couponsRes = await client.fetch(QStores);
  return Response.json({ data: couponsRes });
}

export async function POST(req: Request) {

  try {
    const { name } = (await req.json()) as {
         name: string;
     };

    // check if user already exist by email
    const store = await client.fetch(QStore, {
      name: name,
    });

     // if store not exist 
    if (!store) {
      return new NextResponse(
        JSON.stringify({
          status: "fail",
          message: "Store Not Exist",
        }),
        { status: 400 }
      );
    }

    return new NextResponse(
      JSON.stringify({
        status: "ok",
        store,
      }),
      { status: 200 }
    );

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
