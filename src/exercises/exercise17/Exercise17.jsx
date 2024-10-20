import { Routes, Route } from 'react-router-dom';
import Home17 from '../exercise17/Home17';
import About17 from '../exercise17/About17';

const Exercise17 = () => {
  return (
    <Routes>
      <Route path="/" element={<Home17 />} />
      <Route path="about" element={<About17 />} />
    </Routes>
  );
};

export default Exercise17;