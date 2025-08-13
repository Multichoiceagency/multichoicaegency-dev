// lib/wp.ts
export interface WPCaseItem {
    slug: string
    modified_gmt?: string
  }
  
  /** Hoe je CPT heet in WP (slug). Ik ga uit van 'cases'. Pas aan indien anders. */
  const CASES_CPT = "cases"
  const WP_PER_PAGE = 100
  
  export async function fetchAllFromWP<T = any>(endpoint: string): Promise<T[]> {
    const base = process.env.WORDPRESS_API_BASE
    if (!base) throw new Error("WORDPRESS_API_BASE is not set")
  
    let page = 1
    const all: T[] = []
  
    const first = await fetch(
      `${base}${endpoint}${endpoint.includes("?") ? "&" : "?"}per_page=${WP_PER_PAGE}&page=${page}`,
      { next: { revalidate: 60 * 60 } } // 1 uur cache/ISR
    )
    if (!first.ok) throw new Error(`WP fetch failed: ${first.status} ${first.statusText}`)
  
    const totalPages = Number(first.headers.get("X-WP-TotalPages") || "1")
    all.push(...(await first.json()))
  
    for (page = 2; page <= totalPages; page++) {
      const res = await fetch(
        `${base}${endpoint}${endpoint.includes("?") ? "&" : "?"}per_page=${WP_PER_PAGE}&page=${page}`,
        { next: { revalidate: 60 * 60 } }
      )
      if (!res.ok) break
      all.push(...(await res.json()))
    }
  
    return all
  }
  
  export async function getCases(): Promise<WPCaseItem[]> {
    // Endpoint voorbeeld: https://cloud.multichoiceagency.nl/wp-json/wp/v2/cases
    return fetchAllFromWP<WPCaseItem>(
      `/wp-json/wp/v2/${CASES_CPT}?status=publish&_fields=slug,modified_gmt`
    )
  }
  