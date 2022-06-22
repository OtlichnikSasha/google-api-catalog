import {api} from '../http/api'
import {QueryInterface} from "../types/BookTypes"

export const getBooks = async (args: QueryInterface) => {
    const booksArgs: QueryInterface = {
        key: args.key,
        q: `${args.q} ${args.searchText}`,
        startIndex: args.startIndex,
        orderBy: args.orderBy,
        maxResults: args.maxResults
    }
    const url = ``;
    return await api.get(url, booksArgs);
};

export const getBook = async (url: string, args: {}) => {
    return await api.get(url, args)
};
