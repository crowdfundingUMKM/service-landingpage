import Image from 'next/image'
import Link from 'next/link'

import ErrorLayout from '@/pages/error/ErrorLayout'

function Custom404() {
    return (
        <section className="section d-flex justify-content-center align-items-center">
            <div className="container">
                <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 text-center">
                    <Image
                    src="/assets/images/status/404.svg"
                    alt=""
                    className="img-fluid pt-5 mt-5"
                    width={300}
                    height={300}
                    loading="eager"
                    />
                    <h4 className="mt-5 mb-2">Halaman Tidak Ditemukan</h4>
                    <p>Maaf, halaman yang Anda cari tidak dapat ditemukan.</p>
                    <Link href="/" className="btn btn-primary">
                    Kembali ke Halaman Utama
                    </Link>
                </div>
                </div>
            </div>
    </section>

    )
}

// Tentukan layout khusus untuk halaman ini
Custom404.layout = ErrorLayout;


export default Custom404;