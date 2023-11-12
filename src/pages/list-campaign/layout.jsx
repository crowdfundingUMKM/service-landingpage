import Head from 'next/head'

export default function ListCampaignLayout({ children }) {
    return (
      <>
        <Head>
            <title>List UMKM - Crowdfunding UMKM</title>
        </Head>
        {children}
      </>
    );
  }
  