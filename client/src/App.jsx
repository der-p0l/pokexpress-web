import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import NotFound from './views/NotFound';
import './shared/style.scss';
import './App.scss';

const App = () => {

  return (
    <div id="app">
      <div id="bg-image"></div>
      <div id="content">
        <Routes>
          <Route path="*" element={<NotFound />} />

          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );

};

export default App;
