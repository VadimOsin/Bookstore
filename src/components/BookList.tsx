import React, {useEffect, useState} from 'react';
import BookCard from "./BookCard";
import {useDispatch, useSelector} from "react-redux";
import {fetchBooks} from "../store/actions/bookActions";
import {Dispatch} from "redux";

const BookList = () => {
    const dispatch: Dispatch<any> = useDispatch()
    const books = useSelector((state: any) => state.books);
    useEffect(() => {
        dispatch(fetchBooks(""))
    }, [])

    return (
        <div className="container">
            {
                books?.items?.map((book: any) => (
                    <BookCard key={book?.id} book={book}/>
                ))
            }
        </div>
    );
};

export default BookList;