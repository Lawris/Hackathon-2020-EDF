import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './App.css';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <Router>
      <HomePage/>
    </Router>
  );
}

export default App;
