import ProductCard from '@/components/ProductCard'
import UserForm from '@/components/UserForm'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6">
      <h1 className='text-3xl font-bold text-primary uppercase mb-10'>Checkout</h1>
      <div className='w-full flex flex-col md:flex-row'>
        <div className='md:w-1/2 md:h-full p-3 w-full h-1/2'>
          <span className='text-secondary text-lg md:text-2xl font-bold'>Your Cart</span>
          <div className='bg-base-200 border-neutral h-[350px] md:h-[650px] w-full rounded-xl p-3 overflow-scroll overflow-x-hidden flex md:flex-col gap-3 flex-wrap md:flex-nowrap mx-auto'>
            <ProductCard />

          </div>
        </div>
        <div className='md:w-1/2 md:h-full p-3 w-full h-1/2'>
          <span className='text-secondary text-lg md:text-2xl font-bold'>Your Data</span>
          <div className='bg-base-200 border-neutral w-full rounded-xl'>
            <UserForm />
          </div>
          <button className='btn btn-secondary mt-5 btn-disabled'>Pay with Paypal</button>
        </div>
      </div>
    </main>
  )
}
