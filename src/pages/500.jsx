// pages/500.js
import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Jika Anda ingin menggunakan gambar

function Custom500() {
  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>500 - Server-side error occurred</h1>
      
      <p>Oops! Something went wrong on our server. Don't worry, we're on it!</p>
      <Link href="/">
        <a>Back to Home</a>
      </Link>
    </div>
  );
}

export default Custom500;
