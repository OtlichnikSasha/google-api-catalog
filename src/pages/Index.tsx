import React, {FC, useState, useEffect, useCallback} from 'react';
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';

import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {BooksState, QueryInterface} from "../types/BookTypes"
import {BookCard} from "../components/BookCard";
import {Loader} from "../components/Loader";
import Skeleton from "@mui/material/Skeleton";

const filters = [
    {name: "all"},
    {name: "art"},
    {name: "biography"},
    {name: "computers"},
    {name: "history"},
    {name: "medical"},
    {name: "poetry"}
]

const sorted = [
    {name: "relevance"},
    {name: "newest"}
]

const Index: FC = () => {
    const {fetchBooks, fetchBooksOffset} = useActions()
    const {loading, books, totalItems} = useTypedSelector<BooksState>(state => state.books)
    const [query, setQuery] = useState<QueryInterface>({
        q: "all",
        orderBy: 'relevance',
        maxResults: 30,
        startIndex: 0,
        key: "AIzaSyDxsVkGD7PT-W8jLbv5yDRyJlLSYTa9xoE",
        searchText: ''
    })
    const [search, setSearch] = useState<boolean>(false)
    const [firstLoading, setFirstLoading] = useState<boolean>(true)

    const getBooks = useCallback(async() => {
        if (firstLoading) {
            await fetchBooks(query)
            setFirstLoading(false)
        }
    }, [firstLoading])

    useEffect(() => {
        getBooks()
    }, [getBooks])

    const getMoreBooks = useCallback(async () => {
        if (search) {
            await fetchBooksOffset(query)
            setSearch(false)
        }
    }, [search])

    useEffect(() => {
        getMoreBooks()
    }, [getMoreBooks])

    const changeHandler = (e: any) => {
        setQuery({
            ...query,
            [e.target.name]: e.target.value,
        })
        setFirstLoading(true)
    }

    const searchHandler = (e: any) => {
        if (e.key === 'Enter') {
            setFirstLoading(true)
        }
    }

    const loadMore = () => {
        setQuery({
            ...query,
            startIndex: query.startIndex + query.maxResults
        })
        setSearch(true)
    }

    return (
        <section className="main_section">
            <div className="actions_place">
                <div className="container">
                    <h1 className="heading">
                        Search books
                    </h1>
                    <div className="actions_block">
                        <div className="search_block">
                            <InputBase
                                sx={{ml: 1, flex: 1}}
                                placeholder="Найти книгу"
                                inputProps={{'aria-label': 'search google maps'}}
                                onKeyPress={searchHandler}
                                onChange={(e) => setQuery({...query, searchText: e.target.value})}
                            />
                            <IconButton
                                type="submit"
                                sx={{p: '10px'}}
                                aria-label="search"
                                onClick={() => setFirstLoading(true)}
                            >
                                <SearchIcon/>
                            </IconButton>
                        </div>
                        <div className="filter_sorted_block">
                            <div className="action_block">
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Фильтры</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Фильтры"
                                        name="q"
                                        value={query.q}
                                        onChange={changeHandler}
                                    >
                                        {filters.map(item => {
                                            return (
                                                <MenuItem key={item.name} value={item.name}>{item.name}</MenuItem>
                                            )
                                        })}
                                    </Select>
                                </FormControl>
                            </div>
                            <div className="action_block">
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label2">Сортировка</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label2"
                                        id="demo-simple-select2"
                                        label="Сортировка"
                                        value={query.orderBy}
                                        name="orderBy"
                                        onChange={changeHandler}
                                    >
                                        {sorted.map(item => {
                                            return (
                                                <MenuItem key={item.name} value={item.name}>{item.name}</MenuItem>
                                            )
                                        })}
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="books_section">
                <div className="container">
                    {
                        loading ?
                            <Skeleton variant="text" className="heading_loading"/>
                            :
                            <h3 className="heading">
                                {totalItems ? `Найдено: ${totalItems}` : "Ничего не найдено"}
                            </h3>
                    }

                    <div className="books_place">
                        {
                            !firstLoading && books && books.length ? books.map(book => {
                                    return (
                                        <BookCard key={book.id} book={book}/>
                                    )
                                })
                                :
                                <></>
                        }
                    </div>
                    <Loader loading={loading}/>
                    {
                        !loading && totalItems > query.startIndex && books && books.length ?
                            <Button variant="contained" onClick={loadMore}>Load more...</Button>
                            :
                            <></>
                    }
                </div>
            </section>
        </section>
    );
};

export default Index;