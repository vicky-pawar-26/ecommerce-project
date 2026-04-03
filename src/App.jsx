import { Route, Routes } from 'react-router';
import './App.css'
import { HomePage } from './Pages/HomePage';
import { CheckOutPage } from './Pages/CheckOutPage';

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/checkout" element={<CheckOutPage />} />
    </Routes>
  );
}

export default App
