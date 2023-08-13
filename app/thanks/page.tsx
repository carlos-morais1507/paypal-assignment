import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center p-6">
      <h1>Thank You!</h1>
      <Link href={'/'}>Come back</Link>
    </main>
  )
}

export default page