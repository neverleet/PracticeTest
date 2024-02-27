import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './components/UserList';

function App() {
  return (
    <div className="App">
    <UserList/>
     <div id='userContainer'></div>
    </div>
  );
}

export default App;
