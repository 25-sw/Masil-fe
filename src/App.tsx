import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from '@/pages/home';
import Header from './components/header';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<div>AI 제작</div>} />
        <Route path="/announcement" element={<div>공고</div>} />
        <Route path="/my" element={<div>내 가게</div>} />
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        draggable
        style={{ top: '80px' }}
      />
    </BrowserRouter>
  );
}