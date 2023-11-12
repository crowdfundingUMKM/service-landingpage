// components/Footer.js
import Link from 'next/link'
import Image from 'next/image'


export default function Footer() {
    return (
        <footer className="section-sm bg-tertiary">
            <div className="container">
                <div className="row justify-content-between">
                <div className="col-lg-2 col-md-4 col-6 mb-4">
                    <div className="footer-widget">
                    <h5 className="mb-4 text-primary font-secondary">Service</h5>
                    <ul className="list-unstyled">
                        <li className="mb-2">
                        <Link href="/service/investor">Beri Permodalan UMKM</Link>
                        </li>
                        <li className="mb-2">
                        <Link href="/service/campaign">Buat Permodalan UMKM</Link>
                        </li>
                        <li className="mb-2">
                        <Link href="/service/reviewer">Gabung Konsultan UMKM</Link>
                        </li>
                        <li className="mb-2">
                        <Link href="/service/admin">Gabung Bersama Kami</Link>
                        </li>
                        <li className="mb-2">
                        <Link href="/term">Ketentuan dan Legalitas</Link>
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4 col-6 mb-4">
                    <div className="footer-widget">
                    <h5 className="mb-4 text-primary font-secondary">Tentang</h5>
                    <ul className="list-unstyled">
                        <li className="mb-2">
                        <Link href="/how-it-work#benefit">Benefit</Link>
                        </li>
                        <li className="mb-2">
                        <Link href="/how-it-work">Cerita CRWD</Link>
                        </li>
                        <li className="mb-2">
                        <Link href="/about#team">Team</Link>
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4 col-6 mb-4">
                    <div className="footer-widget">
                    <h5 className="mb-4 text-primary font-secondary">Bantuan</h5>
                    <ul className="list-unstyled">
                        <li className="mb-2">
                            <Link href="/contact-admin">Kontak Admin</Link>
                        </li>
                        <li className="mb-2">
                        <Link href="/midtrans-terms">Ketentuan Midtrans</Link>
                        </li>
                        <li className="mb-2">
                        <Link href="/faq">FAQs</Link>
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 newsletter-form">
                    <div style={{ backgroundColor: "#F4F4F4", padding: 35 }}>
                    <h5 className="mb-4 text-primary font-secondary">Project</h5>
                    <div className="pe-0 pe-xl-5"></div>
                    <p className="mb-0">
                        Selamat datang di platform kami yang memberikan solusi untuk
                        menyelesaikan Skripsi dan memahami struktur dari Microservice
                        Arsitektur yang dapat dikembangkan lebih lanjut.{" "}
                    </p>
                    </div>
                </div>
                </div>
                <div className="row align-items-center mt-5 text-center text-md-start">
                <div className="col-lg-4">
                    <Link href="/">
                    <Image
                        loading="eager"
                        decoding="async"
                        className="img-fluid"
                        height={40}
                        width={160}
                        src="/assets/images/logoUmkm.svg"
                        alt="Logo"
                        rel="preload"
                    />
                    </Link>
                </div>
                <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
                    <ul className="list-unstyled list-inline mb-0 text-lg-center">
                    <li className="list-inline-item me-4">
                        <Link className="text-black" href="https://github.com/ahhzaky" target="_blank">
                        @Design By <span>Ahmad Zaky</span>
                        </Link>
                    </li>
                    </ul>
                </div>
                <div className="col-lg-4 col-md-6 text-md-end mt-4 mt-md-0">
                    <ul className="list-unstyled list-inline mb-0 social-icons">
                    <li className="list-inline-item me-3">
                        <Link
                        title="Explore My Discord Crowdfunding"
                        href={process.env.NEXT_PUBLIC_DISCORD_URL}
                        className="text-black"
                        target="_blank"
                        >
                        <i className="fab fa-discord" />
                        </Link>
                    </li>
                    <li className="list-inline-item me-3">
                        <Link
                        title="Explorer My Github Docs"
                        className="text-black"
                        href="https://github.com/crowdfundingUMKM"
                        target="_blank"
                        >
                        <i className="fab fa-github" />
                        </Link>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
        </footer>

    );
  }

