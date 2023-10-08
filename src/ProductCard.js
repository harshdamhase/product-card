import React from 'react'
import './ProductCard.css'
import { useState } from 'react'

function ProductCard({img, title, btnInc,btnDec}) {

    const [count, setCount] = useState(0);

    function increment() {
        count = count + 1;
        console.log(count)
    }

    function decrement() {
        count = count - 1;
        console.log(count);
    }

    function buyNow() {
        alert("Card added sucessfully!!");
    }
    return (

            <div className='container'>

             <div>
             <img src={img} alt="img" className='img'/>
             </div>   

                <p className='title'>{title}</p>

                <button onClick={increment} className='btn'>{btnInc}</button>

                <h1 className="count">{count}</h1>

                <button onClick={decrement} className='btn'>{btnDec}</button>

                <p onClick={buyNow} className='btn-buy-now'>Buy Now</p>

            </div>

    )
}

export default ProductCard