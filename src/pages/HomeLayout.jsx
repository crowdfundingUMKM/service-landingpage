import Head from 'next/head'

export default function HomeLayout({ children }) {
    return (
      <>
        <Head>
            <title>CrowdFunding UMKM</title>
        </Head>
        {children}
      </>
    );
  }
  