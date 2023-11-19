import Head from 'next/head'

export default function ListCampaignLayout({ children }) {
    return (
      <>
        <Head>
            <title>List UMKM - Crowdfunding UMKM</title>
            <meta name="description" content="List UMKM, Daftar UMKM Crowdfunding yang sedang dibuka."/>
        </Head>
        {children}
      </>
    );
  }
  