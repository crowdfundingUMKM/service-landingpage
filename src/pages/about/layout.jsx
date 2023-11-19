import Head from 'next/head'

export default function AboutLayout({ children }) {
    return (
      <>
        <Head>
            <title>Tentang Kami - Crowdfunding UMKM</title>
            <meta name="description" content="Tentang informasi platform kami."/>
        </Head>
        {children}
      </>
    );
  }
  