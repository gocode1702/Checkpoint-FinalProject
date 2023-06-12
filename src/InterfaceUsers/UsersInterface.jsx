import React from 'react';
import SignIn from "./signIn/SignIn";
import SignUp from "./signUp/SignUp";
import ListUsers from "./List-users/ListUsers";
import UserAdd from "./List-users/UserAdd";
import VisitorInterface from "../page d'accueil/VisitorInterface";
import { Routes, Route } from "react-router-dom";
import Navbar from "../page d'accueil/Navbar";


const UsersInterface = () => {
 
    return (
      <div>

        <Routes>
          <Route path="/Navbar" element={<Navbar />} />
          <Route path="/" element={<VisitorInterface />} />
          <Route path="/in" element={<SignIn />} />
          <Route path="/up" element={<SignUp />} />
          <Route path="/add" element={<UserAdd />} />
          <Route path="/list" element={<ListUsers />} />
        </Routes>
      </div>
    );
}

export default UsersInterface;
