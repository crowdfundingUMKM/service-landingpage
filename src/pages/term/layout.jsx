import Head from 'next/head'

export default function TermsLayout({ children }) {
    return (
      <>
        <Head>
            <title>Syarat & Ketentuan - Crowdfunding UMKM</title>
            <meta name="description" content="Syarat & Ketentuan, Crowdfunding UMKM Terms"/>
        </Head>
        {children}
      </>
    );
  }
  