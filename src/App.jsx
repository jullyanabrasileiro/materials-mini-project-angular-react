import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Exercise16 from './exercises/exercise16/Exercise16';
import Exercise17 from './exercises/exercise17/Exercise17';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise-16/*" element={<Exercise16 />} />
        <Route path="/exercise-17/*" element={<Exercise17 />} />
      </Routes>
    </Router>
  );
};

export default App;
