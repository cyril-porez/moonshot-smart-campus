import React from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "../Pages/Auth/sign-in";
import SignUp from "../Pages/Auth/sign-up";
import { useAuth } from '../contexts/AuthContext'; 

const AuthRoutes = () => {
  const { message } = useAuth(); 

  return (
    <div>
      {console.log(message)} 
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default AuthRoutes;
