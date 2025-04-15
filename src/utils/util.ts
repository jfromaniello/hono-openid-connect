export const enforceLeadingSlash = (path: string) => {
  return path.split('')[0] === '/' ? path : '/' + path;
};

export function toSearchParams(
  params: Record<string, string | number | undefined>
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
