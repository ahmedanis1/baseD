import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBooks = createAsyncThunk(
    'books/fetchBooks',
    async () => {
        const response = await axios.get(
            `https://www.googleapis.com/books/v1/volumes?q==subject:fiction`
        );
        console.log(response.data);
        return response.data.items;
    }
);
