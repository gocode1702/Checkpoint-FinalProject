import { Routes, Route, useLocation , Link } from "react-router-dom";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Navbar from "./page d'accueil/Navbar";



// Layout Visitor
import UsersInterface from "./InterfaceUsers/UsersInterface";
import SignIn from "./InterfaceUsers/signIn/SignIn";
import SignUp from "./InterfaceUsers/signUp/SignUp";
import ListUsers from "./InterfaceUsers/List-users/ListUsers";
import UserAdd from "./InterfaceUsers/List-users/UserAdd";

// Layout analytic
import Admininterface from "./InterfaceAnalytic/Admininterface";
import Invoices from "./InterfaceAnalytic/scenes/invoices/Invoices";
import Form from "./InterfaceAnalytic/scenes/form/Form";
import Calendar from "./InterfaceAnalytic/scenes/calendar/Calendar";
import FAQ from "./InterfaceAnalytic/scenes/faq/FAQ";
import Bar from "./InterfaceAnalytic/scenes/bar/Bar";
import Pie from "./InterfaceAnalytic/scenes/Pie/Pie";
import Line from "./InterfaceAnalytic/scenes/line/Line";
import Geography from "./InterfaceAnalytic/scenes/geography/Geography";
import Team from "./InterfaceAnalytic/scenes/team/Team";
import Contacts from "./InterfaceAnalytic/scenes/contacts/Contacts";

// Layout Services

import Services from "./InterfaceServices/Services";
import Articls from "./InterfaceServices/articls/Articls";
import NoticeBuyer from "./InterfaceServices/buyer-testimonial/NoticeBuyer";
import Docs from "./InterfaceServices/docs/Docs";
import DocsHome from "./InterfaceServices/docs/DocsHome";
import BooksEdition from "./InterfaceServices/edition/News-books/BooksEdition";
import Booksnet from "./InterfaceServices/edition/electronic-books/Booksnet";
import Newsletter from "./InterfaceServices/newslater-subscrib/Newsletter";
import ProgramF from "./InterfaceServices/program-futur/ProgramF";
import Seminar from "./InterfaceServices/seminar/Seminar";

function App() {
  const data = useSelector((state) => state);
  const [count, setCount] = useState(0);
  const [text, setText] = useState(false);
  const description =
    "  This website is in :language:. You can view it in another language by using ";
  ("Google Translate here.");

  
  return (
    <div className="gt">
      <div
        className="gt__box"
        style={{
          display: "flex",
        }}
      >
        <div>
          {text ? description : description.slice(0, 24)}
          <p onClick={() => setText(true)} className="gt__notif">
            ...
          </p>
        </div>
        <div>{/* {console.log(description)} */}</div>
        <div>
          <div id="google_translate_element">
            <div>
              <div>
                <select></select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="theme-content">
        <div className="App">
         < Navbar/>
          <Routes>
            <Route exact="exact" path="/" element={<UsersInterface />}>
              <Route path="/in" element={<SignIn />} />
              <Route path="/up" element={<SignUp />} />
              <Route path="/add" element={<UserAdd />} />
              <Route path="/list" element={<ListUsers />} />
            </Route>
            <Route path="/analytic" element={<Admininterface />}>
              <Route path="/analytic/team" element={<Team />} />
              <Route path="/analytic/contacts" element={<Contacts />} />
              <Route path="/analytic/invoices" element={<Invoices />} />
              <Route path="/analytic/form" element={<Form />} />
              <Route path="/analytic/calendar" element={<Calendar />} />
              <Route path="/analytic/faq" element={<FAQ />} />
              <Route path="/analytic/bar" element={<Bar />} />
              <Route path="/analytic/pie" element={<Pie />} />
              <Route path="/analytic/line" element={<Line />} />
              <Route path="/analytic/geography" element={<Geography />} />
            </Route>

            <Route path="/ser" element={<Services />}>
              <Route path="/ser/Articls" element={<Articls />} />
              <Route path="/ser/NoticeBuyer" element={<NoticeBuyer />} />
              <Route path="/ser/Docs" element={<Docs />} />
              <Route path="/ser/DocsHome" element={<DocsHome />} />
              <Route path="/ser/BooksEdition" element={<BooksEdition />} />
              <Route path="/ser/Booksnet" element={<Booksnet />} />
              <Route path="/ser/Newsletter" element={<Newsletter />} />
              <Route path="/ser/ProgramF" element={<ProgramF />} />
              <Route path="/ser/Seminar" element={<Seminar />} />
            </Route>
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
