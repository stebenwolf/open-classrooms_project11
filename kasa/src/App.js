import './styles/App.css';
import Header from './components/Header'
import Home from './components/Home';
import About from './components/About';
import Error404 from './components/Error404';
import Footer from './components/Footer';

import FicheLogement from './components/FicheLogement';


import React, { Suspense } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//const Home = lazy(() => import('./components/Home'));

// build version : <BrowserRouter basename="https://stebenwolf.github.io/open-classrooms_project11/kasa/build/"> 


function App() {

  return (
    <div className="App">
      <BrowserRouter basename="/kasa/build"> 
      
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="/logement/:id" element={<FicheLogement />} />
          <Route path="/a-propos" element = {<About />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        </Suspense>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;