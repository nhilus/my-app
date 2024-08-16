import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <nav className='max-w-3xl mx-auto py-4 flex gap-x-4 ' >
        <Link href="/" className='text-xl text-blue-500'>Home</Link>
        <Link href="/counter" className='text-xl text-blue-500'>Counter</Link>
        <Link href="/tours" className='text-xl text-blue-500'>Tours</Link>
        <Link href="/actions" className='text-xl text-blue-500'>Actions</Link>

    </nav>
  )
}

export default Navbar