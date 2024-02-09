import { Route, Routes } from "react-router-dom";
import { About } from "./pages/About/about"
import { Header } from "./assets/layouts/Header";

import React from 'react';
import { Homepage } from "./pages/home/Home";
import { Contact } from "./pages/contact/Contact";
import { Service1 } from "./pages/service/components/Service1";
import { Test } from "./pages/test/Test";
import { MyProvider } from "./utils/ContextProvider";



export const App = () => {
  return (
    <>

  <MyProvider>

    <Header/>
      <Routes>
        <Route path="/" element={< Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/test" element ={<Test/>}/>

      </Routes>

      

  </MyProvider>
      
    </>
  )
}



