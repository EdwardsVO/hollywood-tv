export interface Movies {
    poster_path: string;
    budget: number;
    genre_ids: {
        id: []
    }
    id: number;
    original_language: string;
    original_title: string;
    popularity: number;
    title: string;
    release_date: string;
    vote_average: number;
    vote_count: number;
    status: string;
    spoken_languages: [
        iso_639_1: string,
        name: string
    ];
}