/**
 * Decodeert HTML-entiteiten naar hun overeenkomstige karakters.
 * Bijvoorbeeld: &amp; wordt & en &quot; wordt "
 * Deze functie werkt zowel op de server als in de browser.
 */
export function decodeHtml(html: string): string {
  if (typeof window !== "undefined") {
    // Browser-side implementatie
    const txt = document.createElement("textarea")
    txt.innerHTML = html
    return txt.value
  } else {
    // Server-side implementatie
    return html
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&#039;/g, "'")
      .replace(/&#39;/g, "'")
      .replace(/&ndash;/g, "–")
      .replace(/&mdash;/g, "—")
      .replace(/&nbsp;/g, " ")
      .replace(/&#x2F;/g, "/")
      .replace(/&#x27;/g, "'")
      .replace(/&#x60;/g, "`")
      .replace(/&#x3D;/g, "=")
      .replace(/&hellip;/g, "…")
      .replace(/&bull;/g, "•")
      .replace(/&copy;/g, "©")
      .replace(/&reg;/g, "®")
      .replace(/&trade;/g, "™")
      .replace(/&euro;/g, "€")
      .replace(/&pound;/g, "£")
      .replace(/&yen;/g, "¥")
      .replace(/&cent;/g, "¢")
  }
}

