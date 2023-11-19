import Head from 'next/head'

export default function ServiceAdminLayout({ children }) {
    return (
      <>
        <Head>
            <title>Gabung Admin - Crowdfunding UMKM</title>
            <meta name="description" content="Kami membuka lowowngan untuk anda seorang pengetahuan dalam berbisnis dan menanjemen UMKM, kami harap anda daftar sebagai admin Plattform kami!"/>
        </Head>
        {children}
      </>
    );
  }
  