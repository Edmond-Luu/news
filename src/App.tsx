import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navigation />
      {/* <Routes>
        <Route path="/"></Route>
        <Route path="/about"></Route>
        <Route path="/projects"></Route>
        <Route path="/siteinfo"></Route>
        <Route path="/contact"></Route>
        <Route path="/funfacts"></Route>
      </Routes> */}
    </div>
  );
}


export default App;
