import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';
import View from './pages/View/View';
import './shared/styles.scss';
import './App.scss';

const App = () => {

  return (
    <div id="app">
      <div id="bg-image"></div>
      <div id="content">
        <Routes>
          <Route path="*" element={<NotFound />} />

          <Route path="/" element={<Home />} />
          <Route path="/:pokemonId" element={<View />} />
        </Routes>
      </div>
    </div>
  );

};

export default App;
