import { Route, Routes } from 'react-router';
import './App.css'
import { HomePage } from './Pages/HomePage';
import { CheckOutPage } from './Pages/CheckOutPage';
import { Orders } from './Pages/Orders';
import { Tracking } from './Pages/Tracking';

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/checkout" element={<CheckOutPage />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/tracking" element={<Tracking />} />
    </Routes>
  );
}

export default App
