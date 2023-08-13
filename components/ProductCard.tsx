'use client'

import { Dispatch, SetStateAction, useState } from "react";

interface cardProps {
  imgUrl: string,
  name: string,
  price: number,
  quantity: number
  cart: cardProps[];
  setCart: Dispatch<SetStateAction<cardProps[]>>;
}

const ProductCard = ({ imgUrl, name, price, quantity, cart, setCart }: cardProps) => {
  const [showed, setShowed] = useState(false)
  const [productQuantity, setProductQuantity] = useState(quantity);

  const handleIncrement = () => {
    setProductQuantity(productQuantity + 1);
  };

  const handleDecrement = () => {
    if (productQuantity > 1) {
      setProductQuantity(productQuantity - 1);
    }
  };

  const handleConfirm = () => {
    const updatedCart = cart.map((item) =>
      item.name === name ? { ...item, quantity: productQuantity } : item
    );

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  return (
    <>
    {showed && (
          <div id="details" className="fixed top-0 left-0 z-50 h-full w-full backdrop-blur-md transition-all">
          <div className="flex w-screen h-screen items-center justify-center">
            <div className="card bg-white shadow-xl rounded-box">
              <figure><img className='h-64 aspect-square object-cover' src={imgUrl} alt={name} /></figure>
              <div className="card-body">
                <div className='flex flex-col gap-2'>
                  <h2 className="card-title cursor-pointer" onClick={() => setShowed(!showed)}>{name}</h2>
                  <div className="join items-center">
                    <button className="btn join-item text-lg" onClick={handleIncrement}>
                      +
                    </button>
                    <p className="text-lg font-semibold join-item text-center">{productQuantity}</p>
                    <button className="btn join-item text-lg" onClick={handleDecrement}>
                      -
                    </button>
                </div>
                </div>
                <p>${price.toFixed(2)}</p>
                <div className="card-actions justify-center">
                  <button 
                    className="btn btn-success"
                    onClick={() => {
                      handleConfirm();
                      setShowed(!showed)
                    }}>Confirm</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    )}
    <div className="card card-side bg-base-100 shadow hidden md:flex h-32">   
      <figure><img className='h-full  aspect-square object-cover' src={imgUrl} alt={name} /></figure>
      <div className="card-body">
        <div className='flex items-center'>
          <h2 className="card-title cursor-pointer" onClick={() => setShowed(!showed)}>{name}</h2>
          <p className='pl-3 text-info'>{quantity}x</p>
        </div>
        <p>${(price * quantity).toFixed(2)}</p>
      </div>
    </div>
    <div className='indicator inline-flex md:hidden w-[47%]'>
      <span className='indicator-item badge badge-primary -translate-x-0 translate-y-0'>{quantity}x</span>
      <div className='card card-compact bg-base-100 flex md:hidden w-full h-44'>
        <figure><img className='h-28 w-full aspect-square object-cover' src={imgUrl} alt={name} /></figure>
          <div className="card-body gap-0">
            <h2 className="card-title mb-0 leading-5 text-sm" onClick={() => setShowed(!showed)}>{name}</h2>
            <p className='text-neutral-600 text-xs'>${(price * quantity).toFixed(2)}</p>
          </div>
      </div>
    </div>
  </>
  )
}

export default ProductCard