import { useNavigate } from 'react-router-dom';

const Home17 = () => {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate('about');
  };

  return (
    <div>
      <h1>Home - Exercise 17</h1>
      <p>Welcome to the home page!</p>
      <button onClick={goToAbout}>Go to About</button>
    </div>
  );
};

export default Home17;
