/**
 * Generates an absolute URL for assets to be used in emails
 * @param path The path to the asset, starting with "/"
 * @returns The absolute URL to the asset
 */
export function getAssetUrl(path: string): string {
  // Use the NEXT_PUBLIC_SITE_URL environment variable if available
  // Otherwise, fallback to a default URL
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://multichoiceagency.nl"

  // Ensure the path starts with a slash
  const normalizedPath = path.startsWith("/") ? path : `/${path}`

  return `${baseUrl}${normalizedPath}`
}
