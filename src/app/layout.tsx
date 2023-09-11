'use client'
import './globals.css'

import Nav from '@/components/nav'
import Footer from '@/components/footer'
import {usePathname} from 'next/navigation'
import {useAutoAnimate} from '@formkit/auto-animate/react'
import {Provider} from 'react-redux';
import store from '@/features/index';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const Router= usePathname()
  const [auto]=useAutoAnimate()

 
  return (
    <Provider store={store}>
      <html lang="en"  className='bg-dodgerblue text-[1.125rem] '>
        <head>
        <title>一刻时光</title>
        <meta property="og:title" content="一刻时光" key="title" />
       </head> 
      <body className='flex flex-col'>
      <header>  
     
         <Nav route={Router}/>
      </header>
       <main className='min-h-[calc(100vh-2.5rem)]' ref={auto} >
        {children}
       </main>
       <footer className='flex-2'>
        <Footer/>
       </footer>
      </body>
    </html>
    </Provider>
  )
}
