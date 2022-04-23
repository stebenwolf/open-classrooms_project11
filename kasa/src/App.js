import './styles/App.css';
import './styles/style.css';
import Header from './components/Header'
import Home from './components/Home';
import About from './components/About';
import Error404 from './components/Error404';

import FicheLogement from './components/FicheLogement';
import Footer from './components/Footer';

import React, { Suspense } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//const Home = lazy(() => import('./components/Home'));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logement/:id" element={<FicheLogement />} />
          <Route path="/a-propos" element = {<About />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        </Suspense>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;