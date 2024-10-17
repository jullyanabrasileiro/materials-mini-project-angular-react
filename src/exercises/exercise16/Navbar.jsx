import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/exercise-16/login">Login</Link>
        </li>
        <li>
          <Link to="/exercise-16/profile">Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;



