import Link from 'next/link'
import Image from 'next/image'

import {usePathname } from 'next/navigation';
export default function Header() {
    const pathname  = usePathname()



    return (
        <header className="navigation bg-tertiary">
            <nav className="navbar navbar-expand-xl navbar-light text-center py-3">
                <div className="container">
                <Link className="navbar-brand" href="/">
                    <Image
                    loading="eager"
                    decoding="async"
                    className="img-fluid"
                    src="/assets/images/logoUmkm.svg"
                    alt="Logo"
                    rel="preload"
                    height={40}
                    width={160}
                    priority={true}
                    />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    {" "}
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li className={`nav-item ${pathname === '/' ? 'active' : ''}`}>
                        <Link className="nav-link" href="/">
                        Home
                        </Link>
                    </li>
                    <li className="nav-item ">
                        <Link className="nav-link" href="/about">
                        Tentang
                        </Link>
                    </li>
                    <li className={`nav-item ${pathname === '/how-it-work' ? 'active' : ''}`}>
                        <Link className="nav-link" href="/how-it-work">
                        Bagaimana Kami Kerja
                        </Link>
                    </li>
                    <li className={`nav-item ${pathname === '/list-campaign' ? 'active' : ''}`}>
                        <Link className="nav-link" href="/list-campaign">
                        UMKM
                        </Link>
                    </li>
                    <li className={`nav-item ${pathname === '/contact-admin' ? 'active' : ''}`}>
                        <Link className="nav-link" href="/contact-admin">
                        Kontak Admin
                        </Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        >
                        Pages
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li>
                            <Link className={`dropdown-item ${pathname === '/service/campaign' ? 'active' : ''}`} href="/service/campaign">
                            Daftar UMKM Anda
                            </Link>
                        </li>
                        <li>
                            <Link className={`dropdown-item ${pathname === '/service/reviewer' ? 'active' : ''}`} href="/service/reviewer">
                            Daftar Konsultan
                            </Link>
                        </li>
                        <li>
                            <Link className={`dropdown-item ${pathname === '/service' ? 'active' : ''}`} href="/service">
                            Services
                            </Link>
                        </li>
                        <li>
                            <Link className={`dropdown-item ${pathname === '/service/admin' ? 'active' : ''}`} href="/service/admin">
                            Gabung Bersama Kami
                            </Link>
                        </li>
                        <li>
                            <Link className={`dropdown-item ${pathname === '/term' ? 'active' : ''}`} href="/term">
                            Syarat &amp; Ketentuan
                            </Link>
                        </li>
                        </ul>
                    </li>
                    </ul>
                    {/* account btn */}{" "}
                    <Link href={process.env.NEXT_PUBLIC_LOGIN_NEXT_INVESTOR} className="btn btn-outline-primary">
                    Log In
                    </Link>
                    {/* account btn */}{" "}
                    <Link href={process.env.NEXT_PUBLIC_REGISTER_NEXT_INVESTOR} className="btn btn-primary ms-2 ms-lg-3">
                    Sign Up
                    </Link>
                </div>
                </div>
            </nav>
        </header>

    )
}