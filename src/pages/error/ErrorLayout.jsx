import Head from 'next/head'


export default function ErrorLayout({ children }) {
    return (
      <>
        <Head>
            <title>Page Not Found | Reviewer Mode</title>
        </Head>
        {children}
      </>
    );
  }
  
  