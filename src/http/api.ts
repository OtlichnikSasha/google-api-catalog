import { http } from './index';
import {ApiInterface} from "../types/BookTypes";

export class api {
    static async get (url: string, args: object) {
        const result: ApiInterface = {
            status: false,
            data: {
                items: [],
                totalItems: 0
            },
            error: ''
        };
        try {
            const res = await http.get(url, { params: { ...args } })
            if (res.status === 200) {
                result.status = true;
                result.data = res.data;
            }
        } catch (e: any) {
            result.error = e.response.data.message
        }
        return result;
    }
}
