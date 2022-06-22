import {combineReducers} from "redux";
import booksReducer from "./booksReducer";
import bookReducer from "./bookReducer";

export const rootReducer = combineReducers({
    books: booksReducer,
    book: bookReducer
})

export type RootState = ReturnType<typeof rootReducer>