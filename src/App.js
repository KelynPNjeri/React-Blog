import React from 'react';
import HomePage from './pages/HomePage'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={HomePage} exact/>
      </div>
    </Router> 
  );
}

export default App;
