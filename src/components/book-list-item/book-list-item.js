import React from "react";

const BookListItem = ({book}) => {
    const {title, author, price, coverImage} = book;
    return (
        <React.Fragment>
            <img src={coverImage} alt="cover"/>
            <h4>{title}</h4>
            <span>{author}</span>
            <span>{price}</span>
            <button>Add to Cart</button>
        </React.Fragment>
    )
}

export default BookListItem;