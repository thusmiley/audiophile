import { React, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home.jsx";
import Checkout from "./pages/Checkout.jsx";
import Category from "./pages/Category.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Confirmation from "./components/Confirmation";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Cart from "./components/Cart";
import { ModalProvider } from "./components/modalContext";

function App() {
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState([]);

  const handleQuantityChange = (e) => {
    const changeId = e.currentTarget.id;
    if (changeId === "increase") {
      setQuantity(quantity + 1);
    } else if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = (product) => {
    const duplicate = cart.some((item) => {
      return item.name === product.name;
    });

    if (duplicate) {
      const productUpdate = cart.find((item) => {
        return item.name === product.name;
      });
      productUpdate.quantity = quantity;
    } else {
      setCart((prevCart) => [...prevCart, { ...product, quantity: quantity }]);
    }
    setQuantity(1);
  };

  const updateCart = (e) => {};

  const removeAll = () => {};

  return (
    <BrowserRouter>
      <ScrollToTop />
      <ModalProvider>
        <div>
          <header>
            <NavBar cart={cart} />
            <Cart cart={cart} removeAll={removeAll} updateCart={updateCart} />
          </header>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:category" element={<Category />} />
              <Route
                path="/:category/:product"
                element={<ProductDetail cart={cart} handleAddToCart={handleAddToCart} handleQuantityChange={handleQuantityChange} quantity={quantity} />}
              />
              <Route path="/checkout" element={<Checkout cart={cart} />} />
            </Routes>
            <Confirmation cart={cart} removeAll={removeAll} />
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </ModalProvider>
    </BrowserRouter>
  );
}

export default App;
