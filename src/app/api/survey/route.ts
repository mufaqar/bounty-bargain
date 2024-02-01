import { client } from "../../../../sanity/lib/client";
import { QSurvey } from "../../../../sanity/lib/queries";

// all Survey
export async function GET() {
  const surveyRes = await client.fetch(QSurvey);
  return Response.json({ data: surveyRes });
}


