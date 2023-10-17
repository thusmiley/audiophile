import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Checkout from "./pages/Checkout.jsx";
import Earphones from "./pages/Earphones.jsx";
import Speakers from "./pages/Speakers.jsx";
import Headphones from "./pages/Headphones.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="headphones" element={<Headphones />} />
        <Route path="speakers" element={<Speakers />} />
        <Route path="earphones" element={<Earphones />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
