// pages/500.js
import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Jika Anda ingin menggunakan gambar
import ErrorLayout from '@/pages/error/ErrorLayout'

function Custom500() {
  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>500 - Server-side error occurred</h1>
      
      <p>Oops! Something went wrong on our server. Don&apos;t worry, we&rsquo;re on it!</p>
      <Link href="/">
        <a>Back to Home</a>
      </Link>
    </div>
  );
}


// Tentukan layout khusus untuk halaman ini
Custom500.layout = ErrorLayout;


export default Custom500;