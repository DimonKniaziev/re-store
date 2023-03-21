import React from "react";
import { Link } from "react-router-dom";

const ShopHeader = ({numItems, total}) => {
    return (
        <header>
            <Link to="/">
                <h2>ReStore</h2>
            </Link>
            <Link to="/cart">
                {numItems} items (${total})
            </Link>
        </header>
    )
}

export default ShopHeader;