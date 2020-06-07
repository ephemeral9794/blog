export type Content = {
  id: string
  createdAt: Date
  updatedAt: Date
  title: string
  content: string
}
export type MicroCMSResult = {
  contents: Content[]
  totalCount: number
  offset: number
  limit: number
}
