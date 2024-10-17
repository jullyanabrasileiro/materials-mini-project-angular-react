import { useNavigate } from 'react-router-dom';

const About17 = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/exercise-17');
  };

  return (
    <div
      style={{display: 'flex',
      alignItems: 'center',
      alignContent: 'center',
      flexDirection: 'column',
      padding: 50,
    }}>
      <h1 style={{padding: 20}}>About - Exercise 17</h1>
      <p>This is the about page.</p>
      <button onClick={goToHome}>Back to Home</button>
    </div>
  );
};

export default About17;
