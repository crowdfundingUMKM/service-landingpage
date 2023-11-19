import Head from 'next/head'

export default function FaqLayout({ children }) {
    return (
      <>
        <Head>
            <title>F.A.Q - Crowdfunding UMKM</title>
            <meta name="description" content="F.A.Q informasi yang sering ditanyakan kepada platform kami."/>
        </Head>
        {children}
      </>
    );
  }
  