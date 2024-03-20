import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email } = (await req.json()) as {
    email: string;
  };
  console.log("🚀 ~ const{email}= ~ email:", email);

  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      'api-key': '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'
    },
    body: JSON.stringify({updateEnabled: false, email: 'zunairgillani54@gmail.com'})
  };
  
  fetch('https://api.brevo.com/v3/contacts', options)
    .then(response => response.json())
    .then(response => 
      {return new NextResponse(
        JSON.stringify({
          status: "ok",
          message: JSON.stringify(response),
        }),
        { status: 201 }
      )} 
    )
    .catch(err => console.error(err)); 
}
