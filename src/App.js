import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm'; // Updated path

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My App</h1>
        <LoginForm />
      </header>
    </div>
  );
}

export default App;
