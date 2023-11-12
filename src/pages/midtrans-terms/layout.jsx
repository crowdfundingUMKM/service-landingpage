import Head from 'next/head'

export default function MidtransTermsLayout({ children }) {
    return (
      <>
        <Head>
            <title>Ketentuan Midtrans - Crowdfunding UMKM</title>
        </Head>
        {children}
      </>
    );
  }
  