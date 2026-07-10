import { APP_URL } from "@/data/app-links";

/**
 * Build the app-domain registration URL for the marketing hero signup.
 *
 * kanbanify.org forwards the email a visitor types into the hero form to
 * app.kanbanify.org/register with the address prefilled. APP_URL keeps a
 * trailing slash, so we strip it before appending "/register" to avoid a
 * "//register" double slash. The email is URI-encoded; a blank/whitespace
 * email yields "/register" with no query string (never a malformed query).
 */
export function buildSignupUrl(email?: string): string {
  const base = APP_URL.replace(/\/+$/, "");
  const register = `${base}/register`;
  const trimmed = email?.trim();
  return trimmed ? `${register}?email=${encodeURIComponent(trimmed)}` : register;
}
