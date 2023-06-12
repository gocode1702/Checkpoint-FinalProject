import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import HomePage from './Pages/Home';
import UsersPage from './Pages/Users';



function UserAdd() {
  return (
    <div>
      
      <Routes>
        
          <Route path="/" element={<HomePage />} />
          <Route path="/UsersPage" element={<UsersPage />} />
 
      </Routes>
    </div>
  );
}

export default UserAdd;