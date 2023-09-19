import {Dispatch} from 'redux';
import {
    FETCH_BOOKS_REQUEST,
    FETCH_BOOKS_SUCCESS,
    FETCH_BOOKS_FAILURE,
    SET_SEARCH_TERM,
    SET_SELECTED_CATEGORY,
    SET_SORT_OPTION,
    LOAD_MORE_BOOKS_SUCCESS,
} from './actionTypes';

import axios from "axios";


export const setSearchTerm = (searchTerm: string) => ({
    type: SET_SEARCH_TERM,
    payload: searchTerm,
});


export const setSelectedCategory = (category: string) => ({
    type: SET_SELECTED_CATEGORY,
    payload: category,
});


export const setSortOption = (sortOption: string) => ({
    type: SET_SORT_OPTION,
    payload: sortOption,
});


export const fetchBooks = (q: string) => async (dispatch: Dispatch) => {
    dispatch({type: FETCH_BOOKS_REQUEST});
    try {
        const response = await axios
            .get(`${process.env.REACT_APP_API_URL}key=${process.env.REACT_APP_API_KEY}&q=""`);
        console.log(response)
        dispatch({
            type: FETCH_BOOKS_SUCCESS,
            payload: response.data,
        });

    } catch (error: any) {
        dispatch({
            type: FETCH_BOOKS_FAILURE,
            payload: error.message,
        });
    }
};


export const loadMoreBooks = (page: number) => async (dispatch: Dispatch) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}key=${process.env.REACT_APP_API_KEY}?page=${page}`);
        dispatch({
            type: LOAD_MORE_BOOKS_SUCCESS,
            payload: response.data,
        });
    } catch (error) {

    }
};
