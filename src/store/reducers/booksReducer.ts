import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getBooks} from "../../api/index"
import {BooksState, QueryInterface} from "../../types/BookTypes"

const initialState : BooksState = {
    books: [],
    loading: false,
    totalItems: 0
}

export const fetchBooks = createAsyncThunk(
    'books/fetchBooks',
    async (args: QueryInterface) => {
        return await getBooks(args)
    }
)

export const fetchBooksOffset = createAsyncThunk(
    'books/fetchBooksOffset',
    async (args: QueryInterface) => {
        return await getBooks(args)
    }
)

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBooks.pending, state => {
                state.loading = true
            })
            .addCase(fetchBooks.fulfilled, (state: BooksState, action) => {
                state.loading = false
                state.books = action.payload.data.items
                state.totalItems = action.payload.data.totalItems
            })
            .addCase(fetchBooks.rejected, state => {
                state.loading = false
            })

            .addCase(fetchBooksOffset.pending, state => {
                state.loading = true
            })
            .addCase(fetchBooksOffset.fulfilled, (state: BooksState, action) => {
                state.loading = false
                state.books = state.books.concat(action.payload.data.items)
            })
            .addCase(fetchBooksOffset.rejected, state => {
                state.loading = false
            })

            .addDefaultCase(() => {
            })
    }
})

const { reducer } = booksSlice

export default reducer

