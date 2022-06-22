import React, {FC, useEffect} from 'react';
import {useParams, Link} from "react-router-dom"
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Skeleton from "@mui/material/Skeleton";

const Book: FC = () => {
    const {id} = useParams()
    const {fetchBook, clearBook} = useActions()
    const {book, loading} = useTypedSelector(state => state.book)
    useEffect(() => {
        if (id) {
            fetchBook({url: id, key: "AIzaSyDxsVkGD7PT-W8jLbv5yDRyJlLSYTa9xoE"})
        }
        return function () {
            clearBook()
        }
    }, [id])

    return (
        <section className="book_section">
            <div className="container">
                <div className="book_page">
                    <div className="book_page_item">
                        <div className="book_page_item__img">
                            {loading ? <Skeleton variant="rectangular"/> : <img src={book?.volumeInfo.imageLinks?.thumbnail} alt={book?.volumeInfo.title}/>}
                        </div>
                    </div>
                    <div className="book_page_item">
                        <div className="book_page_item__data">
                            <div className="breadcrumbs">
                                <Link to="/" className="breadcrumbs_link">Книги</Link>
                                <ArrowForwardIcon/>
                                {
                                    book && book?.volumeInfo?.categories?.length ?
                                        <>
                                            <div className="breadcrumbs_link">{book.volumeInfo.categories[0]}</div>
                                            <ArrowForwardIcon/>
                                        </>
                                        :
                                        <></>
                                }
                                <Link className="breadcrumbs_link" to="#">{book?.volumeInfo.title}</Link>
                            </div>
                            <div className="book_page__title">
                                {loading ?
                                    <Skeleton variant="text" className="heading_loading"/>
                                    : <h1 className="heading">
                                        {book?.volumeInfo.title}
                                    </h1>
                                }
                            </div>
                            <div className="book_page__authors">
                                {book?.volumeInfo?.authors?.map(author => {
                                    return (
                                        <div className="book_page__author" key={author}>
                                            {author}
                                        </div>
                                    )
                                })}
                            </div>
                            <>
                                {loading ? <Skeleton variant="rectangular"/> : <></>}
                                {
                                    book && book.volumeInfo && book.volumeInfo.description ?
                                        <div className="book_page__description"
                                             dangerouslySetInnerHTML={{__html: book.volumeInfo.description}}/>
                                        :
                                        <></>
                                }
                            </>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Book;