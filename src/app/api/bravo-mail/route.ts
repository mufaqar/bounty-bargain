import { NextResponse } from "next/server";
const SibApiV3Sdk = require("sib-api-v3-typescript");

export async function POST(req: Request) {
  const { email } = (await req.json()) as {
    email: string;
  };
  console.log("🚀 ~ const{email}= ~ email:", email);

  let apiInstance = new SibApiV3Sdk.ContactsApi();

  let apiKey = apiInstance.authentications["apiKey"];

  apiKey.apiKey = "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";

  let createContact = new SibApiV3Sdk.CreateContact();

  createContact.email = "exampletest@example.com";
  createContact.listIds = [2];

  apiInstance.createContact(createContact).then(
    function (data: any) {
      return new NextResponse(
        JSON.stringify({
          status: "ok",
          message: JSON.stringify(data),
        }),
        { status: 201 }
      );
    },
    function (error: any) {
      return new NextResponse(
        JSON.stringify({
          status: "error",
          message: error,
        }),
        { status: 400 }
      );
    }
  );
}
