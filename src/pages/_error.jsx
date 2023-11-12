// pages/_error.js

import React from 'react';
import Link from 'next/link';

function Error({ statusCode }) {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{statusCode
        ? `Terjadi error ${statusCode} pada server`
        : 'Terjadi error pada client'}
      </h1>
      <p>Maaf, terjadi kesalahan. Silakan kembali ke beranda atau hubungi dukungan.</p>
      <Link href="/">
        <a>Kembali ke Beranda</a>
      </Link>
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
