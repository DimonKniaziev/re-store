import React from "react";
import { connect } from "react-redux";
import { bookAddedToCart, bookRemovedFromCart, allBooksRemovedFromCart } from "../../actions";

const ShoppingCartTable = ({items, onIncrease, onDecrease, onDelete}) => {
    const renderRow = (item, idx) => {
        const {id, title, count, total} = item;
        return (
            <tr key={id}>
                <td>{idx + 1}</td>
                <td>{title}</td>
                <td>{count}</td>
                <td>${total}</td>
                <td>
                    <button onClick={() => onDecrease(id)}>-</button>
                    <button onClick={() => onIncrease(id)}>+</button>
                    <button onClick={() => onDelete(id)}>delete</button>
                </td>
            </tr>
        )
    }

    const allTotal = (items) => {
        let allTotal = 0;

        items.map((item) => {
            return allTotal += item.total;
        });

        return allTotal;
    }

    return (
        <div>
            <h2>Your Order</h2>
            <table>
                <thead>
                    <tr>
                        <td>#</td>
                        <td>Item</td>
                        <td>Count</td>
                        <td>Price</td>
                        <td>Action</td>
                    </tr>
                </thead>

                <tbody>
                    {items.map(renderRow)}
                </tbody>
            </table>

            <div>
                Total: ${allTotal(items)}
            </div>
        </div>
    );
}

const mapStateToProps = ({shoppingCart: {cartItems, orderTotal}}) => {
    return {
        items: cartItems,
        total: orderTotal
    };
};

const mapDispatchToProps = {
    onIncrease: bookAddedToCart,
    onDecrease: bookRemovedFromCart,
    onDelete: allBooksRemovedFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);