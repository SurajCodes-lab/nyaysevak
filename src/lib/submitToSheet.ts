const GOOGLE_SHEET_URL =
  process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL ||
  "https://script.google.com/macros/s/AKfycbzLCW6ZtY27qf_ERKDRHWFBKN8opzRmTNmd7Sndx-HG-kWga0LuWgO93Du-8nebf_3jhg/exec";

export interface ContactFormData {
  name: string;
  phone: string;
  city: string;
  legalIssue: string;
  description: string;
}

export async function submitToSheet(data: ContactFormData): Promise<boolean> {
  if (!GOOGLE_SHEET_URL) {
    console.warn("Google Sheet URL not configured. Set NEXT_PUBLIC_GOOGLE_SHEET_URL in .env.local");
    return true; // Still show success in dev
  }

  try {
    await fetch(GOOGLE_SHEET_URL, {
      method: "POST",
      body: JSON.stringify(data),
      mode: "no-cors",
    });
    return true;
  } catch (error) {
    console.error("Failed to submit to Google Sheet:", error);
    return false;
  }
}
