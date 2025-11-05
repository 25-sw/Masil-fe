import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/pages/home';
import Header from './components/header';
import Create from '@/pages/create';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/announcement" element={<div>공고</div>} />
        <Route path="/my" element={<div>내 가게</div>} />
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
    </BrowserRouter>
  );
}