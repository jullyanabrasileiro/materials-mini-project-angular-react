import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './Profile';
import Login from './Login';
import Navbar from './Navbar';

const Exercise16 = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default Exercise16;