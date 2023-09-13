'use client'
import './globals.css'

import Nav from '@/components/nav'
import {usePathname} from 'next/navigation'
import {useAutoAnimate} from '@formkit/auto-animate/react'
import {Provider} from 'react-redux';
import store from '@/features/index';
import {Source} from '@/hooks/font';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const Router= usePathname()
  const [auto]=useAutoAnimate()

 
  return (
    <Provider store={store}>
      <html lang="en"  className="
     text-[1.125rem] max-w-[100vw] ">
        <head>
        <title>一刻时光</title>
        <meta property="og:title" content="一刻时光" key="title" />
       </head> 
      <body className="flex bg-cover bg-no-repeat flex-col bg-[url('./styles/sea.jpg')] dark:bg-[url('./styles/R.png')] ">
      <header>  
     
         <Nav route={Router}/>
      </header>
       <main className={`min-h-[calc(100vh-2.5rem)] ${Source.className}`} ref={auto} >
        {children}
       </main>
       
      </body>
    </html>
    </Provider>
  )
}
