export function getMeetingUrl(): string {
  return (
    process.env.NEXT_PUBLIC_HUBSPOT_MEETING_URL ||
    "https://meetings-na2.hubspot.com/will-m"
  );
}

export function getPortalId(): string {
  return process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID || "0";
}

export function getFormId(): string {
  return process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID || "placeholder-form-id";
}
