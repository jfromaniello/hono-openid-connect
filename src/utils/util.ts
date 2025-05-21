export const enforceLeadingSlash = (path: string) => {
  return path.split("")[0] === "/" ? path : "/" + path;
};

export function toSearchParams(
  params: Record<string, string | number | undefined>,
): URLSearchParams {
  const entries = Object.entries(params)
    .filter((entry): entry is [string, string | number] => {
      return entry[1] !== undefined;
    })
    .map(([key, value]: [string, string | number]) => {
      return [key, String(value)] as [string, string];
    });
  return new URLSearchParams(entries);
}

/**
 * Validates a redirect URL to prevent open redirects
 *
 * @param url The URL to validate
 * @param baseURL Optional base URL to validate against (for absolute URLs)
 * @returns A safe URL to redirect to
 */
export function validateRedirectUrl(url: string, baseURL?: string): string {
  // If the URL is empty or undefined, return the default path
  if (!url) {
    return "/";
  }

  // Allow relative URLs that start with /
  if (url.startsWith("/")) {
    // Prevent protocol-relative URLs like //evil.com
    if (url.startsWith("//")) {
      return "/";
    }
    return url;
  }

  // For absolute URLs, validate they belong to the same site
  if (baseURL) {
    try {
      const redirectUrl = new URL(url);
      const base = new URL(baseURL);
      // Check if the URL belongs to the same host
      if (redirectUrl.hostname === base.hostname) {
        return url;
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      return "/"; // If the URL is invalid, return the default path
    }
  }
  // If we reach here, the URL is not safe, return the default path
  return "/";
}
