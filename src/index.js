import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ProductCard from './ProductCard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='content'>
  <h1 className="title">Product Card</h1>
  <div className="main-container">
  <ProductCard img={""} title='lakme' btnInc={<i class="fa-solid fa-plus"></i>} btnDec={<i class="fa-solid fa-minus"></i>} />
  </div>
  </div>
);

