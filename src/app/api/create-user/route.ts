import { hash } from "bcryptjs";
import { NextResponse } from "next/server";
import { client } from "../../../../sanity/lib/client";

export async function POST(req: Request) {
  try {
    const { fname, lname, gender, dateofbirth, email, password } =
      (await req.json()) as {
        fname: string;
        lname: string;
        gender: string;
        dateofbirth: string;
        email: string;
        password: string;
      };

    // hash password
    const hashed_password = await hash(password, 12);

    const doc = {
      _type: "users",
      fname,
      lname,
      gender,
      dateofbirth,
      email,
      password: hashed_password,
    };

    // check if user already exist by email
    const Qusers = `*[ _type == "users" && email == $email][0]`;
    const isUser = await client.fetch(Qusers, {
      email: email,
    });

    if (isUser) {
      return new NextResponse(
        JSON.stringify({
          email: isUser.email,
          message: "Email Already Exist",
        }),
        { status: 401 }
      );
    }

    // here create a new User
    const userRes = await client.create(doc);
    return new NextResponse(
      JSON.stringify({
        status: "ok",
        email: userRes.email,
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
