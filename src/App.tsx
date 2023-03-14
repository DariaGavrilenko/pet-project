import CardDeails from 'components/CardDetails/CardDetails';
import { Header } from 'components/Header';
import { ProductsCards } from 'components/ProductCard';
import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <ProductsCards />
      <CardDeails />
    </div>
  );
}

export default App;
