import React, { useState } from 'react';
import axios from './axios';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios.post('/login', { username, password });
      setMessage(response.data.message);
    } catch (error) {
      console.error('Error logging in:', error);
      setMessage('An error occurred');
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto'}}>
      <header style={{padding: '20px 0px', color: "#224F63" }}>
        <h1>Sending Basic Auth With Axios</h1>
      </header>
      <div style={{ display: 'flex', flexDirection: 'column', marginTop: '20px' }}>
        <input
          type='text'
          placeholder='Enter Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: '20px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '16px' }}
        />
        <input
          type='password'
          placeholder='Enter Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: '20px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '16px' }}
        />
        <button
          onClick={handleSubmit}
          style={{ padding: '20px 20px', backgroundColor: '#0C73A1', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '16px' }}
        >
          Submit
        </button>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}

export default App;
