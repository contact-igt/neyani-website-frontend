export const siteUrl = "https://www.neyanihospital.in";

export function absoluteUrl(path: string = "/"): string {
  return new URL(path, siteUrl).toString();
}
