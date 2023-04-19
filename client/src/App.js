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
import Galery from "./pages/startp/Galery";
import TakeOrderPage from "./pages/TakeOrderPage";
import SucessOrder from "./pages/SuccessOrder";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const [products, setProducts] = React.useState(0);
  const [id, setId] = React.useState(0);
  const [suma, setSuma] = React.useState(0);
  const [productList, setProductList] = React.useState([]);

  const takeProduct = (e) => {
    const tempProduct = {
      title: `${e.title}`,
      price: e.price,
      type: `${e.type}`,
      id: id,
      stripe_id: e.stripe_id,
      stripe_price: e.stripe_price,
    };

    setProducts((p) => ++p);
    setId((p) => ++p);
    setProductList((prev) => [...prev, tempProduct]);
    setSuma((p) => p + parseFloat(e.price));
  };

  console.log(suma);

  const removeProduct = (e) => {
    setProducts((p) => --p);
    const tempProductsList = productList.filter((val) => val.id !== e.id);
    setProductList(tempProductsList);
    setSuma((p) => p - e.price);
  };

  console.log(products);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/order" element={<Order takeProduct={takeProduct} />} />
          <Route path="/gallery" element={<Galery />} />
          <Route path="/sucessOrder" element={<SucessOrder />} />
          <Route path="*" element={<ErrorPage />} />
          <Route
            path="/takeOrder"
            element={
              <TakeOrderPage
                productList={productList}
                removeProduct={removeProduct}
                suma={suma}
              />
            }
          />
        </Routes>
        <Cart
          products={products}
          productList={productList}
          removeProduct={removeProduct}
          suma={suma}
        />
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
