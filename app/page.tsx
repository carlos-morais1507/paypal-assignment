import ProductGroup from '@/components/ProductGroup';
import UserForm from '@/components/UserForm'

declare const paypal: any;

export default function Home() {

  

  return (
    <main className="flex min-h-screen flex-col items-center p-6">
      <h1 className='text-3xl font-bold text-primary uppercase mb-10'>Checkout</h1>
      <div className='w-full flex flex-col md:flex-row'>
         <ProductGroup />
        <div className='md:w-1/2 md:h-full p-3 w-full h-1/2'>
          <span className='text-secondary text-lg md:text-2xl font-bold'>Your Data</span>
          <div className='bg-base-200 border-neutral w-full rounded-xl'>
            <UserForm />
          </div>
          <div id="paypal-button-container"></div>
        </div>
      </div>
    </main>
  )
}
