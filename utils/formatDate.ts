export function formatDate(dateString: string): string {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-NL', { year: 'numeric', month: 'long', day: 'numeric' })
  }
  
  