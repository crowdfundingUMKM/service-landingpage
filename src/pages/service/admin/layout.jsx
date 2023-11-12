import Head from 'next/head'

export default function ServiceAdminLayout({ children }) {
    return (
      <>
        <Head>
            <title>Gabung Admin - Crowdfunding UMKM</title>
        </Head>
        {children}
      </>
    );
  }
  