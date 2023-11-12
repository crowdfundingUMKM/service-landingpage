import ServiceReviewerLayout from '@/pages/service/reviewer/layout';
import Link from 'next/link';

export default function ServiceReviewer() {

    return (
        <ServiceReviewerLayout>

            <main>
                <section className="page-header bg-tertiary">
                    <div className="container">
                    <div className="row">
                        <div className="col-8 mx-auto text-center">
                        <h2 className="mb-3 text-capitalize">Gabung Konsultan UMKM</h2>
                        <ul
                            className="list-inline breadcrumbs text-capitalize"
                            style={{ fontWeight: 500 }}
                        >
                            <li className="list-inline-item">
                            <a href="index.html">Home</a>
                            </li>
                            <li className="list-inline-item">
                            / &nbsp; <a href="services.htm">Services</a>
                            </li>
                            <li className="list-inline-item">
                            / &nbsp; <a href="req-konsultan.html">Gabung Konsultan UMKM</a>
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
                            <h4 className="has-line-end">Konsultan</h4>
                            <nav id="TableOfContents">
                            <ul>
                                <li>
                                <a href="#bergabung-konsultan">
                                    Bagaimana bergabung bersama kami sebagai konsultan?
                                </a>
                                <ul>
                                    <li>
                                    <a href="#sistem-pengajuan">
                                        Bagaimana sistem dari pengajuan untuk menjadi konsultan?
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#legalitas-terjamin">
                                        Apakah legalitas sudah terjamin sebagai konsultan?
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#profit-konsultan">
                                        Bagimana kami memberikan profit kepada konsultan
                                        nantinya?
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#hak-tanggungjawab">
                                        Apa hak dan tanggung jawab kami sebagai konsultan UMKM?
                                    </a>
                                    </li>
                                </ul>
                                </li>
                                <li>
                                <a href="#layanan-pengembang">
                                    Layanan apa saya yang akan diberikan sebagai konsultan UMKM?
                                </a>
                                <ul>
                                    <li>
                                    {" "}
                                    <a href="#layanan-crowfunding">
                                        Layanan apa yang akan didapatkan pada Crowdfunding UMKM?
                                    </a>
                                    </li>
                                </ul>
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
                            <h2 id="bergabung-konsultan">
                            Bagaimana bergabung bersama kami sebagai konsultan?
                            </h2>
                            <p>
                            Untuk bergabung bersama kami sebagai konsultan, Anda perlu
                            melakukan proses registrasi melalui platform Crowdfunding UMKM
                            kami. Selain itu, kami juga memerlukan sertifikasi dan kompetensi
                            yang sesuai dengan pedoman dan regulasi yang berlaku. Hal ini
                            penting karena peran konsultan sangat vital dalam membimbing para
                            pelaku usaha UMKM yang akan berpartisipasi dalam Crowdfunding.
                            </p>
                            <p>
                            Sebagai konsultan, Anda akan menjadi mitra yang membantu para
                            pelaku usaha dalam menyusun proposal bisnis yang kuat dan efektif,
                            memberikan bimbingan selama proses penggalangan dana, dan
                            memberikan saran serta solusi untuk mengatasi berbagai tantangan
                            dalam mengembangkan bisnis. Dengan bergabung bersama kami sebagai
                            konsultan, Anda akan menjadi bagian dari upaya kami untuk
                            menyukseskan Crowdfunding UMKM dan mendukung pertumbuhan serta
                            kesuksesan para pelaku usaha di Indonesia.
                            </p>
                            <h3 id="sistem-pengajuan">
                            Bagaimana sistem dari pengajuan untuk menjadi konsultan?
                            </h3>
                            <p>
                            Sistem pengajuan untuk menjadi konsultan dalam platform
                            Crowdfunding UMKM kami adalah proses yang memerlukan beberapa
                            langkah dan persyaratan tertentu. Pertama, Anda perlu menyusun
                            profil dan mengisi formulir pendaftaran yang telah disediakan
                            dengan lengkap dan akurat. Dalam formulir ini, kami akan meminta
                            informasi mengenai latar belakang pendidikan, pengalaman kerja,
                            dan kompetensi yang relevan sebagai konsultan.
                            </p>
                            <p>
                            Selanjutnya, kami juga akan memerlukan rekomendasi atau referensi
                            dari instansi atau perusahaan terkait di mana Anda pernah bekerja
                            atau terlibat dalam bidang bisnis atau konsultasi sebelumnya.
                            Rekomendasi ini akan menjadi pertimbangan penting dalam proses
                            seleksi untuk memastikan bahwa setiap konsultan yang tergabung
                            dalam platform kami memiliki kualifikasi dan keahlian yang sesuai.
                            </p>
                            <p>
                            Sebagai seorang konsultan, Anda diharapkan memiliki pengetahuan
                            yang mendalam tentang UMKM dan bisnis secara umum. Anda harus
                            paham tentang permasalahan yang dihadapi oleh UMKM dan mampu
                            memberikan solusi yang efektif. Selain itu, keterampilan dalam
                            membina dan menyesuaikan diri terhadap lingkungan yang ada sangat
                            penting, karena konsultan akan berinteraksi dengan berbagai pelaku
                            usaha dan bekerja dengan beragam situasi bisnis. Dengan memiliki
                            kualifikasi dan kemampuan yang sesuai, Anda akan memiliki
                            kesempatan untuk menjadi konsultan yang berkontribusi dalam
                            mendukung pertumbuhan dan kesuksesan UMKM melalui platform
                            Crowdfunding kami.
                            </p>
                            <h3 id="legalitas-terjamin">
                            Apakah legalitas sudah terjamin sebagai konsultan?
                            </h3>
                            <p>
                            Tentu saja, legalitas sebagai konsultan dalam platform
                            Crowdfunding UMKM kami menjadi hal yang sangat penting dan
                            terjamin. Setiap konsultan yang ingin bergabung harus memenuhi
                            persyaratan hukum dan memiliki sertifikasi yang relevan sesuai
                            dengan bidang konsultasi yang mereka tawarkan. Kami akan melakukan
                            verifikasi dan validasi terhadap dokumen-dokumen yang diajukan
                            oleh calon konsultan untuk memastikan keabsahan legalitas mereka.
                            </p>
                            <p>
                            Selain itu, kami berkomitmen untuk beroperasi sesuai dengan
                            peraturan dan undang-undang yang berlaku, termasuk aturan yang
                            mengatur tentang konsultan. Sebagai platform yang berfokus pada
                            UMKM, kami memahami betapa pentingnya kepercayaan dan keamanan
                            bagi para pelaku usaha. Oleh karena itu, kami bekerja sama dengan
                            pihak berwenang dan instansi terkait untuk memastikan bahwa setiap
                            konsultan yang bergabung memiliki reputasi yang baik dan
                            terpercaya.
                            </p>
                            <p>
                            Kami juga akan terus melakukan pemantauan dan evaluasi terhadap
                            performa setiap konsultan dalam memberikan bimbingan kepada para
                            pelaku usaha. Hal ini bertujuan untuk memastikan bahwa kualitas
                            layanan yang diberikan tetap terjaga dan sesuai dengan standar
                            yang telah ditetapkan. Dengan legalitas yang terjamin dan komitmen
                            kami dalam memastikan keamanan dan transparansi, Anda sebagai
                            konsultan dapat bekerja dengan nyaman dan percaya diri dalam
                            membantu pertumbuhan UMKM melalui platform Crowdfunding kami.
                            </p>
                            <h3 id="profit-konsultan">
                            Bagimana kami memberikan profit kepada konsultan nantinya?
                            </h3>
                            <p>
                            Profit atau keuntungan bagi konsultan dalam platform Crowdfunding
                            UMKM akan diatur sesuai dengan kesepakatan yang telah dibuat
                            antara konsultan dan pelaku usaha yang mereka bantu. Konsultan
                            dapat menetapkan tarif atau fee konsultasi mereka sendiri
                            berdasarkan tingkat pengalaman, keahlian, dan jenis layanan yang
                            mereka tawarkan. Keuntungan yang diperoleh oleh konsultan mungkin
                            akan lebih kecil daripada keuntungan yang diperoleh oleh user
                            investor, namun hal ini wajar karena peran konsultan lebih fokus
                            pada memberikan bimbingan dan dukungan kepada para pelaku usaha.
                            </p>
                            <p>
                            Dalam platform Crowdfunding kami, transparansi sangat diutamakan.
                            Setiap kesepakatan dan biaya yang dibebankan oleh konsultan akan
                            dijelaskan secara terperinci kepada pelaku usaha sebelum mereka
                            memutuskan untuk menggunakan jasa konsultan tertentu. Hal ini
                            bertujuan untuk memastikan bahwa pelaku usaha memiliki pemahaman
                            yang jelas tentang biaya yang akan dikeluarkan dan layanan yang
                            akan diberikan oleh konsultan.
                            </p>
                            <p>
                            Kami juga berkomitmen untuk memberikan bimbingan dan pengawasan
                            terhadap konsultan yang tergabung dalam platform kami. Hal ini
                            dilakukan untuk memastikan bahwa kualitas layanan yang diberikan
                            tetap memenuhi standar yang tinggi dan sesuai dengan peraturan
                            yang berlaku. Dengan adanya transparansi, kesepakatan yang jelas,
                            dan bimbingan dari pihak kami, konsultan dapat bekerja dengan
                            percaya diri dan memberikan kontribusi yang berarti dalam membantu
                            pertumbuhan dan kesuksesan UMKM di Indonesia melalui Crowdfunding.
                            </p>
                            <h3 id="hak-tanggungjawab">
                            Apa hak dan tanggung jawab kami sebagai konsultan UMKM?
                            </h3>
                            <p>
                            Sebagai konsultan UMKM di platform Crowdfunding, Anda akan
                            memiliki beberapa hak dan tanggung jawab yang penting. Pertama,
                            sebagai konsultan, Anda memiliki hak untuk memberikan saran dan
                            panduan kepada pelaku usaha yang membutuhkan bantuan dalam
                            mengembangkan proyek mereka. Anda dapat menyampaikan ide,
                            strategi, dan rekomendasi yang berdasarkan pengetahuan dan
                            pengalaman Anda untuk membantu pelaku usaha mencapai kesuksesan.
                            </p>
                            <p>
                            Konsultan juga memiliki hak untuk menetapkan tarif atau fee
                            konsultasi mereka sendiri, yang dapat disesuaikan dengan tingkat
                            pengalaman dan keahlian yang dimiliki. Hak ini memungkinkan Anda
                            untuk menentukan nilai jasa Anda dan mendapatkan imbalan yang adil
                            atas layanan yang Anda berikan.
                            </p>
                            <p>
                            Namun, sebagai konsultan, Anda juga memiliki tanggung jawab yang
                            besar terhadap pelaku usaha yang Anda bantu dan platform
                            Crowdfunding secara keseluruhan. Tanggung jawab ini mencakup
                            memberikan bimbingan yang tepat, jujur, dan bermanfaat kepada
                            pelaku usaha, serta menjaga kerahasiaan informasi yang diberikan
                            oleh pelaku usaha. Anda juga bertanggung jawab untuk memberikan
                            solusi yang sesuai dengan kebutuhan dan tujuan bisnis para pelaku
                            usaha, serta menghindari benturan kepentingan yang dapat merugikan
                            mereka.
                            </p>
                            <p>
                            Selain itu, sebagai konsultan di platform Crowdfunding UMKM, Anda
                            juga memiliki tanggung jawab untuk mematuhi aturan dan peraturan
                            yang berlaku dalam beroperasi sebagai konsultan. Anda diharapkan
                            untuk berperan aktif dalam meningkatkan kualitas layanan dan
                            memastikan bahwa praktik Anda sesuai dengan standar etika dan
                            profesionalisme yang tinggi. Dengan menjalankan hak dan tanggung
                            jawab ini dengan baik, Anda dapat memberikan kontribusi yang
                            berarti bagi pertumbuhan dan kesuksesan UMKM di Indonesia.
                            </p>
                            <hr />
                            <h2 id="layanan-pengembang">
                            Layanan apa saya yang akan diberikan sebagai konsultan UMKM?
                            </h2>
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
                            <h2 id="layanan-crowfunding">
                            Layanan apa yang akan didapatkan pada Crowdfunding UMKM?
                            </h2>
                            <ul>
                            <li>
                                Akses ke Proyek UMKM: Pengguna Crowdfunding UMKM akan
                                mendapatkan akses eksklusif ke berbagai proyek UMKM yang
                                membutuhkan modal dan dukungan. Mereka dapat menjelajahi
                                proyek-proyek dari berbagai sektor dan memilih untuk
                                berinvestasi pada proyek yang menarik minat mereka.
                            </li>
                            <li>
                                Keuntungan Investasi: Investor akan mendapatkan potensi
                                keuntungan dari investasi yang berhasil. Jika proyek UMKM yang
                                diinvestasikan mencapai target dan berhasil, investor akan
                                menerima bagian dari keuntungan sesuai dengan kesepakatan yang
                                telah ditentukan.
                            </li>
                            <li>
                                Konsultasi Ahli: Pengguna Crowdfunding UMKM akan dapat
                                berkonsultasi dengan konsultan ahli yang terampil dalam
                                bidangnya. Konsultan akan memberikan panduan, nasihat, dan
                                rekomendasi yang bermanfaat untuk membantu pelaku usaha
                                mengembangkan proyek mereka dengan lebih baik.
                            </li>
                            <li>
                                Transparansi dan Keamanan: Platform Crowdfunding UMKM menawarkan
                                transparansi penuh terkait proyek-proyek yang dijalankan dan
                                penggunaan dana investasi. Seluruh transaksi dan informasi
                                terkait akan dijaga dengan keamanan yang ketat, sehingga
                                memberikan rasa aman bagi para investor.
                            </li>
                            <li>
                                Mendorong Pertumbuhan UMKM: Dengan berinvestasi melalui
                                Crowdfunding UMKM, pengguna juga ikut berkontribusi pada
                                pertumbuhan sektor UMKM di Indonesia. Dukungan ini dapat
                                membantu UMKM berkembang, menciptakan lapangan kerja baru, dan
                                berdampak positif bagi perekonomian negara.
                            </li>
                            </ul>
                        </div>
                        {/* gabung sekarang */}
                        <h3 id="gabung-sekarang" />
                        <div className="row">
                            <div className="col-md-6 d-flex justify-content-end">
                            <Link className="btn btn-primary mt-4 mr-4" href={process.env.NEXT_PUBLIC_REGISTER_REVIEWER} target="_blank">
                                Daftar Sekarang
                            </Link>
                            </div>
                            <div className="col-md-6 d-flex justify-content-start">
                            <Link className="btn btn-primary mt-4 ml-4" href={process.env.NEXT_PUBLIC_LOGIN_REVIEWER} target="_blank">
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
        </ServiceReviewerLayout>
    )
}