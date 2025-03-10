import React from "react";
import { HomePage, CartPage } from "../pages";
import { Route, Routes } from "react-router-dom";
import ShopHeader from "../shop-header";
import { useBooks } from "../../store";

const App = () => {
  const getBooks = useBooks(state => state.getBooks);
  getBooks().then((books) => console.log(books));
  return (
    <main>
      <ShopHeader numItems={5} total={210}/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
      </Routes>
    </main>
  );
}

export default App;