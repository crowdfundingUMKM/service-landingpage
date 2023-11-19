import Head from 'next/head'


export default function ErrorLayout({ children }) {
    return (
      <>
        <Head>
            <title>Page Not Found | Reviewer Mode</title>
            <meta name="description" content="Error Page Crowdfunding UMKM"/>
        </Head>
        {children}
      </>
    );
  }
  
  