import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-gradient-to-r from-purple-700 to-blue-700 text-white py-5'>
      <div className='container mx-auto px-6 flex flex-col md:flex-row justify-between items-center'>
        <a href="#home" className='text-2xl font-bold italic mb-4 md:mb-0 hover:text-purple-300 transition'>
          Umut.dev
        </a>
        <p className='text-sm text-center md:text-left'>© 2025 Umut.dev. All rights reserved.
</p>
      </div>
    </footer>
  );
}
