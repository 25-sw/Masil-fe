import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/pages/home';
import Header from '@/components/header';
import Announcement from '@/pages/announcement';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<div>AI 제작</div>} />
        <Route path="/announcement" element={<Announcement />} />
        <Route path="/my" element={<div>내 가게</div>} />
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
    </BrowserRouter>
  );
}