import Head from 'next/head'

export default function ContactAdminLayout({ children }) {
    return (
      <>
        <Head>
            <title>Kontak Admin - Crowdfunding UMKM</title>
            <meta name="description" content="Hubungi kami jika anda butuh bantuan!"/>

        </Head>
        {children}
      </>
    );
  }
  