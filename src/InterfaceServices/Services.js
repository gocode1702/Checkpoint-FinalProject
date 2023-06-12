import React from "react";

import Articls from "./articls/Articls";
import NoticeBuyer from "./buyer-testimonial/NoticeBuyer";
import Docs from "./docs/Docs";
import DocsHome from "./docs/DocsHome";
import BooksEdition from "./edition/News-books/BooksEdition";
import Booksnet from "./edition/electronic-books/Booksnet";
import Newsletter from "./newslater-subscrib/Newsletter";
import ProgramF from "./program-futur/ProgramF";
import Seminar from "./seminar/Seminar";
import { Routes, Route, Link } from "react-router-dom";

const Services = () => {
  return (
    <div>
      <Routes>
        <Route path="/Articls" element={<Articls />} />
        <Route path="/NoticeBuyer" element={<NoticeBuyer />} />
        <Route path="/Docs" element={<Docs />} />
        <Route path="/DocsHome" element={<DocsHome />} />
        <Route path="/BooksEdition" element={<BooksEdition />} />
        <Route path="/Booksnet" element={<Booksnet />} />
        <Route path="/Newsletter" element={<Newsletter />} />
        <Route path="/ProgramF" element={<ProgramF />} />
        <Route path="/Seminar" element={<Seminar />} />
      </Routes>
    </div>
  );
};

export default Services;
