'use client'
import './globals.css'

import Nav from '@/app/components/nav'
import Footer from '@/app/components/footer'
import {usePathname} from 'next/navigation'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const Router= usePathname()
  return (
    <html lang="en"  className='bg-dodgerblue text-[1.125rem] '>
      <body className='flex flex-col'>
      <header>  
      
         <Nav route={Router!=='/home'}/>
      </header>
       <main >
        {children}
       </main>
       <footer className='flex-2'>
        <Footer/>
       </footer>
      </body>
    </html>
  )
}
