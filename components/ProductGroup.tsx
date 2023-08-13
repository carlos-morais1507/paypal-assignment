'use client'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { generateCart } from '@/stores/cart';

interface cardProps {
  imgUrl: string;
  name: string;
  price: number;
  quantity: number;
  cart: cardProps[];
  setCart: Dispatch<SetStateAction<cardProps[]>>;
}

const ProductGroup = () => {
  const [cart, setCart] = useState<cardProps[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    generateCart();
    const cartStr = localStorage.getItem('cart');
    if (cartStr) {
      setCart(JSON.parse(cartStr));
    }
    
  }, []);

  useEffect(() => {
    const calculatedTotalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    setTotalPrice(calculatedTotalPrice);
    localStorage.setItem("totalPrice", JSON.stringify(calculatedTotalPrice));
  }, [cart]);

  return (
    <div className=' md:w-3/5 md:h-full p-3 w-full h-1/2'>
      <span className='text-secondary text-lg md:text-2xl font-bold'>Your Cart</span>
      <div className='bg-base-200 border-neutral h-[350px] md:h-[650px] w-full rounded-xl p-3 overflow-scroll overflow-x-hidden flex md:flex-col gap-3 flex-wrap md:flex-nowrap mx-auto'>
      {cart.map((item: Object, index) => {
        return (
          <ProductCard
          key={index}
          {...item as cardProps}
          cart={cart}
          setCart={setCart}
          />
        )
      })}
      <button onClick={() => console.log(localStorage.getItem("totalPrice"))}>Teste</button>
      </div>
      <h1 className='mt-2 text-lg'>Total: <span className='font-semibold'>${totalPrice.toFixed(2)}</span></h1>
    </div>
  )
}

export default ProductGroup