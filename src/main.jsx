import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Checkout from "./pages/Checkout.jsx";
import Category from "./pages/Category.jsx";
import ProductDetail from "./pages/Category.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path='/:category' element={<Category/>} />
        <Route path='/:category/:product' element={<ProductDetail/>} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
