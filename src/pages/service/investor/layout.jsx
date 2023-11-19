import Head from 'next/head'

export default function ServiceInvestorLayout({ children }) {
    return (
      <>
        <Head>
            <title>Beri Modal Pada UMKM - Crowdfunding UMKM</title>
            <meta name="description" content="Jika anda memiliki modal dan ingin memodali UMKM, kami harap anda daftar sebagai Investor UMKM kami!"/>
        </Head>
        {children}
      </>
    );
  }
  