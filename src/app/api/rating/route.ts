import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { data, star, id } = (await req.json()) as {
         data: any;
         star: any;
         id: any;
     };

     const mutations = [
      {
        patch: {
          id: id,
          set: {
            name: 'fiverrrr', 
          },
        },
      },
    ];

    fetch(`https://xwdcyci8.api.sanity.io/v2021-06-07/data/mutate/production`, {
               method: 'post',
               headers: {
                 'Content-type': 'application/json',
                 Authorization: `Bearer ${process.env.NEXT_PUBLIC_SANITY_TOKEN }`
               },
               body: JSON.stringify({mutations})
             })
               .then(response => response.json())
               .then(result => {
                return result
               })
               .catch(error => {
                return new NextResponse(
                  JSON.stringify({
                    status: "error ",
                    message: error,
                  }),
                  { status: 501 }
                );
               })

    
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
