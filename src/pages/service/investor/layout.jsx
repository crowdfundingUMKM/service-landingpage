import Head from 'next/head'

export default function ServiceInvestorLayout({ children }) {
    return (
      <>
        <Head>
            <title>Beri Modal Pada UMKM - Crowdfunding UMKM</title>
        </Head>
        {children}
      </>
    );
  }
  