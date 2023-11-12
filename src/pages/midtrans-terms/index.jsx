import MidtransTermsLayout from '@/pages/midtrans-terms/layout';
import Link from 'next/link';
import { useEffect, useState } from 'react';


export default function MidtransTerms() {

    return (

        <MidtransTermsLayout>
            <main>
                <section className="page-header bg-tertiary">
                    <div className="container">
                    <div className="row">
                        <div className="col-8 mx-auto text-center">
                        <h2 className="mb-3 text-capitalize">Ketentuan Midtrans</h2>
                        <ul
                            className="list-inline breadcrumbs text-capitalize"
                            style={{ fontWeight: 500 }}
                        >
                            <li className="list-inline-item">
                            <Link href="/">Home</Link>
                            </li>
                            <li className="list-inline-item">
                            / &nbsp; <a href="midtrans-terms.html">Midtrans</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="has-shapes">
                    <svg
                        className="shape shape-left text-light"
                        viewBox="0 0 192 752"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        d="M-30.883 0C-41.3436 36.4248 -22.7145 75.8085 4.29154 102.398C31.2976 128.987 65.8677 146.199 97.6457 166.87C129.424 187.542 160.139 213.902 172.162 249.847C193.542 313.799 149.886 378.897 129.069 443.036C97.5623 540.079 122.109 653.229 191 728.495"
                        stroke="currentColor"
                        strokeMiterlimit={10}
                        />
                        <path
                        d="M-55.5959 7.52271C-66.0565 43.9475 -47.4274 83.3312 -20.4214 109.92C6.58466 136.51 41.1549 153.722 72.9328 174.393C104.711 195.064 135.426 221.425 147.449 257.37C168.829 321.322 125.174 386.42 104.356 450.559C72.8494 547.601 97.3965 660.752 166.287 736.018"
                        stroke="currentColor"
                        strokeMiterlimit={10}
                        />
                        <path
                        d="M-80.3302 15.0449C-90.7909 51.4697 -72.1617 90.8535 -45.1557 117.443C-18.1497 144.032 16.4205 161.244 48.1984 181.915C79.9763 202.587 110.691 228.947 122.715 264.892C144.095 328.844 100.439 393.942 79.622 458.081C48.115 555.123 72.6622 668.274 141.552 743.54"
                        stroke="currentColor"
                        strokeMiterlimit={10}
                        />
                        <path
                        d="M-105.045 22.5676C-115.506 58.9924 -96.8766 98.3762 -69.8706 124.965C-42.8646 151.555 -8.29436 168.767 23.4835 189.438C55.2615 210.109 85.9766 236.469 98.0001 272.415C119.38 336.367 75.7243 401.464 54.9072 465.604C23.4002 562.646 47.9473 675.796 116.838 751.063"
                        stroke="currentColor"
                        strokeMiterlimit={10}
                        />
                    </svg>
                    <svg
                        className="shape shape-right text-light"
                        viewBox="0 0 731 746"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        d="M12.1794 745.14C1.80036 707.275 -5.75764 666.015 8.73984 629.537C27.748 581.745 80.4729 554.968 131.538 548.843C182.604 542.703 234.032 552.841 285.323 556.748C336.615 560.64 391.543 557.276 433.828 527.964C492.452 487.323 511.701 408.123 564.607 360.255C608.718 320.353 675.307 307.183 731.29 327.323"
                        stroke="currentColor"
                        strokeMiterlimit={10}
                        />
                        <path
                        d="M51.0253 745.14C41.2045 709.326 34.0538 670.284 47.7668 635.783C65.7491 590.571 115.623 565.242 163.928 559.449C212.248 553.641 260.884 563.235 309.4 566.931C357.916 570.627 409.887 567.429 449.879 539.701C505.35 501.247 523.543 426.331 573.598 381.059C615.326 343.314 678.324 330.853 731.275 349.906"
                        stroke="currentColor"
                        strokeMiterlimit={10}
                        />
                        <path
                        d="M89.8715 745.14C80.6239 711.363 73.8654 674.568 86.8091 642.028C103.766 599.396 150.788 575.515 196.347 570.054C241.906 564.578 287.767 573.629 333.523 577.099C379.278 580.584 428.277 577.567 465.976 551.423C518.279 515.172 535.431 444.525 582.62 401.832C621.964 366.229 681.356 354.493 731.291 372.46"
                        stroke="currentColor"
                        strokeMiterlimit={10}
                        />
                        <path
                        d="M128.718 745.14C120.029 713.414 113.678 678.838 125.837 648.274C141.768 608.221 185.939 585.788 228.737 580.659C271.536 575.515 314.621 584.008 357.6 587.282C400.58 590.556 446.607 587.719 482.028 563.16C531.163 529.111 547.275 462.733 591.612 422.635C628.572 389.19 684.375 378.162 731.276 395.043"
                        stroke="currentColor"
                        strokeMiterlimit={10}
                        />
                        <path
                        d="M167.564 745.14C159.432 715.451 153.504 683.107 164.863 654.519C179.753 617.046 221.088 596.062 261.126 591.265C301.164 586.452 341.473 594.402 381.677 597.465C421.88 600.527 464.95 597.872 498.094 574.896C544.061 543.035 559.146 480.942 600.617 443.423C635.194 412.135 687.406 401.817 731.276 417.612"
                        stroke="currentColor"
                        strokeMiterlimit={10}
                        />
                        <path
                        d="M817.266 289.466C813.108 259.989 787.151 237.697 759.261 227.271C731.372 216.846 701.077 215.553 671.666 210.904C642.254 206.24 611.795 197.156 591.664 175.224C555.853 136.189 566.345 75.5336 560.763 22.8649C552.302 -56.8256 498.487 -130.133 425 -162.081"
                        stroke="currentColor"
                        strokeMiterlimit={10}
                        />
                        <path
                        d="M832.584 276.159C828.427 246.683 802.469 224.391 774.58 213.965C746.69 203.539 716.395 202.246 686.984 197.598C657.573 192.934 627.114 183.85 606.982 161.918C571.172 122.883 581.663 62.2275 576.082 9.55873C567.62 -70.1318 513.806 -143.439 440.318 -175.387"
                        stroke="currentColor"
                        strokeMiterlimit={10}
                        />
                        <path
                        d="M847.904 262.853C843.747 233.376 817.789 211.084 789.9 200.659C762.011 190.233 731.716 188.94 702.304 184.292C672.893 179.627 642.434 170.544 622.303 148.612C586.492 109.577 596.983 48.9211 591.402 -3.74766C582.94 -83.4382 529.126 -156.746 455.638 -188.694"
                        stroke="currentColor"
                        strokeMiterlimit={10}
                        />
                        <path
                        d="M863.24 249.547C859.083 220.07 833.125 197.778 805.236 187.353C777.347 176.927 747.051 175.634 717.64 170.986C688.229 166.321 657.77 157.237 637.639 135.306C601.828 96.2707 612.319 35.6149 606.738 -17.0538C598.276 -96.7443 544.462 -170.052 470.974 -202"
                        stroke="currentColor"
                        strokeMiterlimit={10}
                        />
                    </svg>
                    </div>
                </section>
                <section className="section-sm">
                    <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-4 mb-5 mb-lg-0">
                        <div
                            className="bg-white shadow rounded-lg p-4 sticky-top"
                            style={{ top: 30 }}
                        >
                            <h4 className="has-line-end">Midtrans</h4>
                            <nav id="TableOfContents">
                            <ul>
                                <li>
                                <a href="#apa-midtrans">Apa itu Midtrans</a>
                                <ul>
                                    <li>
                                    <a href="#keamanan-midtrans">
                                        Apakah midtrans sudah memiliki keamanan yang terjamin?{" "}
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#bagaimana-midtrans">
                                        Bagaimana midtrans menjadi sistem pembayaran pada
                                        Crowdfunding?
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#dana-midtrans">
                                        Apakah dana yang sudah masuk pada midtrans bisa di
                                        mintak kembali?
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#legalitas-midtrans">
                                        Apakah midtrans memiliki legilitas yang terjamin?
                                    </a>
                                    </li>
                                </ul>
                                </li>
                                <li>
                                <a href="#kerja-midtrans">Bagaimana Cara Kerja Midtrans.</a>
                                </li>
                                <li>
                                <a href="#bantuan-midtrans">
                                    Bagaimana midtrans membantu dalam bertransaksi?
                                </a>
                                </li>
                                <li>
                                <a href="#gabung-sekarang">Pelajari Lebih Lanjut</a>
                                </li>
                            </ul>
                            </nav>
                        </div>
                        </div>
                        <div className="col-lg-8">
                        <div className="content">
                            <h2 id="apa-midtrans">Apa itu Midtrans</h2>
                            <p>
                            Midtrans adalah sebuah platform pembayaran yang digunakan oleh
                            Crowdfunding UMKM untuk memfasilitasi transaksi pembayaran dalam
                            platform mereka. Dengan Midtrans, para pelaku usaha dan investor
                            dapat melakukan pembayaran secara mudah dan aman melalui berbagai
                            metode pembayaran yang disediakan. Platform ini memberikan
                            keleluasaan bagi pengguna untuk memilih cara pembayaran yang
                            paling sesuai dengan kebutuhan mereka, mulai dari transfer bank,
                            kartu kredit, e-wallet, hingga pembayaran melalui gerai ritel.
                            </p>
                            <p>
                            Keberadaan Midtrans dalam platform Crowdfunding UMKM memberikan
                            kemudahan dan kenyamanan dalam bertransaksi, sehingga para
                            pengguna tidak perlu repot-repot mencari cara pembayaran yang
                            berbeda. Selain itu, dengan dukungan dari Midtrans, transaksi
                            pembayaran dapat dilakukan dengan keamanan yang terjamin, sehingga
                            para pelaku usaha dan investor dapat memiliki ketenangan pikiran
                            saat melakukan transaksi di dalam platform. Pengguna juga dapat
                            melacak dan memantau status pembayaran mereka dengan mudah melalui
                            fitur-fitur yang disediakan oleh Midtrans. Semua ini menjadikan
                            Midtrans sebagai salah satu solusi pembayaran yang handal dan
                            efisien dalam platform Crowdfunding UMKM, mendukung pertumbuhan
                            dan kemajuan bisnis para pelaku usaha serta memudahkan investor
                            dalam berinvestasi pada proyek-proyek yang menarik.
                            </p>
                            <h3 id="keamanan-midtrans">
                            Apakah midtrans sudah memiliki keamanan yang terjamin?
                            </h3>
                            <p>
                            Ya, Midtrans telah menyediakan sistem keamanan yang terjamin untuk
                            memastikan keamanan transaksi pembayaran bagi pengguna. Mereka
                            memiliki langkah-langkah keamanan yang ketat untuk melindungi data
                            pribadi dan informasi keuangan pengguna, serta mencegah potensi
                            penipuan dan aktivitas ilegal lainnya. Untuk informasi lebih
                            lanjut mengenai keamanan yang ditawarkan oleh Midtrans, pengguna
                            dapat mengakses halaman berikut:{" "}
                            <a href="https://support.midtrans.com/hc/id/sections/200525504-Penipuan-dan-Keamanan">
                                Keamanan Midtrans
                            </a>
                            . Hal ini membuktikan bahwa Midtrans merupakan mitra yang
                            tepercaya dalam menyediakan sistem pembayaran yang aman dan andal
                            bagi platform Crowdfunding UMKM, memberikan rasa percaya dan
                            kepuasan kepada para pengguna dalam bertransaksi di dalam platform
                            tersebut.
                            </p>
                            <h3 id="bagaimana-midtrans">
                            Bagaimana midtrans menjadi sistem pembayaran pada Crowdfunding?
                            </h3>
                            <p>
                            Midtrans menjadi sistem pembayaran pada Crowdfunding UMKM melalui
                            integrasi yang dilakukan oleh pengembang admin platform. Dengan
                            integrasi Midtrans, para pelaku usaha dan investor memiliki
                            fleksibilitas dalam memilih metode pembayaran yang sesuai dengan
                            preferensi mereka. Pengguna dapat menggunakan berbagai metode
                            pembayaran, seperti debit card, kartu kredit, e-wallet seperti
                            GoPay, ShopeePay, atau QRIS, serta metode pembayaran lain yang
                            disediakan oleh Midtrans. Integrasi ini memberikan kemudahan bagi
                            para pengguna dalam bertransaksi, karena mereka dapat menggunakan
                            metode pembayaran yang sudah familiar dan mudah diakses. Selain
                            itu, kehadiran Midtrans sebagai sistem pembayaran juga menjamin
                            keamanan transaksi, sehingga para pelaku usaha dan investor dapat
                            bertransaksi dengan percaya diri dan tanpa khawatir akan masalah
                            keamanan. Semua ini menjadikan Midtrans sebagai pilihan yang tepat
                            dan handal dalam menyediakan sistem pembayaran yang efisien dan
                            aman bagi platform Crowdfunding UMKM.
                            </p>
                            <h3 id="dana-midtrans">
                            Apakah dana yang sudah masuk pada midtrans bisa di mintak kembali?
                            </h3>
                            <p>
                            Tidak, dana yang sudah masuk ke Midtrans pada platform
                            Crowdfunding UMKM tidak dapat diminta kembali oleh pengguna.
                            Setelah dana berhasil dikirim melalui transaksi, dana tersebut
                            akan langsung masuk ke akun Midtrans yang dikelola oleh
                            Crowdfunding UMKM. Jika terjadi pelanggaran atau kegiatan yang
                            melanggar ketentuan pada suatu campaign atau UMKM, pihak admin dan
                            pengembang akan mengambil tindakan untuk menghentikan atau
                            membatalkan campaign tersebut. Namun, dana yang sudah masuk ke
                            platform tidak dapat dikembalikan kepada pengguna karena telah
                            digunakan untuk mendukung proyek atau campaign yang dimaksud.
                            </p>
                            <p>
                            Oleh karena itu, pihak Crowdfunding UMKM sangat berkomitmen untuk
                            menjaga keamanan dan transparansi dalam setiap proyek atau
                            campaign yang ada di platform. Setiap campaign dan UMKM akan
                            ditinjau dengan cermat oleh konsultan dan tim pengembang untuk
                            memastikan bahwa proyek tersebut sesuai dengan ketentuan dan tidak
                            melanggar undang-undang yang berlaku. Dengan demikian, para
                            pengguna dapat memiliki keyakinan bahwa dana yang mereka
                            investasikan akan digunakan dengan bijaksana dan akan mendukung
                            proyek yang benar-benar memiliki potensi untuk sukses dan
                            menguntungkan.
                            </p>
                            <h3 id="legalitas-midtrans">
                            Apakah midtrans memiliki legilitas yang terjamin?
                            </h3>
                            <p>
                            Ya, Midtrans memiliki legitimasi yang terjamin dan telah
                            terverifikasi oleh badan hukum. Midtrans adalah perusahaan yang
                            telah resmi terdaftar dan diakui oleh pemerintah, serta telah
                            mendapatkan sertifikasi dari otoritas yang berwenang. Sebagai
                            payment gateway yang telah beroperasi secara nasional, Midtrans
                            telah memberikan kontribusi yang signifikan dalam memfasilitasi
                            proses pembayaran online bagi berbagai jenis bisnis dan industri.
                            Keberadaan Midtrans sebagai salah satu layanan pembayaran
                            terkemuka di Indonesia telah membantu banyak perusahaan dan pelaku
                            usaha dalam mengelola transaksi pembayaran dengan aman, efisien,
                            dan andal. Dengan reputasi yang baik dan dukungan dari pemerintah,
                            Midtrans memberikan jaminan keamanan dan kepercayaan bagi pengguna
                            dalam bertransaksi melalui platform Crowdfunding UMKM.
                            </p>
                            <hr />
                            <h2 id="kerja-midtrans">Bagaimana Cara Kerja Midtrans.</h2>
                            <div
                            style={{
                                position: "relative",
                                paddingBottom: "56.25%",
                                height: 0,
                                overflow: "hidden"
                            }}
                            >
                            <iframe
                                src="https://www.youtube.com/embed/EGfcVcoezHY"
                                style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                border: 0
                                }}
                                allowFullScreen=""
                                title="YouTube Video"
                            />
                            </div>
                            <hr />
                            <h2 id="bantuan-midtrans">
                            Bagaimana midtrans membantu dalam bertransaksi?
                            </h2>
                            <p>
                            Sebagai pengembang admin pada platform Crowdfunding UMKM, kami
                            menyediakan berbagai layanan yang mendukung pengelolaan dan
                            pengembangan sistem secara menyeluruh. Admin memiliki peran kunci
                            dalam mengaktifkan atau menonaktifkan pengguna, termasuk user
                            investor, user campaign, dan user konsultan, guna menjaga keamanan
                            dan kualitas layanan. Selain itu, admin juga bertugas menangani
                            setiap masalah dan error yang dihadapi oleh pengguna, memberikan
                            solusi yang tepat untuk memastikan kelancaran pengalaman mereka
                            dalam menggunakan platform Crowdfunding UMKM. Seluruh proses
                            manajemen dan pemeliharaan sistem akan dilakukan bersama-sama
                            untuk mendorong kemajuan komunitas Crowdfunding UMKM dan
                            menghadirkan dampak positif bagi pelaku usaha UMKM.
                            </p>
                            <ul>
                            <li>
                                menyediakan beragam pilihan metode pembayaran, termasuk kartu
                                kredit, debit card, e-wallet, dan bank transfer, memberikan
                                fleksibilitas bagi pengguna dalam melakukan transaksi.
                            </li>
                            <li>
                                Integrasi Midtrans pada platform Crowdfunding UMKM memastikan
                                proses pembayaran berjalan lancar dan efisien, menghindari
                                potensi kesalahan dalam pengelolaan transaksi.
                            </li>
                            <li>
                                Midtrans memiliki tingkat keamanan yang tinggi dengan
                                menggunakan teknologi enkripsi data dan sistem anti-fraud,
                                melindungi informasi keuangan pengguna dari ancaman keamanan.
                            </li>
                            <li>
                                Dengan dukungan dari Midtrans, pengguna dapat melakukan
                                pembayaran dalam waktu nyaris instan, memastikan proses
                                transaksi yang cepat dan mudah.
                            </li>
                            <li>
                                Midtrans menyediakan dashboard dan laporan transaksi secara
                                real-time, memudahkan pengguna untuk memantau dan mengelola
                                transaksi secara efektif.
                            </li>
                            <li>
                                Pengguna dapat dengan mudah mengintegrasikan sistem pembayaran
                                Midtrans dengan platform Crowdfunding UMKM, sehingga proses
                                transaksi dapat diotomatisasi dan lebih efisien.
                            </li>
                            <li>
                                Tata cara menggunakan sistem pembayaran pada platform
                                Crowdfunding UMKM sangat sederhana, pengguna hanya perlu memilih
                                metode pembayaran yang diinginkan, memasukkan informasi yang
                                diperlukan, dan menyelesaikan transaksi dengan mudah dan aman.
                            </li>
                            </ul>
                        </div>
                        {/* gabung sekarang */}
                        <h3 id="gabung-sekarang" />
                        <div className="row">
                            <div className="col-md-6 d-flex ">
                            <Link
                                className="btn btn-primary mt-4 mr-4"
                                href="https://midtrans.com/id/biaya"
                                target="_blank"
                            >
                                Lebih Lanjut Midtrans
                            </Link>
                            </div>
                        </div>
                        {/* end gabung sekarang */}
                        </div>
                    </div>
                    </div>
                </section>

            </main>
        </MidtransTermsLayout>
    )
}