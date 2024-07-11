import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignIn from "./Pages/Auth/sign-in";
import SignUp from "./Pages/Auth/sign-up";
import Home from "./Pages/Home";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
    <Header logo={"/logo.png"} currentUser={"Ibrahim"}/>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
