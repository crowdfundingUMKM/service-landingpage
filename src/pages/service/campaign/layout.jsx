import Head from 'next/head'

export default function ServiceCampaignLayout({ children }) {
    return (
      <>
        <Head>
            <title>Daftar UMKM Anda - Crowdfunding UMKM</title>
            <meta name="description" content="Jika anda memiliki usaha dan kekurangan modal, kami harap anda daftar sebagai Pengusaha UMKM kami!"/>

        </Head>
        {children}
      </>
    );
  }
  