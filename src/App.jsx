// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Exercise16 from './components/Exercise16';
import Exercise17 from './components/Exercise17';
import Exercise18 from './components/Exercise18';
import Exercise19 from './components/Exercise19';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise-16" element={<Exercise16 />} />
        <Route path="/exercise-17" element={<Exercise17 />} />
        <Route path="/exercise-18" element={<Exercise18 />} />
        <Route path="/exercise-19" element={<Exercise19 />} />
      </Routes>
    </Router>
  );
};

export default App;
