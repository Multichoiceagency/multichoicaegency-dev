export async function getCaseStudy(slug: string) {
    const res = await fetch(`https://cloud.multichoiceagency.nl/wp-json/wp/v2/cases?slug=${slug}&_embed`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) {
      throw new Error('Failed to fetch case study');
    }
    const data = await res.json();
    return data[0];
  }
  
  export async function fetchCases() {
    const res = await fetch('https://cloud.multichoiceagency.nl/wp-json/wp/v2/cases?_embed', {
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error('Failed to fetch case studies');
    return res.json();
  }
  
  export async function fetchLimitedCases(limit: number = 3) {
    const res = await fetch(`https://cloud.multichoiceagency.nl/wp-json/wp/v2/cases?_embed&per_page=${limit}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error('Failed to fetch limited case studies');
    return res.json();
  }
  
  