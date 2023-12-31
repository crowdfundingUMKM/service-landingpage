import RootLayout from '@/pages/RootLayout';
import Script from 'next/script';
import { useState, useEffect } from 'react';
import "@/styles/style.css";
// import "bootstrap/dist/css/bootstrap.min.css"

export default function App({ Component, pageProps }) {

  const Layout = Component.layout || RootLayout;


  // const [isScriptReady, setIsScriptReady] = useState(false);

  // useEffect(() => {
  //   // Cek jika window ada, yang berarti kita berada di client-side
  //   if (typeof window !== 'undefined') {
  //     // asumsikan skrip siap di sisi client
  //     setIsScriptReady(true);
  //   }
  // }, []);

  return (
    <Layout Layout>

      <Component {...pageProps} />
        <Script src="/assets/plugins/jquery/jquery.min.js" />
        <Script src="/assets/plugins/bootstrap/bootstrap.min.js" strategy="afterInteractive" />

        {/* <Script src="/assets/plugins/slick/slick.min.js" strategy="afterInteractive"/> */}
        
        <Script src="/assets/js/script.js" strategy="afterInteractive"/>
        {/* <Script src="/assets/plugins/scrollmenu/scrollmenu.min.js" strategy="afterInteractive" /> */}

    </Layout>

  )
}
