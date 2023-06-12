import {  Route, Routes } from 'react-router-dom';

import Navbar from "./Components/Navbar";
import Cart from "./Pages/Cart";
import Wishlist from "./Pages/Wishlist";
import HomePage from "./Pages/HomePage";


function BooksEdition() {
  return (
    <div>
      <Navbar  />
      <Routes>
        <Route path="/" element={<HomePage  />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </div>
  );
}

export default BooksEdition;
