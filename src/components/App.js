
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../routes/Detail";
import Form from "../routes/Form";
import Home from "../routes/Home";
import List from "../routes/List";
import Page404 from "../routes/Page404";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/detail" element={ <Detail />} />
        <Route path="/form" element={<Form />}/>
        <Route path="/list" element={ <List />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
