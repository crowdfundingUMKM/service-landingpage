import Head from 'next/head'

export default function ServiceLayout({ children }) {
    return (
      <>
        <Head>
            <title>Service UMKM - Crowdfunding UMKM</title>
        </Head>
        {children}
      </>
    );
  }
  