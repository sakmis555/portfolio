import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

function Footer() {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg '>
      <Layout className='py-8 flex items-center justify-between'>
        <span>{new Date().getFullYear()} All Rights Reserved</span>
        <div className='flex items-center'>
        &copy; Saksham Mishra 
        </div>
        <Link href="/"></Link>
        <Link href="/">Say Hello</Link>
      </Layout>
    </footer>
  )
}

export default Footer