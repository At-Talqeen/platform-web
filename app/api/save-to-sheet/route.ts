import { NextResponse } from "next/server";
import { google } from "googleapis";

const credentials = {
  client_email: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL,
  private_key: process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY?.replace(/\\n/g,'\n')

};
const SCOPES = [
  "https://www.googleapis.com/auth/drive",
  "https://www.googleapis.com/auth/drive.file",
  "https://www.googleapis.com/auth/spreadsheets",
];

export async function POST(req: Request) {
  const data = await req.json();

  try {
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: SCOPES,
    });
    const sheets = google.sheets({ version: "v4", auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID,
      range:'A1:B1',
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[data.Email, 
          data.FirstName ,
          data.LastName ,
          data.Phone,
          data.Gender,
          data.Location,
          data.Dob,
          data.Date
        
        ]],
      },
    });


    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: error });
  }
}
