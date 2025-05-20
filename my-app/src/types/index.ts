import exp from "node:constants";

export interface BookTable {
    id?: string;
    volumeInfo: {
        title: string;
        authors?: string[];
        categories?: string[];
        averageRating?: number;
    };
}

export interface TableComponentProps {
    books: BookTable[];
    loading: boolean;
    onRowDoubleClick?: (record: BookTable) => void;
}

export interface VolumeInfo {
    title: string;
    authors?: string[];
    categories?: string[];
    description?: string;
    averageRating?: number;
}

export interface Book {
    id: string;
    volumeInfo: VolumeInfo;
}

export interface LocationState {
    state: Book;
}

interface Review {
    rating: number;
    review: string;
}

interface BookReducer {
    volumeInfo: {
        title: string;
        authors?: string[];
        categories?: string[];
        averageRating?: number;
    };
}

export interface BooksState {
    books: BookReducer[];
    loading: boolean;
    error: string;
    reviews: {
        [bookId: string]: Review;
    };
}

