import Head from 'next/head'

export default function CampaignDetailsLayout({ children }) {
    return (
      <>
        <Head>
            <title>Donasi Sekarang, Crowdfunding UMKM</title>
        </Head>
        {children}
      </>
    );
  }
  