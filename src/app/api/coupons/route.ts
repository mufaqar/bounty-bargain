import { NextResponse } from "next/server";
import { client } from "../../../../sanity/lib/client";
import { QQoupons } from "../../../../sanity/lib/queries";

// all categories
export async function GET() {
  const couponsRes = await client.fetch(QQoupons);
  return Response.json({ data: couponsRes });
}


// create copons 
export async function POST(req: Request) {
  try {
    const { name, slug, logo, offerType, info, detail, grandRating, user, metaTitle, metaDescription, faqs } =
      (await req.json()) as {
        name: string;
        slug: string;
        logo: string;
        offerType: string;
        info: string;
        detail: string;
        grandRating: number,
        metaTitle: string,
        metaDescription: string,
        faqs: any,
        user: any,
      };

    const doc = {
      _type: "store",
      name,
      slug,
      offerType,
      info,
      detail,
      grandRating
    };

    // check if user already exist by email
    const Qusers = `*[ _type == "store" && name == $name][0]`;
    const isStore = await client.fetch(Qusers, {
      name: name,
    });

    if (isStore) {
      return new NextResponse(
        JSON.stringify({
          email: isStore.name,
          message: "Store Already Exist Please Chose Different Name",
        }),
        { status: 401 }
      );
    }

    // here create a new User
    const userRes = await client.create(doc);
    return new NextResponse(
      JSON.stringify({
        status: "ok",
        email: userRes.name,
        message: "User Created",
      }),
      { status: 201 }
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
