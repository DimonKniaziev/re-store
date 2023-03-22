import React from "react";

const BookListItem = ({book, onAddedToCart}) => {
    const {title, author, price, coverImage} = book;
    return (
        <React.Fragment>
            <img src={coverImage} alt="cover"/>
            <h4>{title}</h4>
            <span>{author}</span>
            <span>{price}</span>
            <button onClick={onAddedToCart}>Add to Cart</button>
        </React.Fragment>
    )
}

export default BookListItem;