import ServiceCampaignLayout from 'src/pages/service/campaign/layout';
import Link from 'next/link';

export default function ServiceCampaign() {

    return (

        <ServiceCampaignLayout>
            <main>
                <section className="page-header bg-tertiary">
                    <div className="container">
                    <div className="row">
                        <div className="col-8 mx-auto text-center">
                        <h2 className="mb-3 text-capitalize">Daftar UMKM Anda</h2>
                        <ul
                            className="list-inline breadcrumbs text-capitalize"
                            style={{ fontWeight: 500 }}
                        >
                            <li className="list-inline-item">
                            <Link href="/">Home</Link>
                            </li>
                            <li className="list-inline-item">
                            / &nbsp; <Link href="/service">Services</Link>
                            </li>
                            <li className="list-inline-item">
                            / &nbsp; <a href="">Daftar UMKM Anda</a>
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
                            <h4 className="has-line-end">Pengusaha</h4>
                            <nav id="TableOfContents">
                            <ul>
                                <li>
                                <a href="#bagaimana-bergabung">
                                    Bagaimana Membuat Campaign UMKM pada Crowdfunding?
                                </a>
                                <ul>
                                    <li>
                                    <a href="#sistem-pengajuan">
                                        Bagaimana sistem dari pengajuan untuk membuka usaha?
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#modal-cairkan">
                                        Bagaimana nantinya modal yang didapatkan bisa di
                                        cairkan?
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#modal-pajak">
                                        Apakah modal akan di kenakan pajak?
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#legalitas-terjamin">
                                        Apakah legalitas sudah terjamin?
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#profit-user">
                                        Bagimana kami memberikan profit kepada user nantinya?
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#modal-belum-tercapai">
                                        Apakah modal yang belum tercapai atau investor belum ada
                                        aakan bisa mencairkan dana?
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#hak-tanggungjawab">
                                        Apa hak dan tanggung jawab kami sebagai pelaku usaha?
                                    </a>
                                    </li>
                                </ul>
                                </li>
                                <li>
                                <a href="#layanan-pengembang">
                                    Layanan apa saya yang akan diberikan sebagai pengembang
                                    usaha?
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
                            <h3 id="bagaimana-bergabung">
                            Bagaimana Membuat Campaign UMKM pada Crowdfunding?
                            </h3>
                            <p>
                            Membuat campaign UMKM pada Crowdfunding merupakan peluang bagi
                            para pelaku usaha untuk membuka bisnis sesuai dengan aturan yang
                            berlaku. Sebelum memulai campaign, para pemilik usaha harus
                            memastikan legalitas usaha mereka dan memenuhi tanggung jawab
                            sebagai pelaku usaha yang bertanggung jawab. Dengan berkomitmen
                            terhadap bisnisnya, mereka dapat menghadapi berbagai tantangan dan
                            hambatan yang akan dihadapi dalam proses kampanye Crowdfunding.
                            Namun, mereka tidak perlu khawatir karena Crowdfunding menyediakan
                            para konsultan yang mahir dan berpengalaman untuk membantu dan
                            membimbing mereka selama perjalanan bisnis. Para konsultan ini
                            telah dihire oleh Crowdfunding dengan tujuan agar bisnis yang
                            didukung oleh platform dapat berjalan dengan lancar dan mencapai
                            kesuksesan.
                            </p>
                            <p>
                            Dalam proses kampanye Crowdfunding, para pelaku usaha akan
                            diberikan dukungan dan panduan oleh para konsultan yang ahli di
                            bidangnya. Para konsultan ini akan membantu para pelaku usaha
                            dalam menyusun strategi, mengidentifikasi target audiens, dan
                            merancang kampanye yang efektif. Mereka juga akan memberikan
                            masukan berharga untuk mengoptimalkan presentasi bisnis dan
                            mengatasi tantangan yang mungkin timbul selama kampanye
                            berlangsung. Dengan adanya dukungan dan panduan dari para
                            konsultan yang berpengalaman, para pelaku usaha diharapkan dapat
                            mencapai target dana yang dibutuhkan dan menghadirkan bisnis
                            mereka dengan semestinya.
                            </p>
                            <h3 id="sistem-pengajuan">
                            Bagaimana sistem dari pengajuan untuk membuka usaha?
                            </h3>
                            <p>
                            Sistem pengajuan untuk membuka usaha pada Crowdfunding memastikan
                            para pelaku usaha dapat mengikuti prosedur yang berlaku dengan
                            tepat. Para pemilik usaha harus memastikan memiliki legalitas yang
                            sah dan memenuhi tanggung jawab sebagai pelaku usaha yang
                            bertanggung jawab. Dalam proses pengajuan, mereka akan menghadapi
                            berbagai tantangan yang perlu diatasi, namun demikian, mereka akan
                            didukung oleh para konsultan yang mahir yang telah dihire oleh
                            Crowdfunding. Dengan bantuan konsultan berpengalaman ini, para
                            pelaku usaha diharapkan dapat mengatasi hambatan dan
                            mengoptimalkan peluang keberhasilan sehingga bisnis yang didukung
                            oleh platform Crowdfunding dapat berjalan dengan semestinya.
                            </p>
                            <h2 id="modal-cairkan">
                            Bagaimana nantinya modal yang didapatkan bisa di cairkan?
                            </h2>
                            <p>
                            Nantinya, modal yang didapatkan oleh para UMKM melalui
                            Crowdfunding akan bisa dicairkan dengan proses yang teratur dan
                            transparan. Para UMKM yang telah mengajukan campaign akan
                            mendapatkan berbagai benefit, termasuk pengaturan pajak sesuai
                            dengan undang-undang yang berlaku. Para pelaku usaha tidak perlu
                            khawatir tentang dana yang belum dicairkan, karena dana tersebut
                            akan diambil setelah campaign atau proyek yang dibuka telah
                            terpenuhi oleh para investor yang tertarik dengan bisnis yang
                            dijalankan dan setelah para investor juga memperoleh keuntungan
                            yang dijanjikan. Selain itu, para UMKM juga akan mendapatkan
                            review dan panduan dari para konsultan ahli, yang akan memberikan
                            masukan berharga untuk meningkatkan kesuksesan bisnis mereka.
                            Dengan adanya sistem yang jelas dan dukungan dari Crowdfunding,
                            para UMKM dapat mengelola dana mereka dengan lebih efisien dan
                            aman, sehingga mereka dapat fokus pada pertumbuhan dan
                            keberlanjutan bisnis mereka.
                            </p>
                            <h3 id="modal-pajak">Apakah modal akan di kenakan pajak?</h3>
                            <p>
                            Tentu saja, modal yang diperoleh melalui Crowdfunding akan
                            dikenakan pajak sesuai dengan ketentuan yang berlaku di wilayah
                            masing-masing. Besaran pajak akan bergantung pada jumlah modal
                            yang diterima oleh para pelaku usaha. Namun, para UMKM yang
                            mengajukan campaign akan mendapatkan bimbingan dan panduan dari
                            konsultan yang ahli. Para konsultan akan membantu mengamati dan
                            menganalisis potensi kerugian yang mungkin terjadi pada bisnis,
                            sehingga mereka dapat memberikan solusi dan rekomendasi untuk
                            memperbaiki dan meningkatkan kinerja bisnis ke depannya. Dengan
                            bantuan dari para konsultan yang berpengalaman, para pelaku usaha
                            dapat lebih siap menghadapi peraturan pajak dan meningkatkan
                            keberhasilan bisnis mereka dengan lebih baik di masa yang akan
                            datang.
                            </p>
                            <h3 id="legalitas-terjamin">Apakah legalitas sudah terjamin?</h3>
                            <p>
                            Tentu saja, legalitas dalam Crowdfunding UMKM telah terjamin untuk
                            memberikan keamanan kepada para pelaku usaha, konsultan, dan
                            investor. Kami sebagai pihak Crowdfunding mengikuti regulasi yang
                            ditetapkan oleh OJK (Otoritas Jasa Keuangan) untuk memastikan
                            keselamatan dan kredibilitas platform kami. Selain itu, keamanan
                            data juga menjadi prioritas kami. Sistem kami dikelola dengan
                            ketat oleh developer admin dan pihak terkait lainnya, yang
                            berperan penting dalam memastikan bahwa data dan informasi yang
                            disimpan aman dan terlindungi. Dengan mengedepankan keamanan, kami
                            berkomitmen untuk mendukung pertumbuhan bisnis dan memajukan
                            bangsa melalui Crowdfunding UMKM yang terpercaya dan andal.
                            </p>
                            <h3 id="profit-user">
                            Bagimana kami memberikan profit kepada user nantinya?
                            </h3>
                            <p>
                            Kami akan memberikan profit kepada user investor dan user
                            konsultan melalui skema bagi hasil dari proyek-proyek yang Anda
                            sebagai pelaku usaha buka. Investor akan mendapatkan penghasilan
                            yang lebih besar dari hasil investasi mereka, sementara konsultan
                            juga akan mendapatkan keuntungan sesuai dengan kontribusi mereka
                            dalam memberikan bimbingan dan dukungan kepada proyek-proyek UMKM.
                            Seluruh proses ini akan berjalan secara adil dan transparan, dan
                            selalu diawasi oleh OJK (Otoritas Jasa Keuangan) untuk memastikan
                            kesesuaian dengan peraturan dan kebijakan yang berlaku. Dengan
                            skema yang adil dan pengawasan yang ketat, kami bertujuan untuk
                            memberikan penghasilan yang menguntungkan bagi seluruh user dalam
                            platform Crowdfunding UMKM.
                            </p>
                            <h3 id="modal-belum-tercapai">
                            Apakah modal yang belum tercapai atau investor belum ada aakan
                            bisa mencairkan dana?
                            </h3>
                            <p>
                            Tidak, modal yang belum tercapai atau jika belum ada investor yang
                            tertarik tidak akan dicairkan. Dana yang dicairkan untuk pelaku
                            usaha adalah dana yang terkumpul sesuai dengan target yang telah
                            ditetapkan dalam campaign. Kehadiran para konsultan juga akan
                            membantu dalam membimbing para pelaku usaha selama proses
                            penggalangan dana, memberikan solusi terbaik, dan memastikan
                            transparansi dalam sistem kami. Hal ini bertujuan untuk memberikan
                            kemudahan dan dukungan bagi para pelaku usaha yang sedang merintis
                            usaha serta memastikan bahwa dana akan digunakan secara efektif
                            untuk pertumbuhan bisnis ke depannya.
                            </p>
                            <h3 id="hak-tanggungjawab">
                            Apa hak dan tanggung jawab kami sebagai pelaku usaha?
                            </h3>
                            <p>
                            Sebagai pelaku usaha pada platform Crowdfunding UMKM, Anda
                            memiliki beberapa hak yang perlu diakui dan dihormati. Hak pertama
                            adalah memiliki akses ke informasi dan data mengenai campaign yang
                            sedang berlangsung, termasuk perkembangan dana yang terkumpul dan
                            perincian investasi dari para investor. Anda juga berhak
                            mendapatkan dukungan dan bimbingan dari konsultan yang telah
                            dihire oleh Crowdfunding untuk membantu mengoptimalkan peluang
                            keberhasilan proyek Anda. Selain itu, Anda memiliki hak untuk
                            mendapatkan transparansi dan kejelasan mengenai proses pencairan
                            dana setelah target tercapai. Hal ini akan memberikan rasa aman
                            dan kepercayaan bagi para pelaku usaha bahwa dana yang mereka
                            peroleh akan digunakan secara tepat dan efisien.
                            </p>
                            <p>
                            Namun, sebagai pelaku usaha, Anda juga memiliki tanggung jawab
                            yang perlu dipenuhi. Tanggung jawab pertama adalah menyusun
                            rencana bisnis yang komprehensif dan jelas, termasuk memastikan
                            bahwa target dana yang diajukan sesuai dengan kebutuhan proyek.
                            Anda juga harus memastikan bahwa semua informasi yang disampaikan
                            kepada investor dan konsultan adalah akurat dan dapat
                            dipertanggungjawabkan. Selain itu, Anda harus berkomitmen untuk
                            menjalankan proyek dengan transparansi dan integritas, serta
                            memberikan hasil yang sesuai dengan yang dijanjikan kepada para
                            investor. Seluruh tanggung jawab ini akan membantu menciptakan
                            hubungan saling percaya antara Anda, investor, dan pihak
                            Crowdfunding, sehingga proyek Anda dapat berjalan dengan sukses
                            dan memberikan manfaat bagi semua pihak yang terlibat.
                            </p>
                            <hr />
                            <h2 id="layanan-pengembang">
                            Layanan apa saya yang akan diberikan sebagai pengembang usaha?
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
                            Layanan apa yang akan didapatkan pada Crowdfunding UMKM.
                            </h2>
                            <ul>
                            <li>
                                Pengelolaan Platform: Pengembang admin akan bertanggung jawab
                                untuk mengelola dan mengoptimalkan platform Crowdfunding UMKM
                                agar berjalan dengan lancar dan efisien. Mereka akan memastikan
                                bahwa seluruh fitur dan fungsi platform berfungsi dengan baik,
                                termasuk proses pendaftaran, pengajuan campaign, dan pencairan
                                dana.
                            </li>
                            <li>
                                Keamanan dan Privasi: Pengembang admin akan memastikan keamanan
                                dan privasi data para pelaku usaha serta para investor. Mereka
                                akan mengimplementasikan langkah-langkah keamanan yang ketat
                                untuk melindungi informasi sensitif dan mencegah akses yang
                                tidak sah ke platform.
                            </li>
                            <li>
                                Bimbingan dan Dukungan: Pengembang admin akan memberikan
                                bimbingan dan dukungan teknis kepada pelaku usaha dalam
                                mengelola dan memantau campaign mereka. Mereka akan menjawab
                                pertanyaan-pertanyaan teknis dan memberikan solusi terhadap
                                masalah yang mungkin timbul dalam penggunaan platform.
                            </li>
                            <li>
                                Pemeliharaan dan Peningkatan: Pengembang admin akan melakukan
                                pemeliharaan rutin terhadap platform dan melakukan perbaikan
                                jika terjadi bug atau masalah teknis lainnya. Mereka juga akan
                                terus melakukan peningkatan dan pengembangan platform untuk
                                memberikan pengalaman yang lebih baik bagi para pelaku usaha dan
                                para investor.
                            </li>
                            </ul>
                        </div>
                        {/* gabung sekarang */}
                        <h3 id="gabung-sekarang" />
                        <div className="row">
                            <div className="col-md-6 d-flex justify-content-end">
                            <Link className="btn btn-primary mt-4 mr-4" href={process.env.NEXT_PUBLIC_REGISTER_CAMPAIGN} target="_blank">
                                Daftar Sekarang
                            </Link>
                            </div>
                            <div className="col-md-6 d-flex justify-content-start">
                            <Link className="btn btn-primary mt-4 ml-4" href={process.env.NEXT_PUBLIC_LOGIN_CAMPAIGN} target="_blank">
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
        </ServiceCampaignLayout>

    );
    
}