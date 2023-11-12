import Head from 'next/head'

export default function ContactAdminLayout({ children }) {
    return (
      <>
        <Head>
            <title>Kontak Admin - Crowdfunding UMKM</title>
        </Head>
        {children}
      </>
    );
  }
  