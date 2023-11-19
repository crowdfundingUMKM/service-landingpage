import Head from 'next/head'

export default function HomeLayout({ children }) {
    return (
      <>
        <Head>
            <title>CrowdFunding UMKM</title>
            <meta name="description" content="Platform crowdfunding yang berfokus pada dukungan terhadap Usaha Mikro, Kecil, dan Menengah (UMKM) di Indonesia."/>
        </Head>
        {children}
      </>
    );
  }
  