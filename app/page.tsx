import ProductCard from '@/components/ProductCard'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-24 py-12">
      <h1 className='text-3xl font-bold text-primary uppercase mb-10'>Checkout</h1>
      <div className='w-full flex'>
        <div className='w-1/2 p-3'>
          <div className='bg-base-200 border-neutral h-[650px] w-full rounded-xl p-3'>
            <ProductCard />
          </div>
        </div>
        <div className='w-1/2 p-3'>
          <div className='bg-base-200 border-neutral h-[550px] w-full rounded-xl'>
          </div>
          <button className='btn btn-secondary mt-5 btn-disabled'>Pay with Paypal</button>
        </div>
      </div>
    </main>
  )
}
