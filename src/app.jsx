import { BrowserRouter, Routes, Route } from "react-router";
import { Checkout } from "./pages/Checkout";
import { Home } from "./pages/Home";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}
