import { Inter } from 'next/font/google'
// import './globals.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '../css/common.css'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PropertyBusiness',
  description: 'You Can Buy,Sell,Rentout Your Properties ere',

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
  <link rel="icon" href="/favicon.ico" />

  </head>

      <body className={inter.className}>
        
        <header>
        <Navbar />
        </header>
        {children}

        <footer>
          <Footer />
        </footer>
      
      </body>
    </html>
  )
}

