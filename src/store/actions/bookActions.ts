import { Dispatch } from 'redux';
import axios, { AxiosError } from 'axios';
import {
    FETCH_BOOKS_REQUEST,
    FETCH_BOOKS_SUCCESS,
    FETCH_BOOKS_FAILURE,
    SET_SEARCH_TERM,
    SET_SELECTED_CATEGORY,
    SET_SORT_OPTION,
    LOAD_MORE_BOOKS_SUCCESS,
} from './actionTypes';


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


export const fetchBooks = () => async (dispatch: Dispatch) => {
    dispatch({ type: FETCH_BOOKS_REQUEST });

    try {
        const response = await axios.get('your_api_endpoint_here');
        dispatch({
            type: FETCH_BOOKS_SUCCESS,
            payload: response.data,
        });
    } catch (error: any) { // Используйте тип any здесь
        dispatch({
            type: FETCH_BOOKS_FAILURE,
            payload: error.message,
        });
    }
};


export const loadMoreBooks = (page: number) => async (dispatch: Dispatch) => {
    try {
        const response = await axios.get(`your_api_endpoint_here?page=${page}`);
        dispatch({
            type: LOAD_MORE_BOOKS_SUCCESS,
            payload: response.data,
        });
    } catch (error) {

    }
};
