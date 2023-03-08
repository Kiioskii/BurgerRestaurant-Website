import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartPage from "./pages/StartPage";
import Menu from "./pages/Menu";
import "./style.css";
import Cart from "./components/koszyk/Cart";
import styled from "styled-components";
import Footer from "./components/Footer";
import Order from "./pages/zamawiam/Order";
import Header from "./components/Header";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/order" element={<Order />} />
        </Routes>
        <Cart />
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
