import { useNavigate } from 'react-router-dom';

const About17 = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/exercise-17');
  };

  return (
    <div>
      <h1>About - Exercise 17</h1>
      <p>This is the about page.</p>
      <button onClick={goToHome}>Back to Home</button>
    </div>
  );
};

export default About17;
