import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import About from './Page/About'
import Resume from './Page/Resume'
import Portfolio from './Page/Portfolio'
import Blog from './Page/Blog'
import Contact from './Page/Contact'
import { API_ENDPOINTS, axiosInstance } from './Component/APIConfig'

function App() {
  const [guestLoginSuccess, setGuestLoginSuccess] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loginGuest = async () => {
      try {
        await axiosInstance.post(API_ENDPOINTS.LoginUser, {
          name: "guest",
          password: "guest123"
        }, {
          withCredentials: true
        });

        sessionStorage.removeItem("guest_token");
        setGuestLoginSuccess(true);

      } catch (error) {
        console.error("Login failed:", error);
      } finally {
        setLoading(false);
      }
    };

    loginGuest();
  }, []);

  useEffect(() => {
    if (!guestLoginSuccess) return;

  }, [guestLoginSuccess]);

  if (loading) return <div>Loading...</div>;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/about" />} />
        <Route path='/about' element={<About guestLoginSuccess={guestLoginSuccess} />} />
        <Route path='/resume' element={<Resume guestLoginSuccess={guestLoginSuccess} />} />
        <Route path='/portfolio' element={<Portfolio guestLoginSuccess={guestLoginSuccess} />} />
        <Route path='/blog' element={<Blog guestLoginSuccess={guestLoginSuccess} />} />
        <Route path='/contact' element={<Contact guestLoginSuccess={guestLoginSuccess} />} />
      </Routes>
    </Router>
  );
}

export default App
