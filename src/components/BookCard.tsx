import React, {FC} from 'react';
import {Link} from 'react-router-dom';
import {BookInterface} from "../types/BookTypes";

interface PropTypes {
    book: BookInterface
}

export const BookCard: FC<PropTypes> = ({book}) => {
    return (
        <div className="book_item">
            <Link className="book_item__img" to={`/book/${book.id}`}>
                <img src={book.volumeInfo?.imageLinks?.smallThumbnail} alt={book.volumeInfo.title}/>
            </Link>
            <div className="book_item__data">
                {
                    book.volumeInfo?.categories?.length ?
                        <div className="book_item__category">
                            {book.volumeInfo.categories[0]}
                        </div>
                        :
                        <></>
                }
                <Link className="book_item__title" to={`/book/${book.id}`}>
                    {book.volumeInfo.title}
                </Link>
                <div className="book_item__authors">
                    {
                        book.volumeInfo?.authors?.map(author => {
                            return (
                                <div className="book_item__author" key={author}>
                                    {author}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

