import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', marginTop: '20px' }}>
      <h1>Welcome to the Exercises Home</h1>

      <Link to="/exercise-16">
        <button>Go to Exercise 16</button>
      </Link>

      <Link to="/exercise-17">
        <button>Go to Exercise 17</button>
      </Link>

      <Link to="/exercise-18">
        <button>Go to Exercise 18</button>
      </Link>

      <Link to="/exercise-19">
        <button>Go to Exercise 19</button>
      </Link>

      <Link to="/exercise-21">
        <button>Go to Exercise 21</button>
      </Link>
    </div>
  );
};

export default Home;
