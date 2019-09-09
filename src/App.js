import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar title='Page'/>
        <Users />
      </header>
    </div>
  );
}

export default App;
