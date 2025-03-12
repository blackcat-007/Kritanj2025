
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import './globals.css';
import React from 'react';
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark p-0 -mr-6">
    
    <body>
     
      
        <main className="app absolute p-0 w-full z-50">
            <Navbar/>
            
          {children}
          <Footer/>        
      </main>
      
      </body>
   
    </html>
  );
}