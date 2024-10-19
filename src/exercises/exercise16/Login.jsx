import { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Username: ${username}, Password: ${password}`);
  };

  return (
    <div className="login-container">
      <h1 style={{paddingBottom:20,}}>Login</h1>
      <form onSubmit={handleLogin}>
        <div style={{paddingBottom:20,}}>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}><button className="login-container-btn" type="submit">Login</button></div>
      </form>
    </div>
  );
};

export default Login;
