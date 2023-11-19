import Head from 'next/head'

export default function CampaignDetailsLayout({ children }) {
    return (
      <>
        <Head>
            <title>Donasi Sekarang - Crowdfunding UMKM</title>
            <meta name="description" content="Donasi Sekarang, Anda dapat membayar pada Campaign ini."/>
            
        </Head>
        {children}
      </>
    );
  }
  