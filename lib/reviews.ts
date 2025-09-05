export interface Review {
  id: number
  name: string
  text: string
  rating: number
  image: string
  date: string // ISO 8601 string, e.g. "2025-07-10"
}