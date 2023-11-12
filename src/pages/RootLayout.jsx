// import Script from 'next/script';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';



export default function RootLayout({ children }) {
  return (
    <>
          <Head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5"/>
            <meta name="description" content="CRWD description"/>
            <meta name="theme-name" content="CrowdfundingUMKM" />
            </Head>
            {/* Komponent Start */}
          <Header />
          {children}
          <Footer />
    </>
  );
}
