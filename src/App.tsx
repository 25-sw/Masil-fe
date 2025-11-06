import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from '@/pages/home';
import Announcement from '@/pages/announcement';
import Header from './components/header';
import Create from '@/pages/create';
import My from './pages/my';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/announcement" element={<Announcement />} />
        <Route path="/create" element={<Create />} />
        <Route path="/my" element={<My />} />
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