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
  const [rerender, setRerender] = useState(false);

  const handleQuantityChange = (e) => {
    const changeId = e.currentTarget.id;
    if (changeId === "increase") {
      setQuantity(quantity + 1);
    } else if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = (product) => {
    const duplicate = cart.some((item) => {
      return item.name === product.name;
    });

    if (duplicate) {
      const productToUpdate = cart.find((item) => {
        return item.name === product.name;
      });
      productToUpdate.quantity = quantity;
    } else {
      setCart((prevCart) => [...prevCart, { ...product, quantity: quantity }]);
    }
    setQuantity(1);
  };

  const handleUpdateCart = (e) => {
    const changeId = e.currentTarget.id;
    const indexNum = Number(e.currentTarget.dataset.index);

    const productToUpdate = cart.find((product, index) => index === indexNum);

    if (changeId === "increase") {
      productToUpdate.quantity += 1;
      setRerender(!rerender);
    } else if (productToUpdate.quantity !== 0) {
      productToUpdate.quantity -= 1;
      setRerender(!rerender);
    }
    setCart(cart.filter((product) => product.quantity !== 0));
  };

  const handleRemoveAll = (cart) => {
    if (cart.length > 0) {
      setCart([]);
    }
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <ModalProvider>
        <div>
          <header>
            <NavBar cart={cart} />
            <Cart cart={cart} onRemoveAll={handleRemoveAll} onUpdateCart={handleUpdateCart} />
          </header>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:category" element={<Category />} />
              <Route path="/:category/:product" element={<ProductDetail cart={cart} onAddToCart={handleAddToCart} onQuantityChange={handleQuantityChange} quantity={quantity} />} />
              <Route path="/checkout" element={<Checkout cart={cart} />} />
            </Routes>
            <Confirmation cart={cart} onRemoveAll={handleRemoveAll} />
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
