import Head from 'next/head'

export default function ServiceReviewerLayout({ children }) {
    return (
      <>
        <Head>
            <title>Gabung Konsultan - Crowdfunding UMKM</title>
            <meta name="description" content="Jika anda seorang ahli dalam sistem manajemen UMKM, kami harap anda daftar sebagai Konsultan UMKM kami!"/>
        </Head>
        {children}
      </>
    );
  }
  