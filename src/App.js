import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './scss/app.scss';
import Header from './components/Header';
import Home from './pages/Home';

const Products = React.lazy(() => import(/* webpackChunkName: 'News'*/ './pages/Products'));

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={
            <React.Suspense fallback={<div>Идет загрука товара...</div>}>
              <Products />
            </React.Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default App;
