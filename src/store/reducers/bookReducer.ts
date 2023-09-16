import {
    FETCH_BOOKS_REQUEST,
    FETCH_BOOKS_SUCCESS,
    FETCH_BOOKS_FAILURE,
    SET_SEARCH_TERM,
    SET_SELECTED_CATEGORY,
    SET_SORT_OPTION,
    LOAD_MORE_BOOKS_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
    books: [],
    loading: false,
    error: null,
    searchTerm: '',
    selectedCategory: 'all',
    sortOption: 'relevance',
};

const bookReducer = (state = initialState, action: { type: string; payload: any }) => {
    switch (action.type) {
        case FETCH_BOOKS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_BOOKS_SUCCESS:
            return {
                ...state,
                loading: false,
                books: action.payload,
            };
        case FETCH_BOOKS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case SET_SEARCH_TERM:
            return {
                ...state,
                searchTerm: action.payload,
            };
        case SET_SELECTED_CATEGORY:
            return {
                ...state,
                selectedCategory: action.payload,
            };
        case SET_SORT_OPTION:
            return {
                ...state,
                sortOption: action.payload,
            };
        case LOAD_MORE_BOOKS_SUCCESS:
            return {
                ...state,
                books: [...state.books, ...action.payload],
            };
        default:
            return state;
    }
};

export default bookReducer;
