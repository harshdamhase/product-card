import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ProductCard from './ProductCard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
  <h1 className="title">Product Card</h1>
  <div className="main-container">
  <ProductCard img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsg6roZK6RCQXY-WKOMZb6CJIij0sCi2rl-Q&usqp=CAU"} title='jam & catechup' btnInc={'+'} btnDec={'-'} />
  <ProductCard img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9gfoVg3Odf8JWSqE8LTPONBpPlD0sqGLG-Q&usqp=CAU"} title='Rice' btnInc={'+'} btnDec={'-'}/>
  <ProductCard img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSevzeX0B1a8o7bBEJp5Cz-E9dpTo8Ts-1QbQ&usqp=CAU"} title="vegetables" btnInc={'+'} btnDec={'-'}/>
  
  {/* <ProductCard/>
  <ProductCard/> */}
  </div>
  </div>
);

