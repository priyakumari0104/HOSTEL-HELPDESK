import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import FileComplaint from './Components/FileComplaint/FileComplaint';
import TrackComplaint from './Components/TrackComplaint/TrackComplaint';
import ComplaintHistory from './Components/ComplaintHistory/ComplaintHistory';
import ComplaintForm from './Components/FileComplaint/ComplaintForm';
import Profile from './Components/Profile/Profile';

// ✅ Dummy user data (replace with real Sign-In data later)
const userData = {
  name: "Zangskit Dolma",
  email: "zanskit@example.com",
  phone: "1234567890",
  address: "Leh, Ladakh"
};

const App = () => {
  return (
    <Router>
      <div className="container">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/fileComplaint" element={<FileComplaint />} />
            <Route path="/fileComplaint/:category" element={<ComplaintForm />} />
            <Route path="/track" element={<TrackComplaint />} />
            <Route path="/history" element={<ComplaintHistory />} />
            <Route path="/profile" element={<Profile userData={userData} />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;









