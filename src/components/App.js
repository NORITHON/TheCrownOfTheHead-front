
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../routes/Detail";
import Home from "../routes/Home";
import Login from "../routes/Login";
import Manager from "../routes/Manager";
import Page404 from "../routes/Page404";
import Footer from "./Footer";
import Header from "./Header";
import Designer from "../routes/Designer";
import Like from "../routes/Like";
import DesignerUpload from "../routes/DesignerUpload";
import "./font.css";

function App() {

  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/detail" element={ <Detail />} />
        <Route path="/like" element={<Like />}/>
        <Route path="/designer" element={ <Designer />} />
        <Route path="/login" element={ <Login />} />
        <Route path="/manage" element={ <Manager />} />  
        <Route path="/upload" element={<DesignerUpload />} />    
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
