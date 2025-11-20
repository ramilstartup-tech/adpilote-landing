import { NextRequest, NextResponse } from "next/server";

type EarlyAccessPayload = {
  email: string;
  company?: string;
  role?: string;
  language?: "en" | "fr";
};

type AirtableRecord = {
  fields: {
    Email: string;
    "Company / Website"?: string;
    Role?: string;
    Source: string;
    Notes?: string;
  };
};

type AirtableResponse = {
  records: Array<{
    id: string;
    fields: Record<string, unknown>;
    createdTime: string;
  }>;
};

const EMAIL_REGEX = /^\S+@\S+\.\S+$/;

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body: EarlyAccessPayload = await request.json();

    // Validate email
    const email = body.email?.trim();
    if (!email || !EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: "Invalid email" },
        { status: 400 }
      );
    }

    // Extract optional fields
    const company = body.company?.trim();
    const role = body.role?.trim();
    const language = body.language || "en";

    // Extract metadata
    const userAgent = request.headers.get("user-agent") || undefined;
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      undefined;

    // Validate environment variables
    const airtableToken = process.env.AIRTABLE_TOKEN;
    const airtableBaseId = process.env.AIRTABLE_BASE_ID;
    const airtableTableName = process.env.AIRTABLE_TABLE_NAME;

    if (!airtableToken || !airtableBaseId || !airtableTableName) {
      console.error("Missing Airtable environment variables");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    // Prepare Airtable record with correct field names
    // Field names must match exactly with Airtable column names
    const record: AirtableRecord = {
      fields: {
        Email: email,
        Source: "Landing page",
        Notes: "", // Empty notes field
      },
    };

    // Add optional fields only if they exist
    // "Company / Website" and "Role" match Airtable column names
    if (company) record.fields["Company / Website"] = company;
    if (role) record.fields.Role = role;

    // Send to Airtable
    const airtableUrl = `https://api.airtable.com/v0/${airtableBaseId}/${airtableTableName}`;
    const airtableResponse = await fetch(airtableUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${airtableToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ records: [record] }),
    });

    if (!airtableResponse.ok) {
      const errorText = await airtableResponse.text();
      console.error("Airtable API error:", airtableResponse.status, errorText);
      return NextResponse.json(
        { error: "Failed to save lead" },
        { status: 500 }
      );
    }

    const airtableData: AirtableResponse = await airtableResponse.json();

    // Log success (without sensitive data)
    console.log("Early access lead saved:", email, { company: !!company, role: !!role });

    return NextResponse.json({ ok: true, recordId: airtableData.records[0]?.id });
  } catch (error) {
    console.error("Early access API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
