import React, {FC} from 'react';
import Skeleton from '@mui/material/Skeleton';

interface PropsTypes {
    loading: boolean
}

export const Loader: FC<PropsTypes> = ({loading}) => {
    return (
        <>
            {
                loading ?
                    <div className="books_place">
                        <div className="book_item">
                            <div className="book_item__img">
                                <Skeleton variant="rectangular" width={210} height={118}/>
                            </div>
                            <div className="book_item__data">
                                <div className="book_item__category">
                                    <Skeleton variant="text"/>
                                </div>
                                <div className="book_item__title">
                                    <Skeleton variant="text"/>
                                </div>
                                <div>
                                    <div className="book_item__author">
                                        <Skeleton variant="text"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="book_item">
                            <div className="book_item__img">
                                <Skeleton variant="rectangular" width={210} height={118}/>
                            </div>
                            <div className="book_item__data">
                                <div className="book_item__category">
                                    <Skeleton variant="text"/>
                                </div>
                                <div className="book_item__title">
                                    <Skeleton variant="text"/>
                                </div>
                                <div>
                                    <div className="book_item__author">
                                        <Skeleton variant="text"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="book_item">
                            <div className="book_item__img">
                                <Skeleton variant="rectangular" width={210} height={118}/>
                            </div>
                            <div className="book_item__data">
                                <div className="book_item__category">
                                    <Skeleton variant="text"/>
                                </div>
                                <div className="book_item__title">
                                    <Skeleton variant="text"/>
                                </div>
                                <div>
                                    <div className="book_item__author">
                                        <Skeleton variant="text"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="book_item">
                            <div className="book_item__img">
                                <Skeleton variant="rectangular" width={210} height={118}/>
                            </div>
                            <div className="book_item__data">
                                <div className="book_item__category">
                                    <Skeleton variant="text"/>
                                </div>
                                <div className="book_item__title">
                                    <Skeleton variant="text"/>
                                </div>
                                <div>
                                    <div className="book_item__author">
                                        <Skeleton variant="text"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <></>
            }
        </>

    )
};

