import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./componets/Home";
import Header from "./componets/Header";
import Footer from "./componets/Footer";
import Cart from "./componets/Cart";
import { CartProvider } from "./CartContent";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="min-h-screen bg-[]">
      <Router>
        <CartProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Cart" element={<Cart />} />
          </Routes>
          <Footer />
          <ToastContainer />
        </CartProvider>
      </Router>
    </div>
  );
}

export default App;