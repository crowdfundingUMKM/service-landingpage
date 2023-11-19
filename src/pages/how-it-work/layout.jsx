import Head from 'next/head'

export default function HowItWorkLayout({ children }) {
    return (
      <>
        <Head>
            <title>Bagaimana Kami Kerja - Crowdfunding UMKM</title>
            <meta name="description" content="Bagaimana kami kerja"/>
        </Head>
        {children}
      </>
    );
  }
  