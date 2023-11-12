import Head from 'next/head'

export default function AboutLayout({ children }) {
    return (
      <>
        <Head>
            <title>Tentang Kami - Crowdfunding UMKM</title>
        </Head>
        {children}
      </>
    );
  }
  