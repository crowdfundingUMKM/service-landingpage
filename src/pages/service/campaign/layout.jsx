import Head from 'next/head'

export default function ServiceCampaignLayout({ children }) {
    return (
      <>
        <Head>
            <title>Daftar UMKM Anda - Crowdfunding UMKM</title>
        </Head>
        {children}
      </>
    );
  }
  