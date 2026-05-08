export function getMeetingUrl(): string {
  return (
    process.env.NEXT_PUBLIC_HUBSPOT_MEETING_URL ||
    "https://meetings.hubspot.com/placeholder"
  );
}

export function getPortalId(): string {
  return process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID || "0";
}

export function getFormId(): string {
  return process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID || "placeholder-form-id";
}
