import React from 'react'

const ProductCard = () => {
  return (
    <div className="card card-side bg-base-100 shadow">   
    <figure><img className='h-32' src="https://images.pexels.com/photos/13094233/pexels-photo-13094233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Photo" /></figure>
    <div className="card-body">
      <div className='flex items-center'>
        <h2 className="card-title">Grey shirt</h2>
        <p className='pl-3 text-info'>1x</p>
      </div>
      <p>$32.00</p>
    </div>
  </div>
  )
}

export default ProductCard