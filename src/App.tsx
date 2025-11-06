import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from '@/pages/home';
import Announcement from '@/pages/announcement';
import Header from './components/header';
import Create from '@/pages/create';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/announcement" element={<Announcement />} />
        <Route path="/create" element={<Create />} />
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