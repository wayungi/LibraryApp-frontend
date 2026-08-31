import './App.css'
import Navbar from './components/layout/Navbar/Navbar.tsx'
import { BrowserRouter, Routes, Route } from "react-router";
import Admin from './pages/Admin.tsx';
import Hold from './pages/Hold.tsx';
import Home from './pages/Home/Home.tsx';
import Login from './pages/Login.tsx';
import Returns from './pages/Returns.tsx';
import Shelf from './pages/Shelf.tsx';
import Signup from './pages/Signup.tsx';


function App() {

  return (
    <>    
      <BrowserRouter>
      <Navbar />

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
    </>
  )
}

export default App
