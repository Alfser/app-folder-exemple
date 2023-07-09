import Link from 'next/link'
import React from 'react'

export default function About() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
        <div>about</div>
        <Link href='/'>Home</Link> 
    </main>
  )
}
