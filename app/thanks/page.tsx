'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Page = () => {
  const [purchaseId, setPurchaseId] = useState<string | null>('')
  useEffect(() => {
    setPurchaseId(localStorage.getItem("purchaseId"))
    console.log("purchaseId:", purchaseId);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center p-6 gap-3">
      <h1 className='text-2xl font-bold text-primary'>Thank You!</h1>
      <p className='text-center'>Your purchase id is: <span className='font-bold'>{purchaseId}</span></p>
      <Link href={'/'} className='btn btn-secondary'>Go back to cart</Link>
    </main>
  )
}

export default Page;
