import { Route, Routes } from 'react-router';
import './App.css'
import { HomePage } from './Pages/Home/HomePage';
import { CheckOutPage } from './Pages/Checkout/CheckOutPage';
import { Orders } from './Pages/Orders/Orders';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const getCartData = async () => {
      const response = await axios.get('/api/cart-items?expand=product');
      setCart(response.data);
    }

    getCartData();
  }, [])

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} />} />
      <Route path="/checkout" element={<CheckOutPage cart={cart} />} />
      <Route path="/orders" element={<Orders cart={cart} />} />
      <Route path="/tracking" element={<></>} />
    </Routes>
  );
}

export default App
