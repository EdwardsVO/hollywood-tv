export interface Movies {
    page: number,
    results: [
        id: number,
        original_language: string,
        original_title: string,
        popularity: number,
        title: string,
        vote_average: number
    ],
    total_pages: number,
    total_results: number,
}