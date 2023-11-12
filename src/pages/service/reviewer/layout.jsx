import Head from 'next/head'

export default function ServiceReviewerLayout({ children }) {
    return (
      <>
        <Head>
            <title>Gabung Konsultan - Crowdfunding UMKM</title>
        </Head>
        {children}
      </>
    );
  }
  