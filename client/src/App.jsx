import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import NotFound from './views/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {

  return (
    <div className="app">
      <Routes>
        <Route path="*" element={<NotFound />} />

        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );

};

export default App;
