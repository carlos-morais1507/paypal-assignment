'use client'

import { useState } from "react";

const ProductCard = () => {
  const details = document.getElementById('details');
  const [showed, setShowed] = useState(false)
  showed === true ? details?.classList.remove('hidden') : details?.classList.add('hidden')

  return (
    <>
    <div id="details" className=" fixed top-0 left-0 z-50 h-full w-full backdrop-blur-md transition-all">
      <div className="flex w-screen h-screen items-center justify-center">
        <div className="card bg-white shadow-xl rounded-box">
          <figure><img className='h-64 aspect-square object-cover' src="https://images.pexels.com/photos/13094233/pexels-photo-13094233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Photo" /></figure>
          <div className="card-body">
            <div className='flex flex-col gap-2'>
              <h2 className="card-title cursor-pointer" onClick={() => setShowed(!showed)}>Grey shirt</h2>
              <div className="join items-center">
                <button className="btn join-item text-lg">+</button>
                <p className='text-lg font-semibold join-item text-center'>1</p>
                <button className="btn join-item text-lg">-</button>
              </div>
            </div>
            <p>$32.00</p>
            <div className="card-actions justify-center">
              <button className="btn btn-success" onClick={() => setShowed(!showed)}>Confirm</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="card card-side bg-base-100 shadow hidden md:flex h-32">   
      <figure><img className='h-full  aspect-square object-cover' src="https://images.pexels.com/photos/13094233/pexels-photo-13094233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Photo" /></figure>
      <div className="card-body">
        <div className='flex items-center'>
          <h2 className="card-title cursor-pointer" onClick={() => setShowed(!showed)}>Grey shirt</h2>
          <p className='pl-3 text-info'>1x</p>
        </div>
        <p>$32.00</p>
      </div>
    </div>
    <div className='indicator inline-flex md:hidden w-[47%]'>
      <span className='indicator-item badge badge-primary -translate-x-0 translate-y-0'>1x</span>
      <div className='card card-compact bg-base-100 flex md:hidden w-full h-44'>
        <figure><img className='h-28 w-full aspect-square object-cover' src="https://images.pexels.com/photos/13094233/pexels-photo-13094233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Photo" /></figure>
          <div className="card-body gap-0">
            <h2 className="card-title mb-0 leading-5 text-sm">Grey shirt</h2>
            <p className='text-neutral-600 text-xs'>$32.00</p>
          </div>
      </div>
    </div>
  </>
  )
}

export default ProductCard