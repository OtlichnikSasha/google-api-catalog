import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as BooksReducer from "../store/reducers/booksReducer"
import * as BookReducer from "../store/reducers/bookReducer"

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators({
        ...BooksReducer,
        ...BookReducer,
    },  dispatch)
}