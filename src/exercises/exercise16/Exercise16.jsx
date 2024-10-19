import { Routes, Route } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Navbar from '../../exercises/exercise16/Navbar';
import Home from '../../exercises/exercise16/Home';
import Profile from '../../exercises/exercise16/Profile';
import Login from '../../exercises/exercise16/Login';

const Exercise16 = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="profile" element={<Profile />} />
      <Route path="login" element={<Login />} /> 
      </Routes>
    </div>
  );
};

export default Exercise16;
