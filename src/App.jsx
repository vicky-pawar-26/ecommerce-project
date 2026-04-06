import { Route, Routes } from 'react-router';
import './App.css'
import { HomePage } from './Pages/HomePage';
import { CheckOutPage } from './Pages/CheckOutPage';
import { Orders } from './Pages/Orders';
import { Tracking } from './Pages/Tracking';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get('/api/cart-items?expand=product').then((response) => {
      setCart(response.data);
    });
  }, [])

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} />} />
      <Route path="/checkout" element={<CheckOutPage cart={cart} />} />
      <Route path="/orders" element={<Orders cart={cart} />} />
      <Route path="/tracking" element={<Tracking />} />
    </Routes>
  );
}

export default App
