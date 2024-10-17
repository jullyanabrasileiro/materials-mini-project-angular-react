import { useNavigate } from 'react-router-dom';

const Home17 = () => {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate('about');
  };

  return (
    <div
    style={{display: 'flex',
      alignItems: 'center',
      alignContent: 'center',
      flexDirection: 'column',
      padding: 50,
    }}>
      <h1 style={{padding: 20}}>Home - Exercise 17</h1>
      <p>Welcome to the home page!</p>
      <button onClick={goToAbout}>Go to About</button>
    </div>
  );
};

export default Home17;
