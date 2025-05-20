import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchBooks } from './booksAction';
import { BooksState, Book } from '../types'

const initialState: BooksState = {
    books: [],
    loading: false,
    error: '',
    reviews: {},
};

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        addReview: (state, action: PayloadAction<{ bookId: string; rating: number; review: string }>) => {
            const { bookId, rating, review } = action.payload;
            state.reviews[bookId] = { rating, review };
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBooks.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchBooks.fulfilled, (state, action: PayloadAction<Book[]>) => {
                state.loading = false;
                state.books = action.payload;
            })
            .addCase(fetchBooks.rejected, (state) => {
                state.loading = false;
                state.error = 'Failed to fetch books';
            });
    },
});

export const { addReview } = booksSlice.actions;
export default booksSlice.reducer;
