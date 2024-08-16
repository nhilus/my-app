import './globals.css';
import Navbar from '@/components/Navbar';
import { Metadata } from 'next';
import {Inter, Inconsolata, Roboto} from 'next/font/google';


const inter = Inter({subsets: ['latin']});
const inconsolata = Inconsolata({subsets: ['latin']});
const roboto = Roboto({subsets: ['latin'], weight: ['400']});


export const metadata:Metadata = {
  title: 'Tásia Esteves',
  description: 'My personal page. Enjoy!',
  keywords: ['Next.Js', 'OF'],
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return (
    <html lang='en'>
        <body className={inter.className}>
          <Navbar/>
          <main className='max-w-3xl mx-auto py-20'>
            {children}
          </main>
        </body>
    </html>
  )
}