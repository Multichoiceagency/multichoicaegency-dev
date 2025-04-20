import { NextResponse } from "next/server"

export async function GET() {
  try {
    // Get the base ID and API key from environment variables
    const baseId = process.env.AIRTABLE_BASE_ID
    const apiKey = process.env.AIRTABLE_API_KEY

    // Log the first few characters of the credentials (for debugging, not the full values for security)
    console.log("Base ID prefix:", baseId?.substring(0, 4) + "...")
    console.log("API Key prefix:", apiKey?.substring(0, 4) + "...")

    // First, try to list the tables in the base to check if we can connect at all
    const tablesResponse = await fetch(`https://api.airtable.com/v0/meta/bases/${baseId}/tables`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    })

    const tablesData = await tablesResponse.json()

    if (!tablesResponse.ok) {
      return NextResponse.json(
        {
          error: "Failed to connect to Airtable",
          details: tablesData,
          suggestion: "Check your API key and base ID",
        },
        { status: 500 },
      )
    }

    // If we can connect, return the list of tables
    return NextResponse.json({
      success: true,
      message: "Successfully connected to Airtable",
      tables: tablesData.tables.map((table: any) => ({
        id: table.id,
        name: table.name,
        fields: table.fields.map((field: any) => ({
          id: field.id,
          name: field.name,
          type: field.type,
        })),
      })),
    })
  } catch (error) {
    console.error("Error testing Airtable connection:", error)
    return NextResponse.json(
      {
        error: "Failed to test Airtable connection",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    )
  }
}
