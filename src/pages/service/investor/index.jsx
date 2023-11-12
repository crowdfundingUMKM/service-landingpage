import ServiceInvestorLayout from '@/pages/service/investor/layout';
import Link from 'next/link';

export default function ServiceInvestor() {

    return (
        <ServiceInvestorLayout>
            <main>
                <section className="page-header bg-tertiary">
                    <div className="container">
                    <div className="row">
                        <div className="col-8 mx-auto text-center">
                        <h2 className="mb-3 text-capitalize">Beri Modal UMKM</h2>
                        <ul
                            className="list-inline breadcrumbs text-capitalize"
                            style={{ fontWeight: 500 }}
                        >
                            <li className="list-inline-item">
                            <a href="index.html">Home</a>
                            </li>
                            <li className="list-inline-item">
                            / &nbsp; <a href="services.html">Services</a>
                            </li>
                            <li className="list-inline-item">
                            / &nbsp; <a href="midtrans-terms.html">Investor</a>
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
                            <h4 className="has-line-end">Investor</h4>
                            <nav id="TableOfContents">
                            <ul>
                                <li>
                                <a href="#apa-investor">
                                    Apa itu Investor pada Crowdfunding UMKM?
                                </a>
                                <ul>
                                    <li>
                                    <a href="#keamanan-investor">
                                        Apakah investor nantinya akan mendapatkan keamanan dalam
                                        bertransaksi?
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#dana-investor">
                                        Siapa yang akan menerima dana dari investor?
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#profit-investor">
                                        Kapan investor akan menerima profit?
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#data-crowdfunding">
                                        Apakah data yang ada pada crowdfundingUMKM aman?
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#pajak-investor">
                                        Bagaimana pajak yang didapatkan?
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#pelanggaran-umkm">
                                        Jika adanya pelaku usaha yang melanggar apakah dana akan
                                        di kembalikan?
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#pihak-crowdfunding">
                                        Apakah sistem crowdfunding ini akan di awasi oleh pihak
                                        ke-tiga?
                                    </a>
                                    </li>
                                </ul>
                                </li>
                                <li>
                                <a href="#kerja-investor">Bagaimana Cara Kerja Investor.</a>
                                </li>
                                <li>
                                <a href="#layanan-investor">
                                    Layanan apa yang di tawarkan sebagai investor
                                </a>
                                </li>
                                <li>
                                <a href="#gabung-sekarang">Gabung Sekarang</a>
                                </li>
                            </ul>
                            </nav>
                        </div>
                        </div>
                        <div className="col-lg-8">
                        <div className="content">
                            <h2 id="apa-investor">Apa itu Investor pada Crowdfunding UMKM?</h2>
                            <p>
                            Investor pada Crowdfunding UMKM adalah para pengguna yang berperan
                            sebagai pemberi modal atau pendana dalam mendukung proyek-proyek
                            UMKM yang ada di platform Crowdfunding. Para investor memiliki
                            kesempatan untuk memberikan dukungan finansial kepada
                            proyek-proyek yang menarik minat mereka, serta memantau dan
                            melihat perkembangan dana yang terkumpul dalam setiap proyek.
                            Sebagai investor, mereka memiliki akses untuk melihat seberapa
                            jauh progres pendanaan yang telah tercapai, dan jika proyek telah
                            berhasil mencapai target dana 100%, sesuai dengan kesepakatan
                            dalam proposal yang diajukan oleh pelaku usaha atau campaign,
                            investor berhak mendapatkan imbal hasil atau profit sesuai dengan
                            persentase yang telah disepakati.
                            </p>
                            <p>
                            Partisipasi para investor ini membawa manfaat ganda, selain
                            mendukung pertumbuhan UMKM di Indonesia, mereka juga memiliki
                            kesempatan untuk mendapatkan keuntungan finansial dari
                            proyek-proyek yang sukses. Dengan adanya investor, para pelaku
                            usaha UMKM dapat memperoleh modal untuk mengembangkan usaha
                            mereka, sementara investor dapat menjadi bagian dari kesuksesan
                            proyek-proyek tersebut. Selain itu, transparansi dan akuntabilitas
                            dalam pengelolaan dana dan pengembalian keuntungan akan menjadi
                            fokus utama dalam membangun hubungan saling percaya antara pelaku
                            usaha dan investor. Hal ini juga akan mendorong pertumbuhan dan
                            kemajuan komunitas Crowdfunding UMKM, serta mendukung perekonomian
                            dan perkembangan UMKM di Indonesia secara lebih luas.
                            </p>
                            <h3 id="keamanan-investor">
                            Apakah investor nantinya akan mendapatkan keamanan dalam
                            bertransaksi?
                            </h3>
                            <p>
                            Tentu saja, investor akan mendapatkan keamanan yang terjamin dalam
                            bertransaksi pada platform Crowdfunding UMKM. Hal ini disebabkan
                            karena Crowdfunding UMKM telah terintegrasi dengan Midtrans,
                            sebuah sistem pembayaran yang telah terpercaya dan memiliki
                            standar keamanan yang tinggi. Dengan menggunakan Midtrans, setiap
                            transaksi pembayaran yang dilakukan oleh investor akan diproses
                            dengan aman dan terjamin kerahasiaannya. Midtrans menggunakan
                            teknologi enkripsi data dan sistem anti-fraud yang canggih untuk
                            melindungi informasi keuangan pengguna dari potensi ancaman
                            keamanan. Selain itu, transaksi menggunakan beragam metode
                            pembayaran, seperti kartu kredit, debit card, e-wallet, dan bank
                            transfer, memberikan fleksibilitas dan kemudahan bagi investor
                            dalam melakukan pembayaran. Dengan dukungan dari Midtrans,
                            investor dapat dengan tenang bertransaksi dan mendukung
                            proyek-proyek UMKM yang menarik minat mereka, tanpa khawatir
                            mengenai keamanan dan kerahasiaan data mereka.
                            </p>
                            <h3 id="dana-investor">
                            Siapa yang akan menerima dana dari investor?
                            </h3>
                            <p>
                            Dana yang diberikan oleh investor akan dikelola dengan
                            transparansi dan profesionalisme oleh Crowdfunding UMKM. Setelah
                            campaign atau proyek yang dibuka oleh pelaku usaha mencapai target
                            100%, dana yang terkumpul akan disalurkan kepada pemilik usaha
                            sesuai dengan kesepakatan yang telah diatur dalam proposal. Proses
                            penyaluran dana akan dilakukan secara cepat dan efisien untuk
                            memastikan bahwa para pelaku usaha dapat segera memanfaatkannya
                            dalam pengembangan dan pertumbuhan UMKM mereka. Crowdfunding UMKM
                            berkomitmen untuk memberikan layanan yang terpercaya dan
                            memastikan bahwa dana yang diterima dari investor akan disalurkan
                            dengan transparan dan tepat sasaran, sehingga dapat memberikan
                            manfaat yang maksimal bagi UMKM dalam mencapai kesuksesan dan
                            kesejahteraan.
                            </p>
                            <h3 id="profit-investor">Kapan investor akan menerima profit?</h3>
                            <p>
                            Investor akan menerima profit sesuai dengan kesepakatan yang
                            tercantum dalam proposal yang diajukan oleh pelaku usaha atau
                            campaign pada platform Crowdfunding UMKM. Setiap proposal akan
                            menjelaskan bagaimana dana yang terkumpul akan digunakan untuk
                            mengembangkan bisnis atau proyek UMKM tersebut. Para investor akan
                            diberikan informasi yang jelas mengenai perkiraan keuntungan dan
                            proyeksi hasil yang dapat diharapkan dari investasi mereka.
                            </p>
                            <p>
                            Tenang saja, pihak Crowdfunding UMKM akan melakukan evaluasi dan
                            analisis menyeluruh terhadap setiap proposal yang diajukan. Hal
                            ini bertujuan untuk memastikan bahwa setiap bisnis atau proyek
                            yang didukung oleh investor memiliki potensi yang baik untuk
                            berhasil dan memberikan keuntungan yang sesuai dengan harapan.
                            Dengan begitu, para investor akan menerima profit secara
                            transparan dan adil sesuai dengan performa dan kesuksesan proyek
                            UMKM yang mereka dukung.
                            </p>
                            <p>
                            Sebagai investor, Anda dapat berharap untuk menerima hasil yang
                            menguntungkan dari investasi Anda, karena Crowdfunding UMKM akan
                            bekerja keras untuk membantu pelaku usaha dalam mencapai
                            kesuksesan. Selain itu, perlu dicatat bahwa investor berperan
                            penting dalam pertumbuhan dan perkembangan UMKM, sehingga
                            Crowdfunding UMKM berkomitmen untuk memberikan keuntungan yang
                            adil dan kompetitif bagi para investor. Jika Anda tertarik untuk
                            membantu memajukan dan membantu UMKM dengan keahlian Anda, menjadi
                            investor di Crowdfunding UMKM adalah pilihan yang tepat.
                            </p>
                            <h3 id="data-crowdfunding">
                            Apakah data yang ada pada crowdfundingUMKM aman?
                            </h3>
                            <p>
                            Tentu saja, keamanan data pengguna adalah prioritas utama di
                            Crowdfunding UMKM. Kami terus melakukan pembaruan dan peningkatan
                            keamanan sistem kami untuk memastikan bahwa data pengguna
                            terlindungi dengan baik. Tim kami selalu melakukan pengawasan
                            secara rutin dan melakukan pengujian keamanan untuk
                            mengidentifikasi dan mengatasi potensi masalah yang dapat muncul.
                            Selain itu, kami juga memiliki kebijakan privasi yang ketat dan
                            mengikuti standar keamanan industri untuk menjaga kerahasiaan
                            informasi pengguna. Dengan upaya kami yang berkelanjutan untuk
                            meningkatkan keamanan, para pengguna tidak perlu khawatir akan
                            adanya pelanggaran atau bug pada platform Crowdfunding UMKM.
                            </p>
                            <h3 id="pajak-investor">Bagaimana pajak yang didapatkan?</h3>
                            <p>
                            Pajak yang diterapkan dalam Crowdfunding UMKM akan diatur dan
                            dikelola secara transparan oleh sistem kami. Para pelaku usaha,
                            investor, dan konsultan tidak perlu khawatir tentang perhitungan
                            pajak, karena sistem kami telah terintegrasi dengan peraturan
                            perpajakan yang berlaku. Selain itu, para konsultan yang
                            berpengalaman akan membantu dalam proses perhitungan dan
                            pemotongan pajak yang sesuai dengan hukum yang berlaku, sehingga
                            para investor tidak perlu repot mengurus pajak secara mandiri.
                            </p>
                            <p>
                            Kami memahami pentingnya keterbukaan dan kejelasan terkait pajak
                            dalam investasi maupun bisnis. Oleh karena itu, kami akan
                            menyediakan laporan pajak secara rinci yang dapat diakses oleh
                            para pengguna, termasuk para investor, sehingga mereka dapat
                            dengan mudah memahami jumlah pajak yang dikenakan dan bagaimana
                            penghitungannya. Dengan adanya dukungan dari para konsultan yang
                            ahli di bidangnya, Crowdfunding UMKM berkomitmen untuk memberikan
                            pengalaman investasi yang aman, transparan, dan bebas dari
                            kerumitan terkait pajak.
                            </p>
                            <p>
                            Perlu diingat bahwa perpajakan dapat berbeda-beda tergantung pada
                            jenis investasi dan peraturan di setiap negara atau wilayah. Oleh
                            karena itu, Crowdfunding UMKM juga akan memastikan bahwa informasi
                            terkait pajak yang kami berikan telah sesuai dengan peraturan
                            perpajakan yang berlaku di masing-masing wilayah operasional kami.
                            Dengan begitu, para pengguna dapat dengan nyaman dan tenang
                            berinvestasi dalam platform kami tanpa perlu khawatir tentang
                            masalah perpajakan.
                            </p>
                            <h3 id="pelanggaran-umkm">
                            Jika adanya pelaku usaha yang melanggar apakah dana akan di
                            kembalikan?
                            </h3>
                            <p>
                            Kami sebagai pihak Crowdfunding UMKM memiliki komitmen kuat dalam
                            memastikan integritas dan keamanan platform kami. Jika ada pelaku
                            usaha yang terbukti melanggar aturan atau terlibat dalam tindakan
                            penipuan atau kecurangan, kami akan mengambil tindakan tegas dan
                            segera. Dana yang telah terkumpul dari investor akan tetap aman di
                            sistem kami dan tidak akan dicairkan jika terdapat indikasi
                            pelanggaran atau ketidakpatuhan.
                            </p>
                            <p>
                            Kami akan melakukan investigasi mendalam terhadap setiap laporan
                            atau indikasi pelanggaran yang diterima. Jika pelanggaran
                            terbukti, kami akan memberikan peringatan keras kepada pelaku
                            usaha yang bersangkutan dan mengambil tindakan preventif agar
                            pelanggaran tidak berlanjut. Jika dana sudah ada pada sistem kami,
                            kami akan menghentikan proses pencairan dan menyimpan dana dengan
                            aman hingga semua masalah teratasi.
                            </p>
                            <p>
                            Selain itu, jika diperlukan, kami juga akan bekerja sama dengan
                            pihak hukum dan lembaga berwenang untuk mengambil langkah hukum
                            yang sesuai dengan peraturan dan undang-undang yang berlaku. Kami
                            akan memberikan dukungan penuh dalam upaya memberantas penipuan
                            dan kecurangan, serta mendampingi proses hukum untuk memastikan
                            pelaku usaha yang bertindak tidak sesuai dengan etika bisnis dan
                            hukum mendapatkan konsekuensi yang setimpal.
                            </p>
                            <p>
                            Komitmen kami dalam membangun dan mendukung kesuksesan UMKM di
                            Indonesia tidak hanya berfokus pada aspek keuangan, tetapi juga
                            pada keberlanjutan, transparansi, dan integritas. Dengan adanya
                            mekanisme pengawasan dan penerapan aturan yang ketat, kami
                            berusaha menjaga kepercayaan para investor dan para pelaku usaha
                            dalam platform Crowdfunding UMKM.
                            </p>
                            <h3 id="pihak-crowdfunding">
                            Apakah sistem crowdfunding ini akan di awasi oleh pihak ke-tiga?
                            </h3>
                            <p>
                            Ya, sistem Crowdfunding UMKM akan diawasi oleh pihak ketiga
                            sebagai bagian dari upaya kami untuk memastikan integritas dan
                            keamanan platform. Kami bekerja sama dengan pihak hukum dan
                            Otoritas Jasa Keuangan (OJK) untuk memastikan bahwa setiap
                            transaksi dan kegiatan di platform kami sesuai dengan hukum dan
                            peraturan yang berlaku.
                            </p>
                            <p>
                            Komitmen kami terhadap transparansi dan keberlanjutan UMKM
                            menjadikan kerjasama dengan pihak ketiga sebagai langkah penting
                            dalam mengawasi dan memantau jalannya sistem Crowdfunding. Kami
                            berusaha menjaga kepercayaan dari seluruh pihak yang terlibat,
                            baik itu investor, pelaku usaha, maupun masyarakat umum dengan
                            melakukan tindakan pencegahan dan pengawasan yang ketat.
                            </p>
                            <p>
                            Dengan adanya pengawasan dari pihak ketiga, kami berharap dapat
                            mencegah terjadinya penipuan, kecurangan, dan aktivitas ilegal
                            lainnya di platform kami. Transparansi dalam pelaporan dan
                            pengelolaan dana menjadi fokus utama kami, sehingga setiap langkah
                            dan keputusan yang diambil dapat dipertanggungjawabkan secara
                            akuntabel. Dengan dukungan pihak ketiga, kami berkomitmen untuk
                            terus meningkatkan kualitas layanan kami agar Crowdfunding UMKM
                            menjadi solusi yang efektif dan terpercaya bagi pertumbuhan UMKM
                            di Indonesia.
                            </p>
                            <hr />
                            <h2 id="kerja-investor">Bagaimana Cara Kerja Investor.</h2>
                            <div
                            style={{
                                position: "relative",
                                paddingBottom: "56.25%",
                                height: 0,
                                overflow: "hidden"
                            }}
                            >
                            <iframe
                                src="https://www.youtube.com/embed/jgAsPXRhTLQ"
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
                            <h2 id="layanan-kami">
                            Apa layanan yang kami sediakan sebagai pengembang admin?
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
                            <h3 id="layanan-investor">
                            Layanan apa yang di tawarkan sebagai investor
                            </h3>
                            <ul>
                            <li>
                                Investor dapat memberikan donasi untuk mendukung proyek UMKM
                                yang menarik minat dan sesuai dengan tujuan investasi mereka.
                            </li>
                            <li>
                                Dengan berinvestasi pada proyek UMKM, investor berpeluang
                                mendapatkan keuntungan yang berdasarkan bagi hasil dari
                                kesuksesan proyek tersebut.
                            </li>
                            <li>
                                Crowdfunding UMKM menyediakan platform yang aman dan mudah
                                digunakan, memastikan kenyamanan bagi investor dalam memberikan
                                dana.
                            </li>
                            <li>
                                Investor akan memiliki akses penuh terhadap informasi dan
                                perkembangan proyek UMKM yang mereka dukung, sehingga dapat
                                memantau perkembangan investasi mereka secara transparan.
                            </li>
                            <li>
                                Dengan berinvestasi pada UMKM, investor turut berperan dalam
                                mendukung pertumbuhan dan kemajuan sektor UMKM di Indonesia.
                            </li>
                            <li>
                                Crowdfunding UMKM menyediakan beragam pilihan proyek yang dapat
                                diinvestasikan, sehingga investor memiliki fleksibilitas untuk
                                memilih proyek yang sesuai dengan minat dan keinginan mereka.
                            </li>
                            <li>
                                Selain mendukung pertumbuhan UMKM, investor juga turut
                                berkontribusi dalam memperkuat ekonomi lokal dan menciptakan
                                dampak positif bagi masyarakat di sekitar proyek yang didukung.
                            </li>
                            </ul>
                        </div>
                        {/* gabung sekarang */}
                        <h3 id="gabung-sekarang" />
                        <div className="row">
                            <div className="col-md-6 d-flex justify-content-end">
                            <Link className="btn btn-primary mt-4 mr-4" href={process.env.NEXT_PUBLIC_REGISTER_INVESTOR} target="_blank">
                                Daftar Sekarang
                            </Link>
                            </div>
                            <div className="col-md-6 d-flex justify-content-start">
                            <Link className="btn btn-primary mt-4 ml-4" href={process.env.NEXT_PUBLIC_LOGIN_INVESTOR} target="_blank">
                                Login
                            </Link>
                            </div>
                        </div>
                        {/* end gabung sekarang */}
                        </div>
                    </div>
                    </div>
                </section>

            </main>

        </ServiceInvestorLayout>
    );
}