import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getBook} from "../../api/index"
import {BookState, QueryBook} from "../../types/BookTypes"

const initialState : BookState = {
    book: null,
    loading: false
}

export const fetchBook = createAsyncThunk(
    'book/fetchBook',
    async (args: QueryBook) => {
        return await getBook(args.url, args.key);
    }
)

const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        clearBook: state => {
            state.book = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBook.pending, state => {
                state.loading = true
            })
            .addCase(fetchBook.fulfilled, (state: BookState, action) => {
                state.loading = false
                // @ts-ignore
                state.book = action.payload.data
            })
            .addCase(fetchBook.rejected, state => {
                state.loading = false
            })
            .addDefaultCase(() => {
            })
    }
})

const { actions, reducer } = bookSlice
export const {
    clearBook,
} = actions

export default reducer

