import Head from 'next/head'

export default function ServiceLayout({ children }) {
    return (
      <>
        <Head>
            <title>Service UMKM - Crowdfunding UMKM</title>
            <meta name="description" content="Pilihan apa saja yang bisa anda lakukan pada platform kami!"/>

        </Head>
        {children}
      </>
    );
  }
  