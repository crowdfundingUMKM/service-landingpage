import Head from 'next/head'

export default function TermsLayout({ children }) {
    return (
      <>
        <Head>
            <title>Syarat & Ketentuan - Crowdfunding UMKM</title>
        </Head>
        {children}
      </>
    );
  }
  