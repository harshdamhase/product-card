import React from 'react'
import './ProductCard.css'
import { useState } from 'react'

function ProductCard({ img, title, btnInc, btnDec }) {
    const [count, setCount] = useState(0);

    function Increment() {
        setCount(count + 1);
        console.log(count);
    }

    function decrement() {
        setCount(count - 1);
        console.log(count);
    }

    function buyNow() {
        alert("Card added sucessfully!!");
    }

    return (

        <div className='container'>

            <div>
                <img src={img} alt="img" className='img' />
            </div>

            <p className='img-title'>{title}</p>

            <div className='btn-container'>
                <button className='btn' onClick={Increment}>{btnInc}</button>

                <h1 className="count">{count}</h1>

                <button onClick={decrement} className='btn'>{btnDec}</button>
            </div>

            <div>
                <button onClick={buyNow} className='btn buy-now'>Buy Now</button>
            </div>


        </div>

    )
}

export default ProductCard