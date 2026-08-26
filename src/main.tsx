import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Admin from './pages/Admin.tsx';
import Hold from './pages/Hold.tsx';
import Home from './pages/Home.tsx';
import Login from './pages/Login.tsx';
import Returns from './pages/Returns.tsx';
import Shelf from './pages/Shelf.tsx';
import Signup from './pages/Signup.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="admin" element={<Admin />} />
        <Route path="hold" element={<Hold />} />
        <Route path="returns" element={<Returns />} />
        <Route path="shelf" element={<Shelf />} />

        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
