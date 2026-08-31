import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Admin from './pages/Admin.tsx';
import Hold from './pages/onhold/Hold.tsx';
import Home from './pages/home/Home.tsx';
import Login from './pages/auth/Login.tsx';
import Returns from './pages/returns/Returns.tsx';
import Shelf from './pages/shelf/Shelf.tsx';
import Signup from './pages/auth/Signup.tsx';
import Layout from './components/layout/Layout.tsx'

function App() {

  return (
    <>    
      <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="admin" element={<Admin />} />
          <Route path="hold" element={<Hold />} />
          <Route path="returns" element={<Returns />} />
          <Route path="shelf" element={<Shelf />} />
        </Route>

        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
