import React from "react";

const ShoppingCartTable = () => {
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
                    <tr>
                        <td>1</td>
                        <td>Site Reliability Engineering</td>
                        <td>2</td>
                        <td>$40</td>
                        <td>
                            <button>1</button>
                            <button>2</button>
                            <button>3</button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div>
                Total: $210
            </div>
        </div>
    );
}

export default ShoppingCartTable;