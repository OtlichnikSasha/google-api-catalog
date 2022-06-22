export interface QueryInterface {
    q: string,
    maxResults: number,
    startIndex: number,
    orderBy: string,
    key: string,
    searchText?: string
}

export interface QueryBook {
    key: string,
    url: string
}

export interface BooksApi{
    status: boolean,
    error: string,
    data: {
        items: BookInterface[],
        totalItems: number
    }
}

export interface BooksState {
    totalItems: number,
    books: BookInterface[],
    loading: boolean,
}

export interface BookState {
    book: BookInterface | null,
    loading: boolean
}

export interface BookInterface {
    id: string,
    volumeInfo: {
        title: string,
        categories?: string[],
        imageLinks?: {
            smallThumbnail: string,
            thumbnail: string
        },
        description?: string,
        authors?: string[]
    }
}

export interface ApiInterface {
    status: boolean,
    data: {
        items: [],
        totalItems: number
    },
    error: string
}