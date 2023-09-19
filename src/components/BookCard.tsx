import React, {useState} from 'react';
import Modal from "./Modal";

const BookCard = ({book}: any) => {
    const [show, setShow] = useState(false)
    let thumbnail = book?.volumeInfo?.imageLinks?.smallThumbnail;
    const [itemBook, setItemBook] = useState()
    console.log(book)
    return (<>
        <div className="card" onClick={() => {
            setShow(true);
            setItemBook(book)
        }}>
            <img src={thumbnail}
                 alt="book"/>
            <div className="bottom">
                <p>{book?.volumeInfo?.categories}</p>
                <h3 className="title">{book?.volumeInfo?.title}</h3>
                {book?.volumeInfo?.authors?.map((author: any, index: number) => (
                    <div key={index}>{author}</div>
                ))}
            </div>
        </div>
        {/*<Modal show={show} item={itemBook}/>*/}
        </>
        );
        };

        export default BookCard;