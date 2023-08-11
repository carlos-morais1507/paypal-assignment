import React from 'react'

const ProductCard = () => {
  return (
    <>
    <div className="card card-side bg-base-100 shadow hidden md:flex h-32">   
      <figure><img className='h-full  aspect-square object-cover' src="https://images.pexels.com/photos/13094233/pexels-photo-13094233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Photo" /></figure>
      <div className="card-body">
        <div className='flex items-center'>
          <h2 className="card-title">Grey shirt</h2>
          <p className='pl-3 text-info'>1x</p>
        </div>
        <p>$32.00</p>
      </div>
    </div>
    <div className='indicator inline-flex md:hidden w-[47%]'>
      <span className='indicator-item badge badge-primary -translate-x-0 translate-y-0'>1x</span>
      <div className='card card-compact bg-base-100 flex md:hidden w-full'>
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