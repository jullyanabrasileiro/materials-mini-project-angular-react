import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Exercise16 from './exercises/exercise16/Exercise16';
import Exercise17 from './exercises/exercise17/Exercise17';
import Exercise18 from './exercises/exercise18/Exercise18';
import Exercise19 from './exercises/exercise19/Exercise19';
import Exercise21 from './exercises/exercise21/Exercise21';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise-16" element={<Exercise16 />} />
        <Route path="/exercise-17/*" element={<Exercise17 />} />
        <Route path="/exercise-18" element={<Exercise18 />} />
        <Route path="/exercise-19" element={<Exercise19 />} />
        <Route path="/exercise-21" element={<Exercise21 />} />
      </Routes>
    </Router>
  );
};

export default App;
