// lib/wp.ts
export interface WPCaseItem {
    slug: string
    modified_gmt?: string
  }
  
  const CASES_CPT = "cases"
  const WP_PER_PAGE = 100
  
  export async function fetchAllFromWP<T = any>(endpoint: string): Promise<T[]> {
    const base = process.env.WORDPRESS_API_BASE
    if (!base) throw new Error("WORDPRESS_API_BASE is not set")
  
    const headers = {
      // sommige hosts blokkeren requests zonder UA
      "User-Agent": "MCA-SitemapBot/1.0 (+https://www.multichoiceagency.nl)",
      "Accept": "application/json",
    }
  
    let page = 1
    const all: T[] = []
  
    const mkUrl = (p: number) =>
      `${base}${endpoint}${endpoint.includes("?") ? "&" : "?"}per_page=${WP_PER_PAGE}&page=${p}`
  
    const first = await fetch(mkUrl(page), {
      headers,
      // hint voor Next/ISR (mag ook weggelaten worden; we regelen ISR in het route-bestand)
      next: { revalidate: 60 * 60 },
    })
  
    if (!first.ok) throw new Error(`WP fetch failed: ${first.status} ${first.statusText}`)
  
    const totalPages = Number(first.headers.get("X-WP-TotalPages") || "1")
    all.push(...(await first.json()))
  
    for (page = 2; page <= totalPages; page++) {
      const res = await fetch(mkUrl(page), { headers, next: { revalidate: 60 * 60 } })
      if (!res.ok) break
      all.push(...(await res.json()))
    }
  
    return all
  }
  
  export async function getCases(): Promise<WPCaseItem[]> {
    return fetchAllFromWP<WPCaseItem>(
      `/wp-json/wp/v2/${CASES_CPT}?status=publish&_fields=slug,modified_gmt`
    )
  }
  