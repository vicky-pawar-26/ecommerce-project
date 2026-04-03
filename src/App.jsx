import { Route, Routes } from 'react-router';
import './App.css'
import { HomePage } from './Pages/HomePage';

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/checkout" element={<div>CheckOut Page</div>} />
    </Routes>
  );
}

export default App
