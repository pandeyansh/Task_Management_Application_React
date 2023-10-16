import React, { useState } from 'react';
const UserAuthenticationLogin = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
    if (username === 'demo' && password === 'password') {
      onLogin(username);
    } else {
      alert('Invalid username or password');
    }
  };
  return (
    <div>
      <h2>User Authentication and Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
export default UserAuthenticationLogin;