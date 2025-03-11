
import './globals.css';
import React from 'react';
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark p-0 -mr-6">
    
      <body className='p-0 m-0'>{children}</body>
   
    </html>
  );
}