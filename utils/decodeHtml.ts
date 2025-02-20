export function decodeHtml(html: string): string {
  if (typeof window !== "undefined") {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  } else {
    return html.replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&#039;/g, "'");
  }
}
