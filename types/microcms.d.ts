export interface Content {
	id: string
	createdAt: Date
	updatedAt: Date
	title: string
	content: string
}

export interface MicroCMS {
	contents: Content[]
	totalCount: number
	offset: number
	limit: number
}
